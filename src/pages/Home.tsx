import { Modal, TranscribingContent } from "../components";
import { useGlobalStore } from "../context/useStore";
import AudioMotionAnalyzer from "audiomotion-analyzer";
import "regenerator-runtime/runtime";
import { FaRegPlayCircle } from "react-icons/fa";
import { LiaStopCircle } from "react-icons/lia";
import { toast } from "sonner";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();
  const { isModalStartOpen, setNamePersonCall, setIsModalStartOpen, setModalStopTranscribing, modalStopTranscribing, micStream, setMicStream, listening, setListening, setOpenViewSidebar, setOpenSettings } = useGlobalStore();

  useEffect(() => {
    const containerElement = document.getElementById("container");
    const audioMotion = new AudioMotionAnalyzer(containerElement ?? undefined, {
      mode: 10,
      channelLayout: "single",
      fillAlpha: 0.6,
      gradient: "prism",
      lineWidth: 1.5,
      maxFreq: 20000,
      minFreq: 30,
      mirror: -1,
      height: 159,
      radial: false,
      reflexAlpha: 1,
      reflexBright: 1,
      reflexRatio: 0.5,
      showPeaks: false,
      showScaleX: false,
    });

    const startSpeechRecognition = () => {
      if (navigator.mediaDevices) {
        navigator.mediaDevices
          .getUserMedia({ audio: true, video: false })
          .then((stream) => {
            const newMicStream = audioMotion.audioCtx.createMediaStreamSource(stream);
            audioMotion.connectInput(newMicStream);
            SpeechRecognition.startListening({
              continuous: true,
              language: "en-US",
            });
            audioMotion.volume = 0;
            setMicStream(newMicStream);
          })
          .catch(() => toast.error("Microphone didn't connect on the app"));
      }
    };
    startSpeechRecognition();

    return () => {
      audioMotion.disconnectInput(micStream, true);
    };
  }, [listening]);

  if (!browserSupportsSpeechRecognition) toast.error("Browser didn't support speech recognition");

  const handleCloseStopModal = () => {
    setModalStopTranscribing(false);
    setNamePersonCall("");
    resetTranscript();
    navigate("/current-history");
    SpeechRecognition.stopListening();
    setListening(false);
  };

  if (modalStopTranscribing)
    return (
      <>
        <div className="fixed right-0 top-0 w-full h-screen bg-black/75" />
        <Modal normalText="Are you sure?" onClick={handleCloseStopModal} isInput={false} grayText="Your transcription will be saved to the archive locally on your machine" />
      </>
    );

  const handleCloseInputCallModal = () => {
    setIsModalStartOpen(false);
    setNamePersonCall("");
  };

  if (isModalStartOpen)
    return (
      <>
        <div className="fixed right-0 top-0 w-full h-screen bg-black/75" />
        <Modal normalText="Leadership 2.0 Coach" onClick={handleCloseInputCallModal} isInput={true} grayText="Enter the name of the person you will be speaking to and click 'Start Call'" />
      </>
    );

  return (
    <section className="home__section">
      <div className="flex__between pb-4">
        <div className="flex items-center gap-4 md:gap-7 lg:gap-12">
          <div className="livetranscribing__container">
            <p className="text-[14px] md:text-[18px] lg:text-[28px] tracking-tight">Live Transcribe</p>
          </div>
          {listening && (
            <button
              type="button"
              onClick={() => {
                setOpenViewSidebar(true);
                setOpenSettings(false);
              }}
              className="tracking-tight h-[40px] lg:h-[55px] text-[14px] md:text-[18px] lg:text-[28px] text-[#9b9fab] dark:text-[#667085]"
            >
              View Side Kick
            </button>
          )}
        </div>
        <button
          type="button"
          onClick={() => {
            if (listening) {
              setModalStopTranscribing(true);
              setOpenSettings(false);
            } else {
              setIsModalStartOpen(true);
              setOpenSettings(false);
            }
          }}
          className={`${listening ? "bg-[#6C272D]" : "bg-primary"} btn__start__transcribing`}
        >
          {listening ? <LiaStopCircle size={18} /> : <FaRegPlayCircle size={18} />}
          <span className="text-[12px] md:text-sm">{listening ? "Stop" : "Start"} Transcribing</span>
        </button>
      </div>
      <div className={` ${listening ? "p-0" : " p-6"} not__start__transcribing`}>
        {listening ? <div id="container"></div> : null}
        <div className={`${listening ? "flex-row justify-between items-center w-full " : "flex-col"} flex`}>
          <p className={` ${listening && "absolute bottom-4 left-4"} text-black/70 dark:text-gray`}>{listening ? "" : "Not"} Recording</p>
          <span className={`dark:text-[#61687a] ${listening && "absolute bottom-4 right-4"} text-[#828ba1]  text-sm`}>Audio Quality: {listening ? "24-bit/192 kHz" : "Unknown"}</span>
        </div>
      </div>
      <div className="w-full max-h-[44vh] mt-3  scrollbar-none overflow-y-auto ">{listening && <TranscribingContent />}</div>
    </section>
  );
};

export default Home;

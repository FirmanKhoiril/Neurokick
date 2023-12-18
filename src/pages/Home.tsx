import { Modal, TranscribingContent } from "../components";
import { useGlobalStore } from "../context/useStore";
import AudioMotionAnalyzer from "audiomotion-analyzer";
import "regenerator-runtime/runtime";
import { FaRegPlayCircle } from "react-icons/fa";
import { LiaStopCircle } from "react-icons/lia";
import { toast } from "sonner";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { useEffect, useState } from "react";

const Home = () => {
  const [micStream, setMicStream] = useState<any>(null);
  const { browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();

  const { isModalStartOpen, namePersonCall, setNamePersonCall, setIsModalStartOpen, setModalStopTranscribing, modalStopTranscribing, listening, setListening, setOpenViewSidebar, setOpenSettings } = useGlobalStore();

  useEffect(() => {
    const containerElement = document.getElementById("container");
    const audioMotion = new AudioMotionAnalyzer(containerElement ?? undefined, {
      mode: 10,
      channelLayout: "single",
      fillAlpha: 0.6,
      // "orangered"
      // "rainbow"
      // "classic"
      // "steelblue"
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
    setListening(true);
    startSpeechRecognition();

    const intervalId = setInterval(() => {
      SpeechRecognition.stopListening();

      resetTranscript();
      startSpeechRecognition();
    }, 10000);
    return () => {
      clearInterval(intervalId);
      audioMotion.disconnectInput(micStream, true);
      setListening(false);
      SpeechRecognition.stopListening();
    };
  }, [namePersonCall !== "", !isModalStartOpen]);

  if (!browserSupportsSpeechRecognition) toast.error("Browser didn't support speech recognition");

  const handleCloseStopModal = () => {
    setModalStopTranscribing(false);
    setNamePersonCall("");
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
          {!isModalStartOpen && namePersonCall !== "" && (
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
            if (!isModalStartOpen && namePersonCall !== "") {
              setModalStopTranscribing(true);
              setOpenSettings(false);
            } else {
              setIsModalStartOpen(true);
              setOpenSettings(false);
            }
          }}
          className={`${namePersonCall !== "" && !isModalStartOpen ? "bg-[#6C272D]" : "bg-primary"} btn__start__transcribing`}
        >
          {namePersonCall !== "" && !isModalStartOpen ? <LiaStopCircle size={18} /> : <FaRegPlayCircle size={18} />}
          <span className="text-[12px] md:text-sm">{namePersonCall !== "" && !isModalStartOpen && listening ? "Stop" : "Start"} Transcribing</span>
        </button>
      </div>
      <div className="w-full h-full  scrollbar-none overflow-y-auto flex-col">
        <div className={` ${namePersonCall !== "" && !isModalStartOpen ? "p-0" : " p-6"} not__start__transcribing`}>
          {namePersonCall !== "" ? !isModalStartOpen && <div id="container"></div> : null}
          <div className={`${namePersonCall !== "" && !isModalStartOpen ? "flex-row justify-between items-center w-full " : "flex-col"} flex`}>
            <p className={` ${namePersonCall !== "" && !isModalStartOpen && "absolute bottom-4 left-4"} text-black/70 dark:text-gray`}>{namePersonCall !== "" && !isModalStartOpen ? "" : "Not"} Recording</p>
            <span className={`dark:text-[#61687a] ${namePersonCall !== "" && !isModalStartOpen && "absolute bottom-4 right-4"} text-[#828ba1]  text-sm`}>
              Audio Quality: {namePersonCall !== "" && !isModalStartOpen ? "24-bit/192 kHz" : "Unknown"}
            </span>
          </div>
        </div>
      </div>
      {namePersonCall !== "" && !isModalStartOpen && <TranscribingContent />}
    </section>
  );
};

export default Home;

import { Modal, TranscribingContent } from "../components";
import { useGlobalStore } from "../context/useStore";
import "regenerator-runtime/runtime";
import { useSpeechRecognition } from "react-speech-recognition";
import { FaRegPlayCircle } from "react-icons/fa";
import { LiaStopCircle } from "react-icons/lia";
import { toast } from "sonner";
import { useAudioMotionSpeechRecognition } from "../hooks/useAudioMotionSpeechRecognition";
import { useSaveTranscript } from "../hooks/useSaveTranscript";

const Home = () => {
  const { browserSupportsSpeechRecognition, transcript } = useSpeechRecognition();
  const { isModalStartOpen, setNamePersonCall, setIsModalStartOpen, setModalStopTranscribing, modalStopTranscribing, transcriptId, listening, setOpenViewSidebar, setOpenSettings } = useGlobalStore();

  const { saveTranscript, isLoading } = useSaveTranscript();

  useAudioMotionSpeechRecognition();

  if (!browserSupportsSpeechRecognition) toast.error("Browser didn't support speech recognition");

  const handleCloseStopModal = () => {
    saveTranscript({ content: transcript, id: transcriptId });
  };

  if (modalStopTranscribing)
    return (
      <>
        <div className="fixed right-0 top-0 w-full h-screen bg-black/75" />
        <Modal normalText="Are you sure?" isLoadingSavedTranscript={isLoading} onClick={handleCloseStopModal} isInput={false} grayText="Your transcription will be saved to the archive locally on your machine" />
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

  const handleCloseViewSideKick = () => {
    setOpenViewSidebar(true);
    setOpenSettings(false);
  };

  const handleStartStopTranscribing = () => {
    if (listening) {
      setModalStopTranscribing(true);
      setOpenSettings(false);
    } else {
      setIsModalStartOpen(true);
      setOpenSettings(false);
    }
  };
  return (
    <section className="home__section">
      <div className="flex__between pb-4">
        <div className="flex items-center gap-4 md:gap-7 lg:gap-12">
          <div className="livetranscribing__container">
            <p className="text-[14px] md:text-[18px] lg:text-[28px] tracking-tight">Live Transcribe</p>
          </div>
          {listening && (
            <button type="button" onClick={handleCloseViewSideKick} className="tracking-tight h-[40px] lg:h-[55px] text-[14px] md:text-[18px] lg:text-[28px] text-[#9b9fab] dark:text-[#667085]">
              View Side Kick
            </button>
          )}
        </div>
        <button type="button" onClick={handleStartStopTranscribing} className={`${listening ? "bg-[#6C272D]" : "bg-primary"} btn__start__transcribing`}>
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

import "regenerator-runtime/runtime";
import { useSpeechRecognition } from "react-speech-recognition";

const TranscribingContent = () => {
  const { transcript: isTranscript } = useSpeechRecognition();

  return (
    <div className=" flex-col gap-4 pt-4  bg-gradient-to-t from-black/20 dark:from-white/20 via-black dark:via-white to-black/20 from-[7.28%] via-[56%] to-[96%] dark:to-white/20 bg-clip-text text-transparent overflow-y-auto w-full ">
      <p>{isTranscript !== "" ? `You: "${isTranscript}"` : "You must speak into the microphone"}</p>
    </div>
  );
};

export default TranscribingContent;

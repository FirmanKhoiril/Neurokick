import "regenerator-runtime/runtime";
import { useSpeechRecognition } from "react-speech-recognition";

const TranscribingContent = () => {
  const { transcript } = useSpeechRecognition();

  return (
    <div className="flex h-full flex-col gap-4  bg-gradient-to-t from-black/40 dark:from-white/40 via-black dark:via-white to-black/40 dark:to-white/40 bg-clip-text text-transparent overflow-y-auto w-full ">
      <p>{transcript !== "" ? `You: "${transcript}"` : "You must speak into the microphone"}</p>
    </div>
  );
};

export default TranscribingContent;

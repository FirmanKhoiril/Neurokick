import "regenerator-runtime/runtime";
import { useSpeechRecognition } from "react-speech-recognition";

const TranscribingContent = () => {
  const { transcript } = useSpeechRecognition();

  return (
    <div className="flex relative h-full flex-col gap-4 mt-4 bg-gradient-to-t from-black/20 dark:from-white/20 via-black dark:via-white to-black/20 dark:to-white/20 bg-clip-text text-transparent overflow-y-auto w-full ">
      <p>{transcript}</p>
    </div>
  );
};

export default TranscribingContent;

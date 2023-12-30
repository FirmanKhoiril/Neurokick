import AudioMotionAnalyzer from "audiomotion-analyzer";
import { useEffect } from "react";
import { toast } from "sonner";
import { useGlobalStore } from "../context/useStore";
import "regenerator-runtime/runtime";
import SpeechRecognition from "react-speech-recognition";

export const useAudioMotionSpeechRecognition = () => {
  const { micStream, setMicStream, listening } = useGlobalStore();

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
            audioMotion.volume = 0;
            setMicStream(newMicStream);
            SpeechRecognition.startListening({
              continuous: true,
              language: "en-US",
            });
          })
          .catch(() => toast.error("Microphone didn't connect on the app"));
      }
    };
    startSpeechRecognition();

    return () => {
      audioMotion.disconnectInput(micStream, true);
    };
  }, [listening]);
};

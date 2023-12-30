import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { TSaveTranscript } from "../types/Types";
import { toast } from "sonner";
import { savedTranscript } from "../api/postTranscript";
import "regenerator-runtime/runtime";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { useGlobalStore } from "../context/useStore";

export const useSaveTranscript = () => {
  const { setModalStopTranscribing, setListening, setNamePersonCall } = useGlobalStore();
  const { resetTranscript } = useSpeechRecognition();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: saveTranscript, isLoading } = useMutation({
    mutationFn: ({ content, id }: TSaveTranscript) => savedTranscript({ content, id }),
    onError: (err: any) => {
      toast.error(err.message);
    },
    onSuccess: () => {
      toast.success(`Transcript updated successfuly!`);
      queryClient.invalidateQueries("getTranscript");
      setModalStopTranscribing(false);
      setNamePersonCall("");
      resetTranscript();
      setListening(false);
      SpeechRecognition.stopListening();
      navigate("/current-history");
    },
  });
  return { saveTranscript, isLoading };
};

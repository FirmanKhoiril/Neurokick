import { useMutation, useQueryClient } from "react-query";
import { createNewTranscript } from "../api/postTranscript";
import { toast } from "sonner";
import { useGlobalStore } from "../context/useStore";

export const useCreateTranscript = () => {
  const { namePersonCall, setIsModalStartOpen, setListening, setTranscriptId } = useGlobalStore();
  const queryClient = useQueryClient();
  const { mutate: createTranscript, isLoading } = useMutation({
    mutationFn: (name: string) => createNewTranscript(name),
    onError: (err: any) => {
      toast.error(err.message);
    },
    onSuccess: (data: any) => {
      setIsModalStartOpen(false);
      queryClient.invalidateQueries("getTranscript");
      setListening(true);
      setTranscriptId(data.data._id);

      toast.success(`Success calling ${namePersonCall}`);
    },
  });

  return { createTranscript, isLoading };
};

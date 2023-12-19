import { useGlobalStore } from "../context/useStore";
import { FormEvent } from "react";
import { ColorRing } from "react-loader-spinner";
import { toast } from "sonner";
import { createNewTranscript } from "../api/postTranscript";
import { useMutation } from "react-query";

interface IModal {
  normalText: string;
  isInput: boolean;
  grayText: string;
  onClick: () => void;
  isLoadingSavedTranscript?: boolean;
}

const Modal = ({ normalText, isInput, grayText, onClick, isLoadingSavedTranscript }: IModal) => {
  const { namePersonCall, dark, setNamePersonCall, setTranscriptId, setListening, setIsModalStartOpen, setModalStopTranscribing } = useGlobalStore();

  const { mutate: createTranscript, isLoading } = useMutation({
    mutationFn: (name: string) => createNewTranscript(name),
    onError: (err: any) => {
      toast.error(err.message);
    },
    onSuccess: (data: any) => {
      setIsModalStartOpen(false);
      setListening(true);
      setTranscriptId(data.data._id);
      toast.success(`Success calling ${namePersonCall}`);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createTranscript(namePersonCall);
  };

  return (
    <form onSubmit={handleSubmit} className="modal__container">
      <h1 className="text-[20px] font-semibold">{normalText}</h1>
      <p className="text-[12px] md:text-sm text-[#7f868b] dark:text-[#B3BCC4]">{grayText}</p>
      {isInput ? <input type="text" value={namePersonCall} onChange={(e) => setNamePersonCall(e.target.value)} required className="modal__input" placeholder="Enter name here..." /> : ""}
      <div className="flex mt-4 justify-end gap-4 items-end">
        <button
          onClick={() => {
            setNamePersonCall("");
            setModalStopTranscribing(false);
            setIsModalStartOpen(false);
            setListening(false);
          }}
          type="button"
          className="border py-2.5 md:py-3.5 w-[140px] md:w-[180px] px-5 border-[#2E6FFF] rounded-[8px] sm:text-base text-sm"
        >
          No, cancel
        </button>
        {isInput ? (
          <button type="submit" className="bg-primary flex justify-center items-center text-white w-[140px] md:w-[180px] sm:text-base text-sm py-2.5 md:py-3.5 px-5 rounded-[8px]">
            {isLoading ? (
              <ColorRing
                visible={true}
                height="25"
                width="25"
                ariaLabel="blocks-loading"
                wrapperClass="blocks-wrapper"
                colors={[dark ? "#ffffff" : "#000000", dark ? "#ffffff" : "#000000", dark ? "#ffffff" : "#000000", dark ? "#ffffff" : "#000000", dark ? "#ffffff" : "#000000"]}
              />
            ) : (
              "Yes, confirm"
            )}
          </button>
        ) : (
          <button type="button" onClick={onClick} className="bg-primary flex justify-center items-center text-white w-[140px] md:w-[180px] py-2.5 md:py-3.5 px-5 sm:text-base text-sm rounded-[8px]">
            {isLoadingSavedTranscript ? (
              <ColorRing
                visible={true}
                height="25"
                width="25"
                ariaLabel="blocks-loading"
                wrapperClass="blocks-wrapper"
                colors={[dark ? "#ffffff" : "#000000", dark ? "#ffffff" : "#000000", dark ? "#ffffff" : "#000000", dark ? "#ffffff" : "#000000", dark ? "#ffffff" : "#000000"]}
              />
            ) : (
              "Yes, confirm"
            )}
          </button>
        )}
      </div>
    </form>
  );
};

export default Modal;

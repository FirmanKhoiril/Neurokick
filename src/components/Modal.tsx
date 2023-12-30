import { useGlobalStore } from "../context/useStore";
import { Loading } from "./";
import { useCreateTranscript } from "../hooks/useCreateTranscript";
import { IModal } from "../types/Types";

const Modal = ({ normalText, isInput, grayText, onClick, isLoadingSavedTranscript }: IModal) => {
  const { namePersonCall, setNamePersonCall, listening, setListening, setIsModalStartOpen, setModalStopTranscribing } = useGlobalStore();

  const { createTranscript, isLoading } = useCreateTranscript();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalStartOpen(false);
    setListening(true);
    createTranscript(namePersonCall);
  };

  const handleCancelModal = () => {
    if (listening) {
      setModalStopTranscribing(false);
    } else {
      setIsModalStartOpen(false);
      setNamePersonCall("");
      setListening(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="modal__container">
      <h1 className="text-[20px] font-semibold">{normalText}</h1>
      <p className="text-[12px] md:text-sm text-[#7f868b] dark:text-[#B3BCC4]">{grayText}</p>
      {isInput ? <input type="text" value={namePersonCall} onChange={(e) => setNamePersonCall(e.target.value)} required className="modal__input" placeholder="Enter name here..." /> : ""}
      <div className="flex mt-4 justify-end gap-4 items-end">
        <button onClick={handleCancelModal} type="button" className="border py-2.5 md:py-3.5 w-[140px] md:w-[180px] px-5 border-[#2E6FFF] rounded-[8px] sm:text-base text-sm">
          No, cancel
        </button>
        {isInput ? (
          <button type="submit" className="bg-primary flex justify-center items-center text-white w-[140px] md:w-[180px] sm:text-base text-sm py-2.5 md:py-3.5 px-5 rounded-[8px]">
            {isLoading ? <Loading width={25} height={25} /> : "Yes, confirm"}
          </button>
        ) : (
          <button type="button" onClick={onClick} className="bg-primary flex justify-center items-center text-white w-[140px] md:w-[180px] py-2.5 md:py-3.5 px-5 sm:text-base text-sm rounded-[8px]">
            {isLoadingSavedTranscript ? <Loading width={25} height={25} /> : "Yes, confirm"}
          </button>
        )}
      </div>
    </form>
  );
};

export default Modal;

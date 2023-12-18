import { useGlobalStore } from "../context/useStore";
import { FormEvent } from "react";
import { toast } from "sonner";

interface IModal {
  normalText: string;
  isInput: boolean;
  grayText: string;
  onClick: () => void;
}

const Modal = ({ normalText, isInput, grayText, onClick }: IModal) => {
  const { namePersonCall, setNamePersonCall, setIsModalStartOpen, setModalStopTranscribing } = useGlobalStore();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalStartOpen(false);
    toast.success(`Success calling ${namePersonCall}`);
  };
  return (
    <form onSubmit={handleSubmit} className="modal__container">
      <h1 className="text-[20px] font-semibold">{normalText}</h1>
      <p className="text-[12px] md:text-sm text-[#7f868b] dark:text-[#B3BCC4]">{grayText}</p>
      {isInput ? <input type="text" value={namePersonCall} onChange={(e) => setNamePersonCall(e.target.value)} required className="modal__input" placeholder="Enter name here..." /> : ""}
      <div className="flex mt-4 justify-end gap-4 items-end">
        <button onClick={onClick} type="button" className="border py-2.5 md:py-3.5 w-[140px] md:w-[180px] px-5 border-[#2E6FFF] rounded-[8px] sm:text-base text-sm">
          No, cancel
        </button>
        {isInput ? (
          <button type="submit" className="bg-primary text-white w-[140px] md:w-[180px] sm:text-base text-sm py-2.5 md:py-3.5 px-5 rounded-[8px]">
            Yes, confirm
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setModalStopTranscribing(false);
              setNamePersonCall("");
            }}
            className="bg-primary text-white w-[140px] md:w-[180px] py-2.5 md:py-3.5 px-5 sm:text-base text-sm rounded-[8px]"
          >
            Yes, confirm
          </button>
        )}
      </div>
    </form>
  );
};

export default Modal;

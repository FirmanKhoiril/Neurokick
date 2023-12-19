import { IconDelete } from "../../assets/index";
import { useGlobalStore } from "../../context/useStore";
import { BsTrash3 } from "react-icons/bs";
import { ICardHistory } from "../../pages/History";
import moment from "moment";

const History = ({ isProcessing, name, createdAt }: ICardHistory) => {
  const { dark } = useGlobalStore();

  return (
    <div className="card__history">
      <div className=" text-[#667085] flex flex-col gap-1 md:gap-2 text-[13px] lg:text-sm">
        {isProcessing && <h1 className="text-red-600">Still Processing...</h1>}
        <p className=" text-black/90 dark:text-gray ">
          {name} / Sarah <br className="sm:hidden block" /> (1:1 weekly sync up call)
        </p>
        <p>{moment(createdAt).fromNow()}</p>
      </div>
      <div className="text-[#667085] ">
        <p className="text-[12px] md:text-base">{moment(createdAt).format("L")}</p>
      </div>
      <div className="text-[12px] lg:text-sm flex flex-col gap-1 text-[#667085]">
        <p>5 multiplier behaviours found</p>
        <p>2 diminishing behaviours found</p>
      </div>
      <button type="button">{!dark ? <BsTrash3 size={19} /> : <img src={IconDelete} height={22} width={25} alt="Delete Conversation" />}</button>
    </div>
  );
};

export default History;

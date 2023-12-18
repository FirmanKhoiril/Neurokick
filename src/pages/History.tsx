import { IconDelete } from "../assets/index";
import { useGlobalStore } from "../context/useStore";
import { BsTrash3 } from "react-icons/bs";

const History = () => {
  const { dark } = useGlobalStore();
  return (
    <section className="history__section pb-8">
      <h1 className="text-[30px] text-slate-500 dark:text-gray tracking-tight">Your History</h1>
      <div className="flex px-5 mt-10 flex-row text-slate-500 dark:text-gray items-center gap-2">
        <h1 className="w-[380px]">Respondent</h1>
        <h1 className="w-[184px]">Date</h1>
        <h1 className="w-[300px]">Behavioaural Trends</h1>
      </div>
      <div className="card__history">
        <div className="h-[90px] text-[#667085] w-[380px] flex flex-col gap-2  text-sm">
          <h1 className="text-red-600">Still Processing...</h1>
          <p>Sarah / Ian (1:1 weekly sync up call)</p>
          <p>1 min ago</p>
        </div>
        <div className="text-[#667085] w-[200px]">
          <p>11/30/23</p>
        </div>
        <div className="text-sm flex flex-col w-[300px] gap-1 text-[#667085]">
          <p>5 multiplier behaviours found</p>
          <p>2 diminishing behaviours found</p>
        </div>
        <button type="button">{!dark ? <BsTrash3 size={20} /> : <img src={IconDelete} height={22} width={22} alt="Delete Conversation" />}</button>
      </div>
      <div className="card__history">
        <div className="h-[90px] text-[#667085] w-[380px] flex flex-col gap-2  text-sm">
          <p className=" text-black/90 dark:text-gray text-base">Sarah / Ian (1:1 weekly sync up call)</p>
          <p>1 min ago</p>
        </div>
        <div className="text-[#667085] w-[200px]">
          <p>11/30/23</p>
        </div>
        <div className="text-sm flex flex-col w-[300px] gap-1 text-[#667085]">
          <p>5 multiplier behaviours found</p>
          <p>2 diminishing behaviours found</p>
        </div>
        <button type="button">{!dark ? <BsTrash3 size={20} /> : <img src={IconDelete} height={22} width={22} alt="Delete Conversation" />}</button>
      </div>
      <div className="card__history">
        <div className="h-[90px] text-[#667085] w-[380px] flex flex-col gap-2  text-sm">
          <p className=" text-black/90 dark:text-gray text-base">Sarah / Ian (1:1 weekly sync up call)</p>
          <p>1 min ago</p>
        </div>
        <div className="text-[#667085] w-[200px]">
          <p>11/30/23</p>
        </div>
        <div className="text-sm flex flex-col w-[300px] gap-1 text-[#667085]">
          <p>5 multiplier behaviours found</p>
          <p>2 diminishing behaviours found</p>
        </div>
        <button type="button">{!dark ? <BsTrash3 size={20} /> : <img src={IconDelete} height={22} width={22} alt="Delete Conversation" />}</button>
      </div>
      <div className="card__history">
        <div className="h-[90px] text-[#667085] w-[380px] flex flex-col gap-2  text-sm">
          <p className=" text-black/90 dark:text-gray text-base">Sarah / Ian (1:1 weekly sync up call)</p>
          <p>1 min ago</p>
        </div>
        <div className="text-[#667085] w-[200px]">
          <p>11/30/23</p>
        </div>
        <div className="text-sm flex flex-col w-[300px] gap-1 text-[#667085]">
          <p>5 multiplier behaviours found</p>
          <p>2 diminishing behaviours found</p>
        </div>
        <button type="button">{!dark ? <BsTrash3 size={20} /> : <img src={IconDelete} height={22} width={22} alt="Delete Conversation" />}</button>
      </div>
    </section>
  );
};

export default History;

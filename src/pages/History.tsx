import { IconDelete } from "../assets/index";
import { useGlobalStore } from "../context/useStore";
import { BsTrash3 } from "react-icons/bs";

const History = () => {
  const { dark } = useGlobalStore();
  return (
    <section className="history__section pb-8">
      <h1 className="text-[30px] text-slate-500 dark:text-gray tracking-tight">Your History</h1>
      <div className=" pl-3 pr-9 sm:pr-5 sm:pl-5 mt-10 flex items-center justify-between sm:grid  grid-cols-4  text-slate-500 dark:text-gray  gap-2 w-full">
        <h1 className="text-sm md:text-base">Respondent</h1>
        <h1 className="text-sm md:text-base">Date</h1>
        <h1 className="text-sm md:text-base">Behavioaural Trends</h1>
      </div>
      <div className="card__history">
        <div className=" text-[#667085] flex flex-col gap-1 md:gap-2 text-[13px] lg:text-sm">
          <h1 className="text-red-600">Still Processing...</h1>
          <p>
            Sarah / Ian <br className="sm:hidden block" /> (1:1 weekly sync up call)
          </p>
          <p>1 min ago</p>
        </div>
        <div className="text-[#667085] ">
          <p className="text-[12px] md:text-base">11/30/23</p>
        </div>
        <div className="text-[12px] lg:text-sm flex flex-col gap-1 text-[#667085]">
          <p>5 multiplier behaviours found</p>
          <p>2 diminishing behaviours found</p>
        </div>
        <button type="button">{!dark ? <BsTrash3 size={19} /> : <img src={IconDelete} height={22} width={25} alt="Delete Conversation" />}</button>
      </div>
      <div className="card__history">
        <div className=" text-[#667085]  flex flex-col gap-2  text-[13px] lg:text-sm">
          <p className=" text-black/90 dark:text-gray ">
            Sarah / Ian <br className="sm:hidden block" /> (1:1 weekly sync up call)
          </p>
          <p>1 hour ago</p>
        </div>
        <div className="text-[#667085]">
          <p className="text-[12px] md:text-base">11/30/23</p>
        </div>
        <div className="text-[12px] lg:text-sm flex flex-col gap-1 text-[#667085]">
          <p>5 multiplier behaviours found</p>
          <p>2 diminishing behaviours found</p>
        </div>
        <button type="button">{!dark ? <BsTrash3 size={20} /> : <img src={IconDelete} height={22} width={22} alt="Delete Conversation" />}</button>
      </div>
    </section>
  );
};

export default History;

import { viewSideContent } from "../assets/dummyData";
import { useGlobalStore } from "../context/useStore";
import { FaArrowRight } from "react-icons/fa";
import ViewSide from "./card/ViewSide";

const ViewSidebar = () => {
  const { setOpenViewSidebar, openViewSidebar } = useGlobalStore();
  return (
    <aside
      className={`h-screen ${
        openViewSidebar ? "translate-x-[0%]" : "translate-x-[100%]"
      } transition duration-300 fixed top-0 border-l dark:border-slate-800 right-0 z-30 dark:bg-[#0C0C0D] bg-white w-[400px] md:w-[450px] lg:w-[601px] p-4 overflow-y-auto scrollbar-none  flex flex-col gap-1`}
    >
      <button type="button" className="p-2 dark:text-[#344054] text-[#9aa2b0]" onClick={() => setOpenViewSidebar(false)}>
        <FaArrowRight size={22} />
      </button>
      <div className="px-3 sm:px-4 md:px-6 lg:px-8 py-4">
        <h1 className="text-[#667085] text-[30px] font-semibold">Side Kick</h1>

        {viewSideContent.map((item) => (
          <ViewSide content={item.content} key={item.timestamp} pdfDetails={item.pdfDetails} timestamp={item.timestamp} />
        ))}
      </div>
    </aside>
  );
};

export default ViewSidebar;

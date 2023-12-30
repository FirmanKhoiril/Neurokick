import { useNavigate, useParams } from "react-router-dom";
import { useGetTranscriptById } from "../hooks/useGetTranscribingById";
import { toast } from "sonner";
import { Loading } from "../components";
import { MdArrowBack, MdDateRange } from "react-icons/md";
import moment from "moment";

const SelectedTranscript = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isError, isFetching, isLoading, isSuccess } = useGetTranscriptById(id);

  if (isError) toast.error("Make sure you connect internet");

  return (
    <section className="history__section pb-8">
      {/* if Loading and fetching to getDataTranscript by id show Loading components */}
      {isLoading && isFetching && (
        <div className="w-full h-[60vh] flex justify-center items-center">
          <Loading width={80} height={80} />
        </div>
      )}
      {isSuccess ? (
        <div className="flex flex-col gap-2">
          <div className="w-full justify-between items-center flex ">
            <div className="flex gap-2 items-center">
              <button type="button" className="p-2 rounded-full drop-shadow-md bg-black/10 dark:bg-white/10" onClick={() => navigate(-1)}>
                <MdArrowBack size={20} />
              </button>
              <h1 className="text-[16px] sm:text-[24px] md:text-[30px] text-slate-500 dark:text-gray tracking-tight">
                Hello, <span className="text-black dark:text-white ">{data?.data?.data.name || "Firman"}</span>
              </h1>
            </div>
            <div className="flex items-center gap-2 py-2 px-3 sm:px-5 rounded-[10px] shadow-black/20 shadow-[0px_12px_26px_2px] md:text-base text-sm">
              <MdDateRange size={20} />
              <p>{moment(data?.data?.data.createdAt).format("LL")}</p>
            </div>
          </div>
          {/* Content */}
          <div className="w-[80%] px-5 mt-4 bg-white dark:bg-white/5 shadow-[2px_6px_8px_2px] shadow-black/20  rounded-tr-3xl rounded-b-3xl py-5 ">
            {/*  */}

            <p>{data?.data?.data.content || "Make sure you start transcribing to create content"}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default SelectedTranscript;

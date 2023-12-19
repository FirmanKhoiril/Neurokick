import { emptyTranscript } from "../assets";
import { CHistory, Loading } from "../components";
import { useGetAllTranscript } from "../hooks/useGetAllTranscript";
import { toast } from "sonner";

export interface ICardHistory {
  _id: string;
  content: string;
  name: string;
  isProcessing: boolean;
  createdAt: string;
}
const History = () => {
  const { data, isError, isFetching, isLoading, isSuccess } = useGetAllTranscript();

  if (isError) toast.error("Make sure your connection is stable");

  return (
    <section className="history__section pb-8">
      <h1 className="text-[24px] md:text-[30px] text-slate-500 dark:text-gray tracking-tight">Your History</h1>

      {isLoading && isFetching && (
        <div className="w-full flex justify-center items-center h-[60vh]">
          <Loading width={80} height={80} />
        </div>
      )}

      {data?.data.length === 0 ? (
        <div className="flex pt-10 flex-col gap-10 justify-center items-center w-full">
          <img src={emptyTranscript} width={240} height={240} alt="Create new Transcribing in Live Transcribing page" />
          <h1 className="dark:text-white text-black tracking-wide cursor-default text-2xl">Create new Transcribing </h1>
        </div>
      ) : (
        isSuccess && (
          <>
            <div className=" pl-3 pr-9 sm:pr-5 sm:pl-5 pt-4 sm:pt-6 md:mt-4 flex items-center justify-between sm:grid  grid-cols-4  text-slate-500 dark:text-gray  gap-2 w-full">
              <h1 className="text-sm md:text-base">Respondent</h1>
              <h1 className="text-sm md:text-base">Date</h1>
              <h1 className="text-sm md:text-base">Behavioaural Trends</h1>
            </div>
            {data?.data
              .slice()
              .reverse()
              .map((item: ICardHistory) => (
                <CHistory key={item._id} {...item} />
              ))}
          </>
        )
      )}
    </section>
  );
};

export default History;

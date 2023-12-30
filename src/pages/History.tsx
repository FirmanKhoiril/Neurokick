import { CHistory, Loading, NotFound } from "../components";
import { useGetAllTranscript } from "../hooks/useGetAllTranscript";
import { toast } from "sonner";
import { ICardHistory } from "../types/Types";

const History = () => {
  const { data, isError, isFetching, isLoading, isSuccess } = useGetAllTranscript();

  if (isError) toast.error("Make sure your connection is stable");

  return (
    <section className="history__section pb-8">
      <h1 className="text-[24px] md:text-[30px] text-slate-500 dark:text-gray tracking-tight">Your History</h1>

      {/* if Loading and fetching to getAllTranscript show Loading components  */}

      {isLoading && isFetching && (
        <div className="w-full flex justify-center items-center h-[60vh]">
          <Loading width={80} height={80} />
        </div>
      )}

      {/* When theres no data after fecthing show Nothing Found Components */}

      {data?.data.length === 0 ? (
        <NotFound />
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

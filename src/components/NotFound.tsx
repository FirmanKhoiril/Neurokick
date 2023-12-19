import { emptyTranscript } from "../assets";

const NotFound = () => {
  return (
    <div className="flex pt-10 flex-col gap-10 justify-center items-center w-full">
      <img src={emptyTranscript} width={240} height={240} alt="Create new Transcribing in Live Transcribing page" />
      <h1 className="dark:text-white text-black tracking-wide cursor-default text-2xl">Create new Transcribing </h1>
    </div>
  );
};

export default NotFound;

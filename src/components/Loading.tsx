import { ColorRing } from "react-loader-spinner";
import { useGlobalStore } from "../context/useStore";

type TLoading = {
  width: number;
  height: number;
};
const Loading = ({ width, height }: TLoading) => {
  const { dark } = useGlobalStore();
  return (
    <ColorRing
      visible={true}
      height={height}
      width={width}
      ariaLabel="blocks-loading"
      wrapperClass="blocks-wrapper"
      colors={[dark ? "#ffffff" : "#000000", dark ? "#ffffff" : "#000000", dark ? "#ffffff" : "#000000", dark ? "#ffffff" : "#000000", dark ? "#ffffff" : "#000000"]}
    />
  );
};

export default Loading;

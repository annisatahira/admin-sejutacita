import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="bg-white p-24 flex items-center justify-center">
      <ReactLoading
        type={"spin"}
        color={"#0A6EBD"}
        height={"10%"}
        width={"10%"}
      />
    </div>
  );
};

export default Loading;

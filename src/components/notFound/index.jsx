import { TfiFaceSad } from "react-icons/tfi";

const NotFoundData = () => {
  return (
    <div className="bg-white p-12 flex flex-col items-center justify-center uppercase">
      <TfiFaceSad className="text-6xl" />
      <h1 className="text-red-600 text-2xl mt-4">Sorry</h1>
      <h2>No Data Found</h2>
    </div>
  );
};

export default NotFoundData;

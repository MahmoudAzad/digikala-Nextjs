import Image from "next/image";
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image
        src="/loading.gif"
        width={10}
        height={10}
        alt="لطفا کمی صبر کنید ..."
        className="w-auto "
      />
    </div>
  );
};

export default Loading;

"use client";
import Image from "next/image";
import { useSelector } from "react-redux";

const VishListPage = () => {
  const vishList = useSelector((state) =>
    Object.values(state.reducer.wishList.entities)
  );

  console.log("vish list => ", vishList);
  if (!vishList) {
    return <p>please wait</p>;
  }
  return (
    <>
      {vishList?.map((item) => (
        <div>
          <Image src={item.thumbnail} width={100} height={100} />
        </div>
      ))}
    </>
  );
};

export default VishListPage;

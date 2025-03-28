import VerifyPropertyCard from "./VerifyPropertyCard";
import { useEffect, useState } from "react";
import { SkeletonCard2 } from "./SkeletonCard";
import { Titles } from "../constant";
import Chat from "./Chat";
import { useSelector } from "react-redux";

const VerifyProperty = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const address = useSelector((state:any)=>state.Home.address);

  useEffect(() => {
    if(address !== ""){
      setIsLoading(true)
    }
  }, [address]);

  return (
    <div className="flex w-full mt-[5rem] overflow-hidden">
      <Chat />
      <div className="bg-[#f4f4f4] md:w-1/2 lg:h-[35rem] px-5 overflow-y-auto">
        <p className="font-[ClashDisplay-Medium] text-xl leading-9 textColor mb-4 text-center">
          {Titles[location.pathname as keyof typeof Titles]}
        </p>
        {!isLoading ? <SkeletonCard2 /> : <VerifyPropertyCard />}
      </div>
    </div>
  );
};

export default VerifyProperty;

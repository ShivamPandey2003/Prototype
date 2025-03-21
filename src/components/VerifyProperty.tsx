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
    <div className="flex w-full">
      <Chat />
      <div className="bg-[#f4f4f4] md:w-3/5 lg:h-[35rem] px-16">
        <p className="text-center my-2 text-[#0b43be] font-semibold">
          {Titles[location.pathname as keyof typeof Titles]}
        </p>
        {!isLoading ? <SkeletonCard2 /> : <VerifyPropertyCard />}
      </div>
    </div>
  );
};

export default VerifyProperty;

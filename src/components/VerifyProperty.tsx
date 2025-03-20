import VerifyPropertyCard from "./VerifyPropertyCard";
import { useEffect, useState } from "react";
import { SkeletonCard2 } from "./SkeletonCard";
import { useAddressStore } from "../stores/store";

const VerifyProperty = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { address } = useAddressStore();

  useEffect(() => {
    if (address !== "") {
      setIsLoading(true);
    }
  }, [address]);

  return <div>{!isLoading ? <SkeletonCard2 /> : <VerifyPropertyCard />}</div>;
};

export default VerifyProperty;

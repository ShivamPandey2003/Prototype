import { useSelector } from "react-redux"

const AddressTag = () => {

  const Home = useSelector((state:any)=>state.Home)

  return (
    <div className="bg-[#5D9DFE] p-3 rounded-b-2xl flex items-center justify-between w-full absolute top-0 left-0 z-40">
        <p className="font-[ClashDisplay-Medium] text-base leading-[25.12px] text-white">{Home.address}</p>
        <p className="font-[ClashDisplay-Regular] text-sm text-white">{Home.date}</p>
    </div>
  )
}

export default AddressTag
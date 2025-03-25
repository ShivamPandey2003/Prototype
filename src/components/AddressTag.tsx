import { useSelector } from "react-redux"

const AddressTag = () => {

  const Home = useSelector((state:any)=>state.Home)

  return (
    <div className="bg-[#5D9DFE] p-3 rounded-b-2xl text-lg text-white flex justify-between w-full absolute top-0 left-0 z-40">
        <p>{Home.address}</p>
        <p>{Home.date}</p>
    </div>
  )
}

export default AddressTag
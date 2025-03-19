import { useAddressStore } from "../stores/store"

const AddressTag = () => {

  const {address, geo} = useAddressStore()

  return (
    <div className="bg-[#0b43be] p-4 rounded-b-2xl text-white flex justify-between text-xs w-full absolute top-0 left-0 z-50">
        <p>{address}</p>
        <p>{geo}</p>
    </div>
  )
}

export default AddressTag
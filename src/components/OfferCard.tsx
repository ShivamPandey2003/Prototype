import React from 'react'

const OfferCard = () => {
  return (
    <div className='min-h-[200px] rounded-2xl border-2 border-[#67d3bf] bg-white p-2 my-4'>
        <img src={`https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} alt="img"  className='w-full h-[120px] rounded-2xl object-center'/>
        <p className='text-base text-center mt-4'>18, xyz street, miami Florida, 12.08.2025</p>
    </div>
  )
}

export default OfferCard
import { Outlet } from 'react-router'
import Aside from '../components/Aside'

const IndexLayout = () => {
  return (
    <div className='flex min-h-screen'>
        <Aside/>
        <div className='ml-[280px] w-full flex-1 overflow-x-hidden'>
            <Outlet/>
        </div>
    </div>
  )
}

export default IndexLayout
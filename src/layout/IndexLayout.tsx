import { Outlet } from 'react-router'
import Aside from '../components/Aside'

const IndexLayout = () => {
  return (
    <div className='flex'>
        <Aside/>
        <div className='lg:w-4/5'>
            <Outlet/>
        </div>
    </div>
  )
}

export default IndexLayout
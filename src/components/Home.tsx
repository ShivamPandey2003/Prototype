import { ChevronRight, HomeIcon } from 'lucide-react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router'
import { resetAndLoadFromStorage } from '../stores/reducers/Homereducer';

const Home = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(resetAndLoadFromStorage());
  },[])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-6 max-w-lg">
            <div className="bg-blue-600 text-white p-8 rounded-3xl relative">
              <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-lg">
                <HomeIcon className="w-5 h-5" />
              </div>
              
              <h1 className="font-display text-4xl font-semibold mb-4">
                Welcome to<br />
                Offer Savant
              </h1>
              
              <p className="text-lg opacity-90">
                Your Smartest Step Toward<br />
                Owning Your Dream Home
              </p>
            </div>
            <Link to={'/create'} className="w-full bg-emerald-400 hover:bg-emerald-500 text-blue-900 font-semibold py-4 px-6 rounded-full flex items-center justify-between transition-colors">
              <span className="text-xl">Create Your Offer</span>
              <ChevronRight className="w-6 h-6" />
            </Link>
            <div className="border-2 border-blue-100 rounded-2xl p-6 text-center text-blue-600">
              Let's embark on this journey together to discover your winning offer—tailored to your goals, preferences, and the current market
            </div>
          </div>
          <div className="flex-1 hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
              alt="Professional real estate agent"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
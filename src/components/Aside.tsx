import { Link, useNavigate } from "react-router";
import OfferCard, { OfferCardSkeleton } from "./OfferCard";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useState } from "react";
import { logout } from "../stores/reducers/authSlice";
import Button from "./Button";

const Aside = () => {
  const data = useSelector((state: any) => state.auth);
  const [toggle, setToggle] = useState<boolean>(false);
  const address = useSelector((state:any)=>state.Home.address);
  const navigate = useNavigate()

  const dispatch = useDispatch();

  return (
    <div className="fixed top-0 left-0 h-screen w-[280px] flex flex-col border-r-1 border-[#bfbfbf] group">
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex items-center gap-3">
          <span className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10">
            <span className="bg-zinc-100 flex size-full font-primary items-center justify-center rounded-full dark:bg-zinc-800">
              {data.user.email[0]}
            </span>
          </span>
          <span className="text-sm font-medium text-[#797979]">
            {data.user.email}
          </span>
        </div>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-settings text-[#79ACF8]"
            onClick={() => setToggle((prev) => !prev)}
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-5 z-50 -right-4 mx-1 my-1 min-w-[220px] rounded-xl sidebar bg-white border border-black/15 shadow`}
          >
                <Button onClick={()=>dispatch(logout())}>Log Out</Button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <Button onClick={()=>navigate('/create')}>Create an offer</Button>
      </div>
      <div className="border-t-[#797979] border-t-[0.5px] opacity-40"></div>
      <div className="flex-1 px-4 py-0 overflow-y-auto flex flex-col items-center custom-scrollbar">
        <h2 className="my-4 text-sm font-normal font-primary text-[#272727]">Your Offers</h2>
        <div className="space-y-4 flex flex-col items-center w-full">
          {
            Array.from({length:3}).map((_, i)=>(
              <Fragment key={i}>
                {address !== "" ? <OfferCard/>: <OfferCardSkeleton/>}
              </Fragment>
            ))
          }
        </div>
      </div>
      <div className="flex border-t border-[#E5E7EB] bg-[#B8D4FF] rounded-t-2xl text-[#272727]">
        <Link
          to={"/"}
          className="flex-1 p-4 text-center font-[ClashDisplay-Medium] text-base font-semibold"
        >
          Home
        </Link>
        <p className="flex-1 p-4 text-center font-[ClashDisplay-Medium] text-base font-semibold">FAQ</p>
      </div>
    </div>
  );
};

export default Aside;

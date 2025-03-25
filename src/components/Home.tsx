import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { resetAndLoadFromStorage } from "../stores/reducers/Homereducer";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetAndLoadFromStorage());
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-full">
      <div className="flx-1 flex flex-col items-center justify-center px-8">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center md:items-start xl:items-stretch justify-between  relative gap-6 md:gap-4 xl:gap-0">
          <div className="space-y-2 bg-[#1E4DB7] rounded-[30px] rounded-tr-none p-8 sm:p-10 md:p-12 lg:p-14 relative w-full md:w-auto md:max-w-[55%] lg:max-w-3xl z-10 md:my-6 lg:my-6 self-start">
            <div className="absolute -top-0 -right-12 sm:-right-16 md:-right-20 bg-[#1E4DB7] p-3 sm:p-4 md:p-5 px-6 sm:px-7 md:px-8 h-auto w-auto rounded-tr-[36px] rounded-br-[36px] z-10">
              <img
                src="data:image/png;base64,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"
                alt="logo"
                className="h-12 sm:h-14 md:h-16 lg:h-[68px] w-8 sm:w-10 md:w-11 lg:w-[46px]"
              />
            </div>
            <h1 className="text-[clamp(28px,5vw,88px)] md:text-[clamp(32px,6vw,88px)] text-left text-white">
              Welcome to
              <br />
              <span>
                Offer <br />
                Savant
              </span>
            </h1>
            <p className="text-[clamp(16px,2.5vw,36px)] md:text-[clamp(18px,3vw,36px)] leading-tight text-white">
              <span>
                Your Smartest Step Toward
                <br />
              </span>
              <span>
                Owning Your Dream Home
                <br />
              </span>
            </p>
          </div>
          <img
            src="https://mira.thinkbar.tech/assets/agent-DiJ8And2.png"
            alt="Professional"
            className="h-auto w-full max-w-[80%] md:max-w-[40%] md:min-w-[30%] md:h-[400px] lg:h-[500px] xl:h-[600px] object-contain mt-8 xl:-mb-10 md:mt-0 xl:mt-0 xl:self-end relative z-0"
          />
        </div>
        <div className="w-full max-w-7xl flex flex-col items-center mt-[-20px] xl:mt-0 z-10 mb-2">
          <Link
            to={"/create"}
            className="group flex w-full h-14 sm:h-16 md:h-18 lg:h-20"
          >
            <div className="flex-1 bg-[#4ADAA8] text-[#1E4DB7] text-xl sm:text-2xl md:text-3xl lg:text-[38px] leading-tight text-center flex items-center justify-center rounded-full">
              Create Your Offer
            </div>
            <div className="h-14 sm:h-16 md:h-18 lg:h-20 w-14 sm:w-16 md:w-18 lg:w-20 flex items-center justify-center bg-[#4ADAA8] text-[#1E4DB7] rounded-full transition-transform group-hover:translate-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-arrow-right h-5 w-5 sm:h-6 sm:w-6"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </Link>
          <div className="mt-6 w-full rounded-[12px] border-[1px] border-[#1354B6] py-12 px-10">
            <p className="text-center font-[Geologica] font-light text-lg sm:text-xl md:text-2xl lg:text-[28px] text-[#1E4DB7]">
              Let's embark on this journey together to discover your winning
              offer—tailored to your goals, preferences, and the current market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

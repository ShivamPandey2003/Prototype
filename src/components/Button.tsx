import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";


const Button = (props: HTMLAttributes<HTMLDivElement>) => {
    const {className, children, ...prop} = props;
  return (
    <div className={`group flex w-full`} {...prop}>
      <div className={twMerge("flex-1 bg-[#1E4DB7] text-[#F6F3EE] rounded-full flex items-center justify-center text-base", className)}>
        {children}
      </div>
      <div className="bg-[#1E4DB7] text-[#F6F3EE] p-2 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-right h-5 w-5"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </div>
    </div>
  );
};

export default Button;

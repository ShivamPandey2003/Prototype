import { RightArrow2 } from "../assets/Icons/Icons";
import AddressTag from "./AddressTag";
import chat from "../dummy-data/Chat.json";

const Chat = () => {
  return (
    <div className="hidden w-2/5 relative md:flex flex-col lg:items-center lg:h-[35rem]">
      <AddressTag />
      <div className="w-full mt-[4rem] h-full px-2 mb-[3rem]">
        <div className="overflow-y-scroll absolute top-16 left-0 right-0 bottom-10 p-2">
          {chat.map((item, index) => (
            <div
              key={index}
              className={
                item.user === "user"
                  ? "w-full flex-row-reverse flex max-h-full mb-4 gap-2"
                  : `w-full flex max-h-full mb-4 gap-2`
              }
            >
              <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
              <div className="bg-gray-100 p-2 rounded-xl">
                <p className="text-xs">{item.message}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[90%] flex justify-between rounded-full p-2 px-4 absolute bottom-2 bg-white shadow-md">
          <input
            type="text"
            placeholder="Have any questions you can ask us"
            className="outline-none text-sm w-4/5"
          />
          <RightArrow2 />
        </div>
      </div>
    </div>
  );
};

export default Chat;

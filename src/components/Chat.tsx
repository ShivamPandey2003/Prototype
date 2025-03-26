import AddressTag from "./AddressTag";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import ChatBubble from "./ChatBubble";
import Messages from "../dummy-data/message.json";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../stores/store";
import { setAddress, setMsg } from "../stores/reducers/Homereducer";
import Button from "./Button";
import { OptionsIcons } from "../constant";

interface ChatProps {
  message: string;
  Action: string;
  option: {
    optionId: number,
    optionText: string
  }[];
  selectedOption: number[]
}

const Chat = () => {
  const location = useLocation();

  const data = useSelector((state: any) => state.Home[`${location.pathname}`]);
  const address = useSelector((state: any) => state.Home.address);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const Chats =
    Messages[location.pathname as keyof typeof Messages] || Messages["/create"];
  const [questionIndex, setQuestionIndex] = useState<number>(0 || data.length);
  const [messages, setMessages] = useState<ChatProps[]>(data);
  const [inputDisabled, setInputDisabled] = useState<boolean>(false);
  const [isAction, setIsAction] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(address);
  const [selected, setSelected] = useState<number>(() => {
    const foundItem = data?.find((item:any) => item.selectedOption?.length > 0);
    return foundItem ? foundItem.selectedOption[0] : 0;
  });

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const msg = () => {
    let index: number = questionIndex;
    const currentmsg = Chats[index];

    if (currentmsg.Action === "") {
      setMessages((prev) => [...prev, currentmsg]);
      setQuestionIndex(questionIndex + 1);
    } else if (currentmsg.Action === "input" && !isAction) {
      setMessages((prev) => [...prev, currentmsg]);
      setQuestionIndex(questionIndex + 1);
      setIsAction(true);
    } else if (currentmsg.Action === "select" && !isAction) {
      setMessages((prev) => [...prev, currentmsg]);
      setQuestionIndex(questionIndex + 1);
      setIsAction(true);
    } else if (currentmsg.Action === "next" && !isAction) {
      setMessages((prev) => [...prev, currentmsg]);
      setIsAction(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      msg();
    }, 5000);
    dispatch(setMsg({ data: messages, location: location.pathname }));
    return () => clearTimeout(timer);
  }, [messages, isAction]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setInputDisabled(true);
    dispatch(setAddress(inputValue));
    setIsAction(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onClick = (option: {
    optionId: number,
    optionText: string
  }) => {
    setSelected(option.optionId);
    setIsAction(false);
    setMessages((prev) =>
      prev.map((data) =>
        data.option.includes(option)
          ? { ...data, selectedOption: [option.optionId] }
          : data
      )
    );
  };

  return (
    <div className="hidden w-1/2 relative md:flex flex-col lg:items-center lg:h-[35rem]">
      <AddressTag />
      <div className="w-full mt-[4rem] h-full px-2 mb-[3rem]">
        <div
          className="overflow-y-scroll absolute top-16 left-0 right-0 bottom-16 p-2"
          ref={chatContainerRef}
        >
          {messages.map((message, index) => (
            <div key={index} className={`w-full flex max-h-full mb-4 gap-2`}>
              <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
              <div className="w-[90%] bg-gray-100 p-2 rounded-lg">
                <p className="text-base">{message.message}</p>
                {message.Action === "input" ? (
                  <form
                    onSubmit={handleSubmit}
                    className="flex w-full max-w-2xl mt-3 bg-white rounded-l-lg"
                  >
                    <input
                      type="text"
                      value={inputValue}
                      onChange={handleChange}
                      placeholder={"Enter Address"}
                      className="flex-1 p-1 rounded-l-lg border border-gray-300 outline-none text-gray-700"
                      disabled={inputDisabled}
                    />
                    <button
                      type="submit"
                      className="p-1 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors"
                      disabled={inputDisabled}
                    >
                      Send
                    </button>
                  </form>
                ) : message.Action === "next" ? (
                  <div className="w-full flex justify-center items-center group my-4 px-2">
                    <Button onClick={()=>navigate(`/create/${message.option[0].optionText}`)}>Next Step</Button>
                  </div>
                ) : (
                  <ul className="mt-3 space-y-1 mb-1">
                    {message.option.map((option, index) => (
                      <li
                        onClick={() => onClick(option)}
                        key={index}
                        className={`text-sm p-1 flex items-center gap-6 rounded-full text-center ${
                          selected === (typeof option === "object" && "optionText" in option && option.optionId)
                            ? "text-blue-800 font-semibold text-[16px] border-2 border-blue-300 bg-white"
                            : "text-white font-semibold text-[16px] hover:bg-[#5D9DFE] border-2 border-blue-800 bg-[#1354B6]"
                        }`}
                      >
                        <div className="rounded-full w-14 h-14 bg-[#B8D4FF] flex items-center justify-center">
                          {OptionsIcons[index].icon}
                        </div>
                        {option.optionText}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full absolute left-0 bottom-0">
          <ChatBubble />
        </div>
      </div>
    </div>
  );
};

export default Chat;

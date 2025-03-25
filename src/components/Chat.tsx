import AddressTag from "./AddressTag";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import ChatBubble from "./ChatBubble";
import Messages from "../dummy-data/message.json";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../stores/store";
import { setAddress, setMsg } from "../stores/reducers/Homereducer";
import { ArrowRight } from "lucide-react";

interface ChatProps {
  message: string;
  Action: string;
  option: string[];
}

const Chat = () => {
  const location = useLocation();

  const data = useSelector((state: any) => state.Home[`${location.pathname}`]);
  const address = useSelector((state: any) => state.Home.address);
  const dispatch = useAppDispatch();

  const Chats =
    Messages[location.pathname as keyof typeof Messages] || Messages["/create"];
  const [questionIndex, setQuestionIndex] = useState<number>(0 || data.length);
  const [messages, setMessages] = useState<ChatProps[]>(data);
  const [inputDisabled, setInputDisabled] = useState<boolean>(false);
  const [isAction, setIsAction] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(address);
  const [selected, setSelected] = useState<string>("");

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

  const onClick = (option: string) => {
    setSelected(option);
    setIsAction(false);
  };

  return (
    <div className="hidden w-2/5 relative md:flex flex-col lg:items-center lg:h-[35rem]">
      <AddressTag />
      <div className="w-full mt-[4rem] h-full px-2 mb-[3rem]">
        <div
          className="overflow-y-scroll absolute top-16 left-0 right-0 bottom-16 p-2"
          ref={chatContainerRef}
        >
          {messages.map((message, index) => (
            <div key={index} className={`w-full flex max-h-full mb-4 gap-2`}>
              <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
              <div className="w-[90%] bg-gray-100 p-2 rounded-xl">
                <p className="text-xs">{message.message}</p>
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
                  <div className="w-full flex justify-center items-center group">
                    <Link
                      to={`/create/${message.option[0]}`}
                      className="p-1 bg-blue-500 text-white rounded-full group-hover:bg-blue-600 transition-colors inline-block mt-3 w-3/5 text-center"
                    >
                      Next Step
                    </Link>
                    <div className="rounded-full bg-blue-500 p-1 mt-3 text-white group-hover:bg-blue-600 transition-colors">
                      <ArrowRight />
                    </div>
                  </div>
                ) : (
                  <ul className="mt-3 space-y-1">
                    {message.option.map((option, index) => (
                      <li
                        onClick={() => onClick(option)}
                        key={index}
                        className={`text-sm p-2 rounded-xl text-center ${
                          selected === option
                            ? "text-blue-800 font-medium border-2 border-blue-300 bg-white"
                            : "text-gray-700 hover:bg-gray-100 border-2 border-gray-300 bg-white opacity-80"
                        }`}
                      >
                        {option}
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

import AddressTag from "./AddressTag";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useAddressStore } from "../stores/store";
import { Link } from "react-router";
import ChatBubble from "./ChatBubble";

interface ChatProps {
  message: string;
  Action: string;
  option: [string];
}

const Chat = () => {
  const [messages, setMessages] = useState<ChatProps[]>([]);
  const [inputDisabled, setInputDisabled] = useState<boolean>(false);
  const { address, setAddress } = useAddressStore();

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const FetchMessage = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/automated-message"
        );
        const data = await response.json();
        const newMessage: ChatProps = {
          message: data.message.message,
          Action: data.message.Action,
          option: data.message.option,
        };
        setMessages((prev) => [...prev, newMessage]);
      } catch (e) {
        console.log(e);
      }
    };

    FetchMessage();
    const interval = setInterval(FetchMessage, 20000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }, [messages]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setInputDisabled(true);
  };

  return (
    <div className="hidden w-2/5 relative md:flex flex-col lg:items-center lg:h-[35rem]">
      <AddressTag />
      <div className="w-full mt-[4rem] h-full px-2 mb-[3rem]">
        <div className="overflow-y-scroll absolute top-16 left-0 right-0 bottom-16 p-2" ref={chatContainerRef}>
          {messages.map((message, index) => (
            <div key={index} className={`w-full flex max-h-full mb-4 gap-2`}>
              <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
              <div className="w-[90%] bg-gray-100 p-2 rounded-xl">
                <p className="text-xs">{message.message}</p>
                {message.Action === "input" ? (
                  <form
                    onSubmit={handleSubmit}
                    className="flex w-full max-w-2xl mt-3"
                  >
                    <input
                      type="text"
                      value={address}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setAddress(e.target.value)
                      }
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
                  <Link
                    to={`/create/${message.option[0]}`}
                    className="p-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors inline-block mt-3 w-full text-center"
                  >
                    Next Step
                  </Link>
                ) : (
                  <ul className="mt-3 space-y-1">
                    {message.option.map((option, index) => (
                      <li
                        key={index}
                        className={`text-sm p-2 rounded-md ${
                          index === 0
                            ? "bg-blue-100 text-blue-800 font-medium border-2 border-blue-300"
                            : "text-gray-700 hover:bg-gray-100 border-2 border-gray-300"
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
          <ChatBubble/>
        </div>
      </div>
    </div>
  );
};

export default Chat;

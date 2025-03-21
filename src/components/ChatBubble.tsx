import React, { useState, useEffect, useRef, FormEvent } from "react";

// Define the Message type
interface Message {
  id: number;
  text: string;
  sender: string;
}

const ChatBubble: React.FC = () => {
  const [isChatVisible, setIsChatVisible] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const responses = {
    "hi mira": "Hi! I’m Agent Mira, and I’m here to help you with your home-buying journey. It seems like your question is a bit outside my area of expertise. I specialize in real estate and the properties that might be of interest to you, so feel free to ask me anything about home features, market trends, or finding your dream property. I’d love to help with those!",
    "hello": "Hi there! How can I assist you",
    "how are you": "I'm doing grea, thanks for asking! How about you?",
    "bye": "Goodbye! Have a great day!",
    "default": "I'm not sure I understand. Could you please rephrase that?"
}

  const FetchMessage = async (message: string) => {
    const lowercaseMessage = message.toLocaleLowerCase();
    const response = responses[lowercaseMessage as keyof typeof responses] || responses.default;

      const agentMessage: Message = {
        id: messages.length + 2,
        text: response,
        sender: "Agent Mira",
      };

      setMessages((prev)=>[...prev, agentMessage]);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleChat = (): void => {
    setIsChatVisible(!isChatVisible);
  };

  const handleSendMessage = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsChatVisible(true);
    const input = e.currentTarget.querySelector("input") as HTMLInputElement;
    const newMessage = input.value.trim();
    if (newMessage) {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: newMessage, sender: "You" },
      ]);
      FetchMessage(newMessage);
      input.value = "";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-blue-100 relative px-2">
      <button
        onClick={toggleChat}
        className="absolute top-0 bg-blue-500 text-white rounded-2xl px-4 shadow-md hover:bg-blue-600 transition"
        aria-label={isChatVisible ? "Close chat" : "Open chat"}
      >
        {isChatVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : null}
      </button>
      {isChatVisible && (
        <div className="w-full max-w-md p-4">
          <div
            ref={chatContainerRef}
            className="rounded-lg p-4 mb-4 max-h-40 overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${
                  message.sender === "You" ? "text-right" : "text-left"
                }`}
              >
                <p
                  className={`inline-block p-3 rounded-lg text-sm ${
                    message.sender === "You"
                      ? "bg-white text-blue-800"
                      : "bg-white text-gray-800"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      <form
        onSubmit={handleSendMessage}
        className="flex items-center bg-white rounded-full p-2 w-full border"
      >
        <input
          type="text"
          placeholder="Have any questions you can ask us"
          className="flex-1 bg-transparent outline-none text-gray-700 text-sm px-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-full p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ChatBubble;

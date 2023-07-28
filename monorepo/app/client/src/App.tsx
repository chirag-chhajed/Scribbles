import { useState, useEffect } from "react";
import { io } from "socket.io-client";

type Message = {
  name: string;
  text: string;
};

function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  const socket = io("/api");

  useEffect(() => {
    socket.emit("findAllChats", {}, (response: Message[]) => {
      console.log(response);
      setMessages(response);
    });

    socket.on('message', (message: Message) => {
      console.log(message);
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up the WebSocket listener when the component unmounts
    return () => {
      socket.off('message');
    };
  }, []);

  // Your rendering and other code goes here...

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 chat">
        <div className="w-full max-w-lg p-4 border rounded-lg shadow-md chat-container">
          <div className="px-4 py-2 space-y-2 message-container">
            {messages.map((message, index) => (
              <div key={index} className="message">
                <div className="font-bold text-blue-500 message-name">
                  {message.name}
                </div>
                <div className="p-2 bg-white rounded-lg message-text">
                  {message.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

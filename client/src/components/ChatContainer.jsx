import { useState } from "react";
import Navbar from "./Navbar";
import Messages from "./Messages";
import ChatInput from "./ChatInput";
import axios from "axios";

const ChatContainer = () => {

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello , How can I help you today?",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async (prompt) => {

    if (!prompt.trim()) return;

    
    const userMessage = {
      role: "user",
      content: prompt,
    };

    
    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setLoading(true);

    try {

      
      const res = await axios.post(
        "http://localhost:5000/api/chat",
        {
          message: prompt,
        }
      );

     
      const aiMessage = {
        role: "assistant",
        content: res.data.reply,
      };

      
      setMessages((prev) => [
        ...prev,
        aiMessage,
      ]);

    } catch (error) {

      console.log("API ERROR:", error);

     
      const errorMessage = {
        role: "assistant",
        content: "⚠️ Something went wrong. Please try again.",
      };

      setMessages((prev) => [
        ...prev,
        errorMessage,
      ]);

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden">

      <Navbar />

      <Messages
        messages={messages}
        loading={loading}
      />

      <ChatInput
        sendMessage={sendMessage}
      />

    </div>
  );
};

export default ChatContainer;
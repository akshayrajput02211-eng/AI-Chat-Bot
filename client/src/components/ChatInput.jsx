import { useState } from "react";
import { FiImage, FiMic, FiSend } from "react-icons/fi";

const ChatInput = ({ sendMessage }) => {

  const [prompt, setPrompt] = useState("");

  const handleSubmit = () => {

    if (!prompt.trim()) return;

    sendMessage(prompt);

    setPrompt("");
  };

  return (
    <div className="p-6 border-t border-white/10 bg-white/5 backdrop-blur-xl z-50">

      <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[30px] p-5 backdrop-blur-2xl shadow-2xl shadow-purple-500/10">

        <textarea
          rows={2}
          value={prompt}
          onChange={(e)=>setPrompt(e.target.value)}
          placeholder="Ask anything..."
          className="w-full bg-transparent resize-none outline-none text-white placeholder:text-gray-500 text-[15px]"
        />

        <div className="flex items-center justify-between mt-5">

          <div className="flex gap-3">

            <button className="w-11 h-11 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-all flex items-center justify-center">

              <FiImage />

            </button>

            <button className="w-11 h-11 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-all flex items-center justify-center">

              <FiMic />

            </button>

          </div>

          <button
            onClick={handleSubmit}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20"
          >

            <FiSend />

            Send

          </button>

        </div>

      </div>

    </div>
  );
};

export default ChatInput;
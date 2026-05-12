import { FiPlus } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="w-[280px] bg-white/5 backdrop-blur-2xl border-r border-white/10 flex flex-col p-5 z-50">

      
      <div>

        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          AKSHAY AI
        </h1>

        <p className="text-gray-400 text-sm mt-2">
          Your Personal AI Assistant
        </p>

      </div>

      
      <button className="mt-6 w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center gap-3 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-purple-500/20">

        <FiPlus size={18} />

        <span className="font-medium">
          New Chat
        </span>

      </button>

      
      <div className="flex-1 overflow-auto mt-8 space-y-4 pr-2">

        {[1,2,3,4].map((item)=>(
          <div
            key={item}
            className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all cursor-pointer"
          >

            <h2 className="font-semibold text-white">
              AI Conversation {item}
            </h2>

            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
              Ask anything to AI and get instant answers
            </p>

          </div>
        ))}

      </div>

      
      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">

        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center font-bold">
          A
        </div>

        <div>
          <h2 className="font-semibold text-white">
            Akshay
          </h2>

          <p className="text-sm text-gray-400">
            Full Stack Developer
          </p>
        </div>

      </div>

    </div>
  );
};

export default Sidebar;
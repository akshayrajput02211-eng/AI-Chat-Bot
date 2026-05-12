import { FiMoon } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="h-[80px] border-b border-white/10 px-10 flex items-center justify-between backdrop-blur-xl bg-white/5 z-50">

      <div>

        <h1 className="text-2xl font-bold text-white">
          AI Assistant
        </h1>

        <p className="text-sm text-gray-400 mt-1">
          Powered by Gemini AI
        </p>

      </div>

      <button className="w-12 h-12 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-all flex items-center justify-center">

        <FiMoon />

      </button>

    </div>
  );
};

export default Navbar;
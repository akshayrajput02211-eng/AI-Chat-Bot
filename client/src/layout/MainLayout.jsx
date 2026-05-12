import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";

const MainLayout = () => {
  return (
    <div className="w-full h-screen flex bg-[#030712] overflow-hidden">

      
      <Sidebar />

      
      <div className="flex-1 flex flex-col relative overflow-hidden">

        
        <div className="absolute top-[-200px] left-[20%] w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-200px] right-[10%] w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>

        <ChatContainer />

      </div>

    </div>
  );
};

export default MainLayout;
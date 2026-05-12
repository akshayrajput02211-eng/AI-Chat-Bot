const Messages = ({ messages, loading }) => {
  return (
    <div className="flex-1 overflow-auto px-8 py-10">

      <div className="max-w-5xl mx-auto space-y-8">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`flex ${
              msg.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            <div
              className={`max-w-[75%] p-6 rounded-[28px] ${
                msg.role === "user"
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-purple-500/20"
                  : "bg-white/5 border border-white/10 backdrop-blur-xl"
              }`}
            >

              <p className="text-white leading-8 whitespace-pre-wrap text-[15px]">
                {msg.content}
              </p>

            </div>

          </div>
        ))}

        {/* Loading */}
        {loading && (

          <div className="flex justify-start">

            <div className="bg-white/5 border border-white/10 rounded-[28px] p-6 flex gap-3">

              <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></span>

              <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-100"></span>

              <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-200"></span>

            </div>

          </div>

        )}

      </div>

    </div>
  );
};

export default Messages;
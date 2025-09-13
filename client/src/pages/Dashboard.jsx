import { useContext, useEffect, useState } from "react";
import { FaRobot } from "react-icons/fa6";
import { MdStop, MdKeyboardVoice } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";
import { AuthContext } from "../AuthContext";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { valid, user, loading } = useContext(AuthContext);
  const [listening, setListening] = useState(false);
  const [userChat, setUserChat] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const navigate = useNavigate();

    if (!loading && !valid) navigate("/login");


  const handleListeningState = () => {
    setListening((prev) => !prev);
  };

  const handleSend = () => {
    if (!userChat.trim()) return;
    setChatHistory((prev) => [...prev, { sender: "user", text: userChat }]);
    setUserChat("");
  };

  if (loading) return <Loading />;

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-b from-black via-purple-600 to-black text-white">
      {/* Header */}
      <div className="flex gap-3 mt-[2%]">
        <FaRobot className="text-3xl" />
        <p className="text-2xl font-bold">Velora - Your AI Friend</p>
      </div>

      {/* Robot Icon + Pulse */}
      <div className="relative flex items-center justify-center">
        {listening && (
          <div className="absolute w-30 h-30 mt-[60px] rounded-full bg-pink-300 opacity-50 animate-ping"></div>
        )}
        <div className="p-5 rounded-full mt-[60px] bg-white/20 shadow-2xl shadow-violet-700">
          <FaRobot className="text-6xl text-pink-200" />
        </div>
      </div>

      {/* Listening Animation */}
      {listening ? (
        <div className="flex flex-col items-center mt-16 transition-all">
          <div className="flex items-end gap-1 h-8">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="w-[5px] bg-gradient-to-t from-blue-500 to-cyan-300 rounded-full animate-pulse"
                style={{
                  height: `${Math.random() * 100}%`,
                  transformOrigin: "bottom",
                  animation: `equalizer 0.6s ease-in-out infinite alternate`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
          <p className="mt-2 font-semibold text-white">I'm listening...</p>
        </div>
      ) : (
        <p className="mt-20 text-2xl font-bold text-blue-300">------------</p>
      )}

      <p className={`py-2 ${!listening ? "mt-4" : ""}`}>
        Ready to Chat Naturally !
      </p>

      {/* Input & Mic */}
      <div className="flex gap-1 items-center">
        <button
          aria-label={listening ? "Stop Listening" : "Start Listening"}
          onClick={handleListeningState}
        >
          {!listening ? (
            <MdKeyboardVoice className="text-[42px] rounded-full bg-white/50 text-white cursor-pointer hover:bg-white/60 p-2" />
          ) : (
            <MdStop className="text-[42px] rounded-full bg-red-500 text-white cursor-pointer p-2" />
          )}
        </button>

        {/* Chat Input */}
        <div className="flex gap-2 border border-violet-300 bg-white/70 rounded-full px-2 py-2 text-black my-2 hover:bg-white/80">
          <input
            type="text"
            value={userChat}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              
              }}}
            onChange={(e) => setUserChat(e.target.value)}
            placeholder="Type anything you want to talk about"
            className="w-[200px] md:w-[400px] px-4 outline-0"
          />
          <button
            type="submit"
            aria-label="Send Message"
            className="mr-2 cursor-pointer border-l-1 border-gray-300 px-2"
            onClick={handleSend}
          >
            <AiOutlineSend />
          </button>
        </div>
      </div>

      {/* Chat Box */}
      <div className="border-2 rounded-md pt-4 px-2 mt-6 w-[90%] md:w-[520px] h-[300px] overflow-y-auto">
        {chatHistory.length === 0 ? (
          <p className="text-gray-300 text-center">Start chatting...</p>
        ) : (
          chatHistory.map((msg, i) => (
            <p
              key={i}
              className={`my-1 ${
                msg.sender === "user"
                  ? "text-right text-blue-300 px-2 w-fit ml-auto"
                  : "text-left text-green-300"
              }`}
            >
              {msg.text}
            </p>
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;

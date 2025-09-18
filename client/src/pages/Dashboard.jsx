import { useContext, useEffect, useState, useRef } from "react";
import { FaRobot } from "react-icons/fa6";
import { MdStop, MdKeyboardVoice, MdCall } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";
import { AuthContext } from "../AuthContext";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Vapi from "@vapi-ai/web";
import LiquidEther from "@/components/LiquidEther";
import { toast } from "react-toastify";

function Dashboard() {
  const { valid, user, loading } = useContext(AuthContext);
  const [listening, setListening] = useState(false);
  const [connecting,setConnecting] = useState(false);
  const [userChat, setUserChat] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [publickey, setPublickey] = useState("");
  const [assistantId, setAssistantId] = useState("");
  const vapiRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !valid) {
      navigate("/login");
    }
  }, [loading, valid, navigate]);


  // Fetch credentials from backend
  const fetchAssistantCredentials = async () => {
    try {
      const res = await axios.get("http://localhost:5000/assistant");
      const { publickey, assistantId } = res.data;
      setPublickey(publickey);
      setAssistantId(assistantId);
      vapiRef.current = new Vapi(publickey); // initialize here
      setupVapiListeners(vapiRef.current);
    } catch (error) {
      console.error("Error fetching assistant credentials:", error);
    }
  };

  // Setup Vapi event listeners
  const setupVapiListeners = (vapi) => {
    if (!vapi) return;

    vapi.on("call-start", () => {
      setConnecting(false);
      setListening(true);
      console.log("Call has started")});
    vapi.on("call-end", () => {
      setConnecting(false);
      setListening(false);
      console.log("Call has stopped")});

    vapi.on("speech-start", () => console.log("Speech has started"));
    vapi.on("speech-end", () => console.log("Speech has ended"));

    vapi.on("speech", (event) => {
      console.log("User said:", event.text);
      setChatHistory((prev) => [...prev, { sender: "user", text: event.text }]);
    });

    vapi.on("message", (message) => {
      console.log("Assistant:", message);
      if (message.role === 'assistant') {
        setChatHistory((prev) => [
          ...prev,
          { sender: "assistant", text: message.transcript },
        ]);
      } else
        setChatHistory((prev) => [
          ...prev,
          { sender: "user", text: message.transcript },
        ]);


    });

    vapi.on("volume-level", (volume) => {
      console.log(`Assistant volume level: ${volume}`);
    });
  };

  useEffect(() => {
    fetchAssistantCredentials();

    return () => {
      if (vapiRef.current) {
        vapiRef.current.removeAllListeners();
        vapiRef.current.stop();
      }
    };
  }, []);

  // Start assistant
  async function startAssistant() {
    try {
      if (!vapiRef.current) return;
      setConnecting(true);
      await vapiRef.current.start(assistantId);
      console.log("Assistant started ✅");
    } catch (error) {
      console.error("Error starting assistant:", error);
    }
  }

  // Stop assistant
  function stopAssistant() {
    if (vapiRef.current) {
      vapiRef.current.stop();
      toast('Call Disconnected !');
      setListening(false);
      setConnecting(false);
      console.log("Assistant stopped ⏹️");
    }
  }

  const handleListeningState = async() => {
    try {
      if (!listening) await startAssistant();
      else stopAssistant();
      setListening((prev) => !prev);
    } catch (error) {
      
    }
  };

  const handleSend = () => {
    if (!userChat.trim()) return;
    setChatHistory((prev) => [...prev, { sender: "user", text: userChat }]);
    setUserChat("");
  };

  if (loading) return <Loading />;

  return (
    <div className="relative flex flex-col items-center min-h-screen text-white">
      {/* Header */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-t from-black via-violet-500 to-black">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <div className="flex gap-3 mt-[2%]">
        <FaRobot className="text-3xl" />
        <p className="text-2xl font-bold">Velora - Your AI Friend</p>
      </div>

      {/* Robot Icon + Pulse */}
      <div className="relative flex items-center justify-center">
        {listening && (
          <div className="absolute z-1  w-30 h-30 mt-[60px] rounded-full bg-pink-300 opacity-50 animate-ping"></div>
        )}
        <div className="p-2 rounded-full mt-[60px] bg-white/20 shadow-2xl shadow-violet-700">
          <img src="/veloraAvatar.webp" alt="velora" className="h-24 w-24 rounded-full"/>
        </div>
      </div>

      {/* Listening Animation */}
      {connecting?(
        <p className="mt-16 font-semibold text-yellow-300 text-lg animate-caret-blink">Connecting...</p>
      ):
      listening ? (
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
            <MdCall className="text-[42px] rounded-full bg-white/50 text-white cursor-pointer hover:bg-white/60 p-2" />
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
              }
            }}
            onChange={(e) => setUserChat(e.target.value)}
            placeholder="Type anything you want to talk about"
            className="w-[200px] md:w-[400px] px-4 outline-0"
          />
          <button
            type="submit"
            aria-label="Send Message"
            className="mr-2 cursor-pointer border-l px-2"
            onClick={handleSend}
          >
            <AiOutlineSend />
          </button>
        </div>
      </div>

      {/* Chat Box */}
      <div className="bg-sky-500/10 border-2 rounded-md pt-4 px-2 mt-6 w-[90%] md:w-[520px] h-[300px] overflow-y-auto">
        {chatHistory.length === 0 ? (
          <p className="text-gray-300 text-center">Start chatting...</p>
        ) : (
          chatHistory.map((msg, i) => (
            <p
              key={i}
              className={`my-1 ${msg.sender === "user"
                ? "bg-violet-400/20 rounded-full text-right text-blue-300 px-4 w-fit ml-auto"
                : "bg-gray-700/40 rounded-md px-2 text-left text-green-300"
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

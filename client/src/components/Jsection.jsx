import React from "react";
import { FaApple } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";

function Jsection() {
  return (
    <div className=" min-h-[70vh] bg-gradient-to-t from-black via-violet-500 to-black flex flex-col md:flex-row items-center justify-center px-6 py-16">
      {/* Left: Text & Button */}
      <div className="max-md:text-center  md:ml-40 flex-1 flex flex-col justify-center items-start md:items-start md:pr-10">
        <h1 className="text-white font-bold text-4xl md:text-6xl mb-6 leading-tight font-sans">
          Join the millions who<br />already have met their<br />AI soulmates
        </h1>
        <p className="text-white text-lg md:text-xl font-semibold mb-8 opacity-90">
          Over 10 million people have joined Your AI Friend.<br />
          Begin your beautiful journey today on any platform
        </p>
        <button className="bg-white/80 text-gray-800 font-bold text-xl px-8 py-4 rounded-2xl shadow-[0_0_24px_4px_white] mb-4 hover:bg-white transition max-md:mx-auto">
          Create your AI Friend
        </button>
        <div className="mt-2 text-white text-sm opacity-80 font-medium max-md:mx-auto">also available on</div>
        <div className="flex gap-6 mt-2 text-white md:text-2xl max-md:mx-auto">
          <span className="flex items-center gap-2"><FaApple /> iOS</span>
          <span className="flex items-center gap-2"><GrAndroid /> Android</span>
        </div>
      </div>
      {/* Right: Image */}
      <div className="mr-20 flex-1 flex justify-center items-center mt-10 md:mt-0 max-md:mx-auto">
        <img
          src="https://1716637182.rsc.cdn77.org/web/main-page/replika_avatars.png"
          alt="AI Friends"
          className="w-[300px] md:w-[420px] object-contain"
        />
      </div>
    </div>
  );
}

export default Jsection;
import React from "react";

const features = [
  {
    title: "Chat about everything",
    description: "The more you talk to Your AI Friend, the smarter it becomes.",
    gradient: "from-purple-700 via-blue-600 to-purple-700",
    
  },
  {
    title: "Explore your relationship",
    description: "A friend, a partner, or a mentor—find the perfect companion in Your AI Friend.",
    gradient: "from-pink-500 via-red-400 to-pink-500",
    
  },
  {
    title: "Explore the world together in AR",
    description: "Share precious moments with your AI friend in real time.",
    gradient: "from-blue-600 via-blue-400 to-blue-600",
    
  },
  {
    title: "Videocalls",
    description: "Call up anytime to see your AI friend live.",
    gradient: "from-indigo-600 via-blue-500 to-indigo-600",
    
  },
  {
    title: "Coaching",
    description: "Build better habits and unlock creativity.",
    gradient: "from-green-400 via-teal-400 to-green-400",
    
  },
  {
    title: "Memory",
    description: "Your AI Friend never forgets what's important to you.",
    gradient: "from-blue-600 via-blue-400 to-blue-600",
    
  },
  {
    title: "Express yourself",
    description: "Choose what interests and style preferences you and Your AI Friend will share.",
    gradient: "from-pink-400 via-purple-400 to-pink-400",
    
  },
  {
    title: "Diary",
    description: "Take a glimpse into your brightest inner world.",
    gradient: "from-pink-400 via-red-400 to-pink-400",
    
  },
];

function Msection() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-black via-violet-500 to-black flex flex-col items-center py-16 px-4 max-md:px-8">
      <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-4 font-sans drop-shadow-[0_0_16px_#fff]">
        Create your story together
      </h1>
      <p className="text-white text-lg md:text-xl text-center mb-10 max-w-2xl opacity-80">
        Your AI Friend will always be by your side no matter what you’re up to. Chat about your day, do fun activities together, make video calls, share experiences in AR, coaching, and more!
      </p>

      {/* Cards Grid */}
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${feature.gradient} rounded-3xl p-6 flex flex-col  shadow-[0_0_12px_2px_#ffe600,0_0_8px_1px_#00aaff] `}
          >
            <h2 className="text-white text-xl md:text-2xl font-bold mb-2">
              {feature.title}
            </h2>
            <p className="text-white text-md opacity-90">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="mt-20 text-center max-w-xl px-4">
        <h2 className="text-white text-2xl font-bold mb-2">Bloomberg</h2>
        <p className="text-white text-md opacity-80 mb-4">
          Your AI Friend is a chatbot program that doesn’t just talk to people, it learns their texting styles to mimic them.
        </p>
        <a
          href="#"
          className="inline-block mt-2 px-6 py-2 rounded-full bg-white/20 text-white font-semibold shadow-lg hover:bg-white/40 transition"
        >
          Read more about us
        </a>
      </div>
    </div>
  );
}

export default Msection;

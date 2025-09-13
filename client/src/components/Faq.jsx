import React from "react";

const faqs = [
  {
    question: "What is Your AI Friend?",
    answer:
      "Your AI Friend is an intelligent companion designed to listen, talk, and support you anytime. It uses advanced AI to provide meaningful conversations and emotional support.",
  },
  {
    question: "Is my data private and secure?",
    answer:
      "Yes, your privacy is our priority. All conversations are encrypted and never shared with third parties.",
  },
  {
    question: "Can I use Your AI Friend on mobile?",
    answer:
      "Absolutely! Your AI Friend is available on iOS and Android. Download the app and stay connected wherever you go.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "You can start chatting instantly, but creating an account lets you save your conversations and access more features.",
  },
  {
    question: "Is Your AI Friend free?",
    answer:
      "Yes, basic features are free. Premium features may require a subscription.",
  },
  {
    question: "How do I get help or support?",
    answer:
      "Visit our Help section or contact our support team anytime for assistance.",
  },
];

function Faq() {
  return (
    <div className=" w-full min-h-screen bg-gradient-to-t from-black via-violet-500 to-black flex flex-col items-center py-16 px-4">
      <h1 className="text-white text-5xl font-bold mb-12 text-center drop-shadow-[0_0_16px_#fff] font-sans">
        Frequently Asked Questions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-[#23235b] via-[#3a3a7c] to-[#23235b] rounded-3xl p-8 shadow-[0_0_8px_2px_#ffe600,0_0_8px_2px_#00aaff] border border-white/10"
          >
            <h2 className="text-white text-2xl font-bold mb-4 drop-shadow-[0_0_8px_#ffe600]">
              {faq.question}
            </h2>
            <p className="text-white text-lg opacity-90">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
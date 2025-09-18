import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import NumberFlow from "@number-flow/react";
import { CheckCheck, MessageSquare, Mic, Cpu } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

const plans = [
  {
    name: "Free",
    description:
      "Perfect to explore Velora and start chatting with your AI friend.",
    price: 0,
    yearlyPrice: 0,
    buttonText: "Start for Free",
    buttonVariant: "outline",
    features: [
      { text: "Basic text conversations", icon: <MessageSquare size={20} /> },
      { text: "Limited voice chats (30 mins/month)", icon: <Mic size={20} /> },
      { text: "Standard response speed", icon: <Cpu size={20} /> },
    ],
    includes: [
      "Free includes:",
      "Personalized chat memory",
      "Basic emotional responses",
      "Cross-device sync",
    ],
  },
  {
    name: "Pro",
    description:
      "For power users who want deeper, longer and more natural conversations.",
    price: 15,
    yearlyPrice: 120,
    buttonText: "Upgrade to Pro",
    buttonVariant: "default",
    popular: true,
    features: [
      { text: "Unlimited text conversations", icon: <MessageSquare size={20} /> },
      { text: "Unlimited voice chats", icon: <Mic size={20} /> },
      { text: "Faster AI response time", icon: <Cpu size={20} /> },
    ],
    includes: [
      "Everything in Free, plus:",
      "Advanced emotional intelligence",
      "Custom voice selection",
      "Conversation history export",
    ],
  },
  {
    name: "Velora+",
    description:
      "Premium AI companion with the most advanced features and personalization.",
    price: 29,
    yearlyPrice: 240,
    buttonText: "Go Velora+",
    buttonVariant: "outline",
    features: [
      { text: "Priority servers & 24/7 uptime", icon: <Cpu size={20} /> },
      { text: "Ultra-realistic voice & tone", icon: <Mic size={20} /> },
      { text: "Unlimited emotional depth", icon: <MessageSquare size={20} /> },
    ],
    includes: [
      "Everything in Pro, plus:",
      "Customizable AI personality",
      "Private & secure storage",
      "Exclusive early features",
    ],
  },
];

const PricingSwitch = ({ onSwitch }) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-50 mx-auto flex w-fit rounded-full bg-white/10 border border-violet-400 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={`relative z-10 w-fit sm:h-12 h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors ${
            selected === "0"
              ? "text-white"
              : "text-violet-200 hover:text-white"
          }`}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full shadow-lg shadow-pink-500 bg-gradient-to-r from-pink-400 via-violet-500 to-blue-500"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Monthly</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={`relative z-10 w-fit sm:h-12 h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors ${
            selected === "1"
              ? "text-white"
              : "text-violet-200 hover:text-white"
          }`}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full shadow-lg shadow-pink-500 bg-gradient-to-r from-pink-400 via-violet-500 to-blue-500"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Yearly
            <span className="rounded-full bg-pink-100/20 px-2 py-0.5 text-xs font-medium text-white">
              Save 30%
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef(null);

  const revealVariants = {
    visible: (i) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <div
      className="px-4 min-h-screen mx-auto relative bg-gradient-to-b from-black via-violet-900 to-black text-white"
      ref={pricingRef}
    >
      <div
        className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle at center, rgba(139, 92, 246, 0.4) 0%, transparent 70%)
      `,
          opacity: 0.6,
          mixBlendMode: "screen",
        }}
      />

      <div className="text-center mb-6 max-w-3xl mx-auto relative z-10">
        <TimelineContent
          as="h2"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="md:text-6xl sm:text-4xl text-3xl font-medium text-pink-200 mb-4"
        >
          Choose the best plan for your{" "}
          <TimelineContent
            as="span"
            animationNum={1}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="border border-dashed border-pink-400 px-2 py-1 rounded-xl bg-pink-200/20 capitalize inline-block text-white"
          >
            AI Friend
          </TimelineContent>
        </TimelineContent>

        <TimelineContent
          as="p"
          animationNum={2}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="sm:text-base text-sm text-violet-200 sm:w-[70%] w-[80%] mx-auto"
        >
          Velora is here to talk, listen and support you every day. Pick a plan
          that fits your journey.
        </TimelineContent>
      </div>

      <TimelineContent
        as="div"
        animationNum={3}
        timelineRef={pricingRef}
        customVariants={revealVariants}
      >
        <PricingSwitch onSwitch={togglePricingPeriod} />
      </TimelineContent>

      <div className="grid md:grid-cols-3 max-w-6xl gap-4 py-6 mx-auto relative z-10">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={4 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={`relative border-violet-600/40 ${
                plan.popular
                  ? "ring-2 ring-pink-500 bg-gradient-to-b from-violet-800/50 to-black"
                  : "bg-violet-900/20"
              } text-white`}
            >
              <CardHeader className="text-left">
                <div className="flex justify-between">
                  <h3 className="text-3xl font-semibold mb-2 text-pink-200">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <div>
                      <span className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-violet-200 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-semibold text-white">
                    $
                    <NumberFlow
                      value={isYearly ? plan.yearlyPrice : plan.price}
                      className="text-4xl font-semibold"
                    />
                  </span>
                  <span className="text-violet-300 ml-1">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <button
                  className={`w-full mb-6 p-4 text-xl rounded-xl cursor-pointer hover:shadow-violet-400 transition ${
                    plan.popular
                      ? "bg-gradient-to-r from-pink-400 via-pink-300 to-blue-500 shadow-md shadow-pink-400 border border-pink-400 text-white"
                      : "bg-gradient-to-r from-violet-700 to-black shadow-lg shadow-violet-700 border border-violet-500 text-white"
                  }`}
                >
                  {plan.buttonText}
                </button>
                <ul className="space-y-2 font-semibold py-5">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-pink-300 grid place-content-center mt-0.5 mr-3">
                        {feature.icon}
                      </span>
                      <span className="text-sm text-violet-200">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 pt-4 border-t border-violet-700">
                  <h4 className="font-medium text-base text-pink-200 mb-3">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-2 font-semibold">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="h-6 w-6 bg-pink-200/10 border border-pink-400 rounded-full grid place-content-center mt-0.5 mr-3">
                          <CheckCheck className="h-4 w-4 text-pink-400 " />
                        </span>
                        <span className="text-sm text-violet-200">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </div>
  );
}

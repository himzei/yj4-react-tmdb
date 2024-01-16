import { motion } from "framer-motion";
import { useState } from "react";

let tabs = [
  { id: "today", label: "오늘" },
  { id: "thisweek", label: "이번주" },
];

export default function Container() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  console.log(activeTab);

  return (
    <div className="w-full flex justify-center ">
      <div className="border-2 border-gray-900 rounded-3xl my-8 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "text-white" : "text-black"
            } relative rounded-full px-6 py-2 text-xl font-medium transition `}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 bg-gray-900 rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

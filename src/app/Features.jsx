import { UserCheck, Users, Code2, CalendarDays, Briefcase } from "lucide-react";
import {Ubuntu} from "@/components/Fonts/font"
import React from "react";

const features = [
  {
    title: "Guidance 1:1",
    details: "Personal mentorship from Saurav Chaudhary.",
    icon: <UserCheck size={28} />,
  },
  {
    title: "Small Batch Size (7 max)",
    details: "Focused attention and collaboration.",
    icon: <Users size={28} />,
  },
  {
    title: "4 Live Projects in 2–3 Months",
    details: "End-to-end real projects, not dummy tasks.",
    icon: <Code2 size={28} />,
  },
  {
    title: "Weekly Project Discussions",
    details: "2 calls per week to review progress & clear doubts.",
    icon: <CalendarDays size={28} />,
  },
  {
    title: "Shadow Real Client Projects",
    details: "Unique chance to work alongside an expert in live environments.",
    icon: <Briefcase size={28} />,
  },
];

function Features() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="Features">
      <div className="py-16 lg:py-24">
        {/* Header Section */}
    
        <div className="text-center mb-16"> 
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4 ${Ubuntu.className}`}>
          Features
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative overflow-hidden">
              <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:bg-gradient-to-br hover:from-white/15 hover:to-white/8 hover:border-white/20 hover:shadow-2xl hover:shadow-amber-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      {feature.icon}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-amber-100 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {feature.details}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/20 via-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;

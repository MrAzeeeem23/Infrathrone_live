"use client";

import React from "react";
import { motion } from "framer-motion";
import { Ubuntu } from "@/components/Fonts/font";
import { Clock, Users, Phone, UserCheck, Briefcase } from "lucide-react";

const programConfig = {
  section: {
    id: "ProgramDetails",
    className: "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  },
  header: {
    title: "Program",
    highlight: "Details",
    titleStyles: "text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4",
    highlightStyles: "text-orange-500",
    dividerStyles: "w-24 h-1 bg-gradient-to-r from-gray-500 to-orange-500 mx-auto rounded-full"
  },
  steps: [
    {
      id: "duration",
      title: "Duration",
      icon: Clock,
      content: {
        text: "The program runs for {duration}, giving you time to work deeply on multiple projects while balancing your learning pace.",
        highlights: {
          duration: "2–3 months"
        }
      }
    },
    {
      id: "projects",
      title: "Live Projects",
      icon: Briefcase,
      content: {
        text: "You'll work on {projectCount}. These aren't dummy assignments — they're actual DevOps challenges faced in industry.",
        highlights: {
          projectCount: "4 real-world client projects"
        }
      }
    },
    {
      id: "batch-size",
      title: "Batch Size",
      icon: Users,
      content: {
        text: "Each batch is limited to {batchSize}. This ensures {benefit} and focused mentorship.",
        highlights: {
          batchSize: "7 members",
          benefit: "personal attention"
        },
        decorations: {
          benefit: {
            className: "underline underline-offset-4 decoration-orange-400"
          }
        }
      }
    },
    {
      id: "weekly-calls",
      title: "Weekly Calls",
      icon: Phone,
      content: {
        text: "Expect {frequency}. These sessions are designed to review your work, solve blockers, and ensure steady progress.",
        highlights: {
          frequency: "2 project discussion calls every week"
        }
      }
    },
    {
      id: "mentorship",
      title: "Mentorship & Shadowing",
      icon: UserCheck,
      content: {
        text: "Get direct mentorship from {mentor}, Senior DevOps Consultant. You'll also have the {opportunity} on real client projects.",
        highlights: {
          mentor: "Saurav Chaudhary",
          opportunity: "rare opportunity to shadow him"
        },
        decorations: {
          opportunity: {
            className: "text-yellow-300 font-bold"
          }
        }
      }
    }
  ],
  styles: {
    stepTitle: "text-xl sm:text-2xl font-bold text-orange-400 mb-3",
    stepContent: "text-base sm:text-lg text-gray-200 leading-relaxed",
    highlight: "font-semibold text-orange-300"
  }
};

// Utility function to render highlights with styling
const renderContentWithHighlights = (content, styles) => {
  let { text, highlights, decorations = {} } = content;

  Object.entries(highlights).forEach(([key, value]) => {
    const placeholder = `{${key}}`;
    const decoration = decorations[key];
    const highlightClass = decoration ? decoration.className : styles.highlight;

    text = text.replace(
      placeholder,
      `<span class="${highlightClass}">${value}</span>`
    );
  });

  return <span dangerouslySetInnerHTML={{ __html: text }} />;
};

function ProgramDetails() {
  const { section, header, steps, styles } = programConfig;

  return (
    <section id={section.id} className={`${section.className} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
      
      <div className="py-16 lg:py-24 relative">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={`${header.titleStyles} ${Ubuntu.className}`}
          >
            {header.title}{" "}
            <span className={header.highlightStyles}>{header.highlight}</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className={header.dividerStyles}
          />
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
            <div className="w-full h-full bg-gradient-to-b from-transparent via-orange-500/30 to-transparent" />
            <div className="absolute inset-0 w-full bg-gradient-to-b from-orange-400/60 via-amber-400/60 to-orange-600/60 animate-pulse" />
          </div>

          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5">
            <div className="w-full h-full bg-gradient-to-b from-transparent via-orange-500/30 to-transparent" />
            <div className="absolute inset-0 w-full bg-gradient-to-b from-orange-400/60 via-amber-400/60 to-orange-600/60 animate-pulse" />
          </div>

          <div className="space-y-8 md:space-y-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: "easeOut",
                    delay: index * 0.1 
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`relative flex items-center gap-6 md:gap-12 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 shadow-lg shadow-orange-700/40 z-10 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <IconComponent className="w-5 h-5 md:w-7 md:h-7 text-white" />
                    
                    {/* Pulse Effect */}
                    <div className="absolute inset-0 rounded-full bg-orange-400 animate-ping opacity-20" />
                  </div>

                  {/* Spacer for mobile */}
                  <div className="md:hidden w-4" />

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 25px 50px -12px rgba(255, 165, 0, 0.25)"
                    }}
                    transition={{ duration: 0.3 }}
                    className={`
                      relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 
                      backdrop-blur-xl border border-gray-700/50 
                      p-6 md:p-8 rounded-2xl md:rounded-3xl 
                      shadow-2xl shadow-black/20
                      flex-1 md:max-w-md
                      before:absolute before:inset-0 before:rounded-2xl md:before:rounded-3xl
                      before:bg-gradient-to-br before:from-orange-500/5 before:to-amber-600/5
                      before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
                      ${isEven ? "md:mr-auto md:ml-8" : "md:ml-auto md:mr-8"}
                    `}
                  >
                    {/* Card Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-amber-600/20 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                    
                    <div className="relative">
                      {/* Step Number Badge */}
                      <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base shadow-lg">
                        {index + 1}
                      </div>
                      
                      <h2 className={`${styles.stepTitle} flex items-center gap-3`}>
                        <IconComponent className="w-6 h-6 text-orange-400 shrink-0" />
                        {step.title}
                      </h2>
                      
                      <p className={styles.stepContent}>
                        {renderContentWithHighlights(step.content, styles)}
                      </p>

                      {/* Decorative Element */}
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
                    </div>
                  </motion.div>

                  {/* Desktop Spacer */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-24 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 rounded-full">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-gray-300 text-sm font-medium">
              Designed for your success
            </span>
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProgramDetails;
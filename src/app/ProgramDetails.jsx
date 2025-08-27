"use client";
import React from "react";
import { Ubuntu } from "@/components/Fonts/font";

const programConfig = {
  section: {
    id: "ProgramDetails",
    className: "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  },
  header: {
    title: "Program",
    highlight: "Details",
    titleStyles:
      "text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4",
    highlightStyles: "text-orange-500",
    dividerStyles:
      "w-24 h-1 bg-gradient-to-r from-gray-500 to-orange-500 mx-auto rounded-full",
  },
  stepper: {
    initialStep: 1,
    backButtonText: "Previous",
    nextButtonText: "Next",
    containerStyles: "mx-1 sm:mx-12",
  },
  steps: [
    {
      id: "duration",
      title: "Duration",
      content: {
        text: "The program runs for {duration}, giving you time to work deeply on multiple projects while balancing your learning pace.",
        highlights: {
          duration: "2–3 months",
        },
      },
    },
    {
      id: "projects",
      title: "Live Projects",
      content: {
        text: "You'll work on {projectCount}. These aren't dummy assignments — they're actual DevOps challenges faced in industry.",
        highlights: {
          projectCount: "4 real-world client projects",
        },
      },
    },
    {
      id: "batch-size",
      title: "Batch Size",
      content: {
        text: "Each batch is limited to {batchSize}. This ensures {benefit} and focused mentorship.",
        highlights: {
          batchSize: "7 members",
          benefit: "personal attention",
        },
        decorations: {
          benefit: {
            className: "underline underline-offset-4 decoration-orange-400",
          },
        },
      },
    },
    {
      id: "weekly-calls",
      title: "Weekly Calls",
      content: {
        text: "Expect {frequency}. These sessions are designed to review your work, solve blockers, and ensure steady progress.",
        highlights: {
          frequency: "2 project discussion calls every week",
        },
      },
    },
    {
      id: "mentorship",
      title: "Mentorship & Shadowing",
      content: {
        text: "Get direct mentorship from {mentor}, Senior DevOps Consultant. You'll also have the {opportunity} on real client projects.",
        highlights: {
          mentor: "Saurav Chaudhary",
          opportunity: "rare opportunity to shadow him",
        },
        decorations: {
          opportunity: {
            className: "text-yellow-300 font-bold",
          },
        },
      },
    },
  ],
  styles: {
    stepTitle:
      "text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent mb-4 tracking-tight",
    stepContent: "text-lg text-gray-200 leading-relaxed",
    highlight: "font-semibold text-white",
  },
};

const Stepper = ({ children, initialStep, backButtonText, nextButtonText }) => (
  <div className="space-y-12">{children}</div>
);

const Step = ({ children, index }) => (
  <div className="group relative p-8 bg-gradient-to-br from-gray-900/10 to-gray-800/20 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/10">
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent rounded-2xl"></div>

    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/20 via-transparent to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

    <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
      {index + 1}
    </div>

    <div className="relative z-10">{children}</div>

    <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"></div>
  </div>
);

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
  const { section, header, stepper, steps, styles } = programConfig;

  return (
    <div className={section.className} id={section.id}>
      <div className="py-16 lg:py-24">
        <div className="text-center mb-16">
          <h1 className={`${header.titleStyles} ${Ubuntu.className}`}>
            {header.title}{" "}
            <span className={header.highlightStyles}>{header.highlight}</span>
          </h1>
          <div className={header.dividerStyles}></div>
        </div>

        {/* Stepper Section */}
        <div className={stepper.containerStyles}>
          <Stepper
            initialStep={stepper.initialStep}
            backButtonText={stepper.backButtonText}
            nextButtonText={stepper.nextButtonText}
          >
            {steps.map((step, index) => (
              <Step key={step.id} index={index}>
                <h2 className={styles.stepTitle}>{step.title}</h2>
                <p className={styles.stepContent}>
                  {renderContentWithHighlights(step.content, styles)}
                </p>
              </Step>
            ))}
          </Stepper>
        </div>
      </div>
    </div>
  );
}

export default ProgramDetails;

"use client";

import Stepper, { Step } from "@/components/component/Stepper";
import React from "react";
import {Ubuntu} from "@/components/Fonts/font"

function ProgramDetails() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="ProgramDetails">
      <div className="py-16 lg:py-24">
        <div className="text-center mb-16">
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4 ${Ubuntu.className}`}>
            Program <span className="text-orange-500">Details</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-orange-500 mx-auto rounded-full"></div>
        </div>
        <div className="mx-1 sm:mx-12">
        <Stepper
          initialStep={1}
          backButtonText="Previous"
          nextButtonText="Next"
        >
          <Step>
            <h2 className="text-2xl font-bold text-orange-400 mb-2">
              Duration
            </h2>
            <p className="text-lg text-gray-200">
              The program runs for{" "}
              <span className="font-semibold">2–3 months</span>, giving you time
              to work deeply on multiple projects while balancing your learning
              pace.
            </p>
          </Step>

          <Step>
            <h2 className="text-2xl font-bold text-orange-400 mb-2">
              Live Projects
            </h2>
            <p className="text-lg text-gray-200">
              You’ll work on{" "}
              <span className="font-semibold">
                4 real-world client projects
              </span>
              . These aren’t dummy assignments — they’re actual DevOps
              challenges faced in industry.
            </p>
          </Step>

          <Step>
            <h2 className="text-2xl font-bold text-orange-400 mb-2">
              Batch Size
            </h2>
            <p className="text-lg text-gray-200">
              Each batch is limited to{" "}
              <span className="font-semibold">7 members</span>. This ensures{" "}
              <span className="underline underline-offset-4 decoration-orange-400">
                personal attention
              </span>
              and focused mentorship.
            </p>
          </Step>

          <Step>
            <h2 className="text-2xl font-bold text-orange-400 mb-2">
              Weekly Calls
            </h2>
            <p className="text-lg text-gray-200">
              Expect{" "}
              <span className="font-semibold">
                2 project discussion calls every week
              </span>
              . These sessions are designed to review your work, solve blockers,
              and ensure steady progress.
            </p>
          </Step>

          <Step>
            <h2 className="text-2xl font-bold text-orange-400 mb-2">
              Mentorship & Shadowing
            </h2>
            <p className="text-lg text-gray-200">
              Get direct mentorship from{" "}
              <span className="font-semibold">Saurav Chaudhary</span>, Senior
              DevOps Consultant. You’ll also have the{" "}
              <span className="text-yellow-300 font-bold">
                rare opportunity to shadow him
              </span>
              on real client projects.
            </p>
          </Step>
        </Stepper>
        </div>
      </div>
    </div>
  );
}

export default ProgramDetails;

import StepForm from "@/components/MultiStepForm/StepForm";
import Steps from "@/components/MultiStepForm/Steps";
import React from "react";

export default function StudentOnboardingPage() {
  const steps = [
    {
      number: 1,
      title: "Personal Info",
    },
    {
      number: 2,
      title: "Education",
    },
    {
      number: 3,
      title: "Programming Experience",
    },
    {
      number: 4,
      title: "Preferred Programming Languages",
    },
    {
      number: 5,
      title: "Technical Skills Assessment",
    },
    {
      number: 6,
      title: "Submit and Confirmation",
    },
  ];
  return (
    <div className="bg-blue-50 min-h-screen p-4">
      <div className="mx-auto w-full max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-4 md:p-6 dark:bg-gray-800 dark:border-gray-700 grid grid-cols-12 gap-4 min-h-screen">
        {/* Steps */}
        <Steps steps={steps} />
        {/* Form */}
        <div className="rounded-lg col-span-full md:col-span-8">
          <StepForm />
        </div>
      </div>
    </div>
  );
}

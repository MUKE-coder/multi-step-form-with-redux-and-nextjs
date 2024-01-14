import NavButtons from "@/components/FormInputs/NavButtons";
import React from "react";
import { useSelector } from "react-redux";

export default function FormConfirmation() {
  const formData = useSelector((store) => store.onboarding.formData);
  async function processData(data) {
    console.log(formData);
  }
  return (
    <div>
      <form className="px-12 py-4" onSubmit={processData}>
        <div className="mb-8">
          <h5 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Confirm and Submit Data
          </h5>
          <p>Confirm if this the Data that you filled</p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          <code>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </code>
        </div>

        <NavButtons />
      </form>
    </div>
  );
}

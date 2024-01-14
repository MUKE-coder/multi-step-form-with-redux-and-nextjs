import onboardingStudentsSlice from "./slices/onboardingStudentsSlice";

const { configureStore } = require("@reduxjs/toolkit");

//create a store and give it slices
export const store = configureStore({
  reducer: {
    onboarding: onboardingStudentsSlice,
  },
});

//Store =whole state

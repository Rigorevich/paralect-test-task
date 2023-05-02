import { configureStore } from "@reduxjs/toolkit";
import vacanciesReducer from "./slices/vacanciesSlice";

export const store = configureStore({
  reducer: {
    vacancies: vacanciesReducer,
  },
});

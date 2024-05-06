import { configureStore } from "@reduxjs/toolkit";
import { qpickReducer } from "./qpick/qpick.slice";

export const store = configureStore({
  reducer: {
    qpick: qpickReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

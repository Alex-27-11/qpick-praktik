import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Basket, BasketItem } from "../../models/models";

const initialState: Basket = {
  basketCards: [],
  totalPrice: 0,
  Count: 0,
};

export const qpickSlice = createSlice({
  name: "qpick",
  initialState,
  reducers: {
    addHeadPhone(state, action: PayloadAction<BasketItem>) {
      state.basketCards.push(action.payload);
    },
    removeHeadPhone(state, action: PayloadAction<number>) {
      state.basketCards = state.basketCards.filter(
        (item) => item.id !== action.payload
      );
    },
    minusTotalPrice(state, action: PayloadAction<number>) {
      state.totalPrice -= action.payload;
    },
    plusTotalPrice(state, action: PayloadAction<number>) {
      state.totalPrice += action.payload;
    },
    computedCount(state, action: PayloadAction<number>) {
      state.Count += action.payload;
    },
  },
});

export const qpickActions = qpickSlice.actions;
export const qpickReducer = qpickSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCoin: "KRW-BTC",
};

const coinSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {
    setCoin: (state, action) => {
      state.selectedCoin = action.payload;
    },
  },
});

export const { setCoin } = coinSlice.actions;
export default coinSlice.reducer;

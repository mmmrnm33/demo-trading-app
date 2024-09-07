import { createSlice } from "@reduxjs/toolkit";

const webSocketSlice = createSlice({
  name: "webSocket",
  initialState: {
    data: {},
  },
  reducers: {
    updateData: (state, action) => {
      const {
        code,
        change,
        change_rate,
        timestamp,
        opening_price,
        high_price,
        low_price,
        trade_price,
      } = action.payload;
      state.data[code] = {
        change,
        change_rate,
        timestamp,
        opening_price,
        high_price,
        low_price,
        trade_price,
      };
    },
  },
});

export const { updateData } = webSocketSlice.actions;

export default webSocketSlice.reducer;

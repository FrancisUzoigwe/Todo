import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

const globalState = createSlice({
  name: "toggleState",
  initialState,
  reducers: {
    onToggle: (state) => {
      state.toggle = true;
    },
    onToggleChange: (state) => {
      state.toggle = false;
    },
  },
});

export const { onToggle, onToggleChange } = globalState.actions;

export default globalState.reducer;

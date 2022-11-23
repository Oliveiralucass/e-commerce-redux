import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const buscaSlice = createSlice({
  name: "busca",
  initialState,
  reducers: {
    fazerBusca: (state, { payload }) => payload,
    resetarBusca: () => initialState,
  },
});

export const { fazerBusca, resetarBusca } = buscaSlice.actions;

export default buscaSlice.reducer;

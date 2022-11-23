import { createSlice } from "@reduxjs/toolkit";

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState: [],
  reducers: {
    adicionarAoCarrinho: (state, { payload }) => {
      state.push(payload);
    },
    removerDoCarrinho: (state, { payload }) => {
      state = state.filter((skin) => skin.nome !== payload);
    },
  },
});

export const { adicionarAoCarrinho, removerDoCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;

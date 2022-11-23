import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  precoTotal: 0,
  items: [],
};

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, { payload }) => {
      let existe = state.items.some((item) => item.nome === payload.nome);
      if (!existe) {
        return {
          precoTotal: state.precoTotal + payload.preco,
          items: [...state.items, { ...payload, quantidade: 1 }],
        };
      } else {
        state.precoTotal -= payload.preco;
        state.items = state.items.filter((item) => item.nome !== payload.nome);
      }
    },
    removerDoCarrinho: (state, { payload }) => {
      state.precoTotal -= payload.preco;
      state.items = state.items.filter((skin) => skin.nome !== payload.nome);
    },
    resetarCarrinho: () => initialState,
  },
});

export const { adicionarAoCarrinho, removerDoCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;

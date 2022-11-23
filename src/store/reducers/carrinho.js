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
      let existe = state.items.some((item) => item.id === payload.id);
      if (!existe) {
        return {
          precoTotal: state.precoTotal + payload.preco,
          items: [...state.items, { ...payload, quantidade: 1 }],
        };
      } else {
        state.precoTotal -= payload.preco;
        state.items = state.items.filter((item) => item.id !== payload.id);
      }
    },

    removerDoCarrinho: (state, { payload }) => {
      state.precoTotal -= payload.preco;
      state.items = state.items.filter((skin) => skin.id !== payload.id);
    },

    adicionarQuantidade: (state, { payload }) => {
        state.items = state.items.map((skinCarrinho) => {
            if(skinCarrinho.id === payload.id) {
                skinCarrinho.quantidade += 1;
                state.precoTotal += payload.preco

                return skinCarrinho
            }   
        })
    },

    removerQuantidade: (state, { payload }) => {
        state.items = state.items.map((skinCarrinho) => {
            if(skinCarrinho.id === payload.id) {
                skinCarrinho.quantidade -= 1;
                state.precoTotal -= payload.preco

                return skinCarrinho
            }   
        })
    },

    resetarCarrinho: () => initialState,
  },
});

export const { adicionarAoCarrinho, removerDoCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;

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
      let skinPrecoAcumulado = payload.preco * payload.quantidade;
      state.precoTotal -= skinPrecoAcumulado;
      state.items = state.items.filter((skin) => skin.id !== payload.id);
    },

    adicionarQuantidade: (state, { payload }) => {
      console.log(payload);
      state.items = state.items.map((skinCarrinho) => {
        if (skinCarrinho.id === payload.id) {
          skinCarrinho.quantidade += 1;
          state.precoTotal += payload.preco;
        }
        return skinCarrinho;
      });
    },

    removerQuantidade: (state, { payload }) => {
      state.items = state.items.map((skinCarrinho) => {
        if (skinCarrinho.quantidade > 1) {
          if (skinCarrinho.id === payload.id) {
            skinCarrinho.quantidade -= 1;
            state.precoTotal -= payload.preco;
          }
        }
        return skinCarrinho;
      });
    },

    mudarFavoritoCarrinho: (state, { payload }) => {
      state.items = state.items.map((skin) => {
        if (skin.id === payload) skin.favorito = !skin.favorito;
        return skin;
      });
    },

    resetarCarrinho: () => initialState,
  },
});

export const {
  adicionarAoCarrinho,
  removerDoCarrinho,
  adicionarQuantidade,
  removerQuantidade,
  mudarFavoritoCarrinho,
  resetarCarrinho,
} = carrinhoSlice.actions;

export default carrinhoSlice.reducer;

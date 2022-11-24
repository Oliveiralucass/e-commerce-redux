import { configureStore } from "@reduxjs/toolkit";
import carrinhoSlice from "./reducers/carrinho";
import skinsSlice from "./reducers/skins";
import buscaSlice from "./reducers/busca";

const store = configureStore({
  reducer: {
    skins: skinsSlice,
    carrinho: carrinhoSlice,
    busca: buscaSlice,
  },
});

export default store;

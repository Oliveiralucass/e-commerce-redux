import { configureStore } from "@reduxjs/toolkit";
import carrinhoSlice from "./reducers/carrinho";
import skinsSlice from "./reducers/skins";

const store = configureStore({
  reducer: {
    skins: skinsSlice,
    carrinho: carrinhoSlice,
  },
});

export default store;

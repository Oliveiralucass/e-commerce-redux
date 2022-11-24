import { createSlice } from "@reduxjs/toolkit";
import dbSkins from "../../db.json";

const initialState = dbSkins;

const skinsSlice = createSlice({
  name: "skins",
  initialState,
  reducers: {
    mudarFavorito: (state, { payload }) => {
      state = state.map((skin) => {
        if (skin.id === payload) skin.favorito = !skin.favorito;
        return skin;
      });
    },
  },
});

export const { mudarFavorito } = skinsSlice.actions;

export default skinsSlice.reducer;

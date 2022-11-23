import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        arma: "Karambit",
        nome: "Wild Lotus",
        colecao: "The St Marc Collection",
        image: "ak-47-wild-lotus.png"
    },
]


const categoriasSlice = createSlice({
    name: 'categorias',
    initialState
});

export default categoriasSlice.reducer;
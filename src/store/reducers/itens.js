import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";


const initialState = [
    {
        url: "karambit",
        arma: "Karambit",
        nome: "Wild Lotus",
        colecao: "The St Marc Collection",
        image: "ak-47-wild-lotus.png"
    },
]


const itensSlice = createSlice({
    name: 'itens',
    initialState,
    reducers: {
        mudarFavorito: (state, { payload }) => {
            state = state.map(item => {
                if(item.id === payload) {
                    item.favorito = !item.favorito 
                
                    return item;
                }
            })
        }
    }
})

export const { mudarFavorito } = itensSlice.actions;

export default itensSlice.reducer;
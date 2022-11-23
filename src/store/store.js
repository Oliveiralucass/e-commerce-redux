import { configureStore } from '@reduxjs/toolkit'
import categoriasSlice from './reducers/categorias';
import { itensSlice } from './reducers/itens'

// Configuração padrão do store
export const store = configureStore({
    reducer: {
        categorias: categoriasSlice,
        itens: itensSlice
    }
});



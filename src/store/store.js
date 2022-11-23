import { configureStore  } from "@reduxjs/toolkit";
import skinsSlice from './reducers/skins'

const store = configureStore({
    reducer: {
        skins: skinsSlice
    }
})

export default store;
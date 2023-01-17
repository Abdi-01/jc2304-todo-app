//  Prepare redux STORE
import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './todoReducer';
// ⬇️ import reducer
export const globalStore = configureStore({
    // ⬇️ Mendefine reducer yang nantinya dibutuhkan
    reducer:{
        todoReducer
    }
});
import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './favorites/favoritesSlice'

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
})
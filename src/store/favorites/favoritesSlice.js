import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  /* '44': { id: 44, name: 'Product 1', price: 100, color: 'Negro' },
  '45': { id: 45, name: 'Product 2', price: 100, color: 'Negro' }, */
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const favorite = action.payload;
      const {id} = favorite;

      if( !!state[id] ) {
        delete state[id];
        return;
      }

      state[id] = favorite;

    }
  }
});

// Action creators are generated for each case reducer function
export const { toggleFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer
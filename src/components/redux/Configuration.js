import { configureStore } from '@reduxjs/toolkit';
import movies from './MovieSlice';

const store = configureStore({
  reducer: {
    movies,
  },
});

export default store;

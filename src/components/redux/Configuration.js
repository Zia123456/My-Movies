import { configureStore } from '@reduxjs/toolkit';
import movies from './Api';

const store = configureStore({
  reducer: {
    movies,
  },
});

export default store;

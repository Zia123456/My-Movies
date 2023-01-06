import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// 6807ba559afb8aeca9827fd21cf82836
const initialState = {
  movies: [],
  selectedMovie: {},
};

export const getMovies = createAsyncThunk('Movies/getMovies', async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/4/list/1?api_key=6807ba559afb8aeca9827fd21cf82836',
  );
  return response.data;
});

const MovieSlice = createSlice({
  name: 'movies',
  initialState,

  reducers: {
    SetselectedMovie: (state, action) => {
      const newState = { ...state, selectedMovie: action.payload };
      return newState;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.movies.push(action.payload);
    });
  },
});

export default MovieSlice.reducer;
export const { SetselectedMovie } = MovieSlice.actions;

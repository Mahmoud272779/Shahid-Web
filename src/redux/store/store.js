import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { movieReducer } from '../reducers/movieReducer';
import { thunk } from 'redux-thunk';

export const store=configureStore({reducer: movieReducer},applyMiddleware(thunk))
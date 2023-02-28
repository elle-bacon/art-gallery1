import { configureStore } from '@reduxjs/toolkit';
import dateReducer from './features/dataSlice';
import { logger } from './features/middleware';


export const store = configureStore({
    reducer: {
      data: dateReducer,
    },
    middleware: [logger],
})

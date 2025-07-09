import { configureStore } from '@reduxjs/toolkit';
import companiesSlice from './companiesSlice';
import jobsSlice from './jobsSlice';
import userSlice from './userSlice';

export const store = configureStore({
  reducer: {
    companies: companiesSlice,
    jobs: jobsSlice,
    user: userSlice,
  },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
import { configureStore } from '@reduxjs/toolkit';
import RocketSlice from './RocketSlice';
import messionSlice from './MessionSlice';

const Store = configureStore({
  reducer: {
    rockets: RocketSlice,
    missions: messionSlice,
  },
});

export default Store;

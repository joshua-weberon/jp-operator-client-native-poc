import { configureStore, combineReducers } from '@reduxjs/toolkit';
import chatReducer from './chatSlice';
import selectedCustomerReducer from './selectedCustomerSlice';

const rootReducer = combineReducers({
  chats: chatReducer,
  selectedCustomer: selectedCustomerReducer,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export const store = setupStore({});

import { createSlice } from "@reduxjs/toolkit";
import {selectedCustomerId} from './demoData';

const initialState = {
  customerId: selectedCustomerId
}

const slice = createSlice({
  name: 'selectedCustomer',
  initialState,
  reducers: {}
})

const getSelectedCustomerId = (state) => state.selectedCustomer.customerId;
export default slice.reducer;
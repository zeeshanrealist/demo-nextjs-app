import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CartState {
  cartCount: number
}

const initialState: CartState = {
  cartCount: 1
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementCartCount: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.cartCount += 1
    },
    incrementCartCountByAmount: (state, action: PayloadAction<number>) => {
      state.cartCount += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementCartCount, incrementCartCountByAmount } = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
    items : string[]
}

const initialState: CartState = {
    items: []
}

const CartSlice = createSlice({
    name:'cart',
    initialState,

    reducers: {
        addItem: (state, action: PayloadAction<string>) => { // Change string to the correct payload type
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

// Export actions and reducer
export const { addItem, removeItem, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
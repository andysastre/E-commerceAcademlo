import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading.slice';
import axios from 'axios';
import getConfig from '../../utils/getConfig';


export const CartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCart: (state, action) =>{
            const cart = action.payload;
            return cart;
        }
    }
})

export const CartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/cart`, getConfig())
        .then((res) => dispatch(setCart(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const addCartThunk = add => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post(`https://ecommerce-api-react.herokuapp.com/api/v1/cart`,add, getConfig())
        .then(() => dispatch(CartThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}


export const { setCart } = CartSlice.actions;

export default CartSlice.reducer;

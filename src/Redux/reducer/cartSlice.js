import { async } from '@firebase/util';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { toast } from 'react-toastify';



const initialState = {
    cartProducts: [],
    loading: false,
    orderInfo: {},
    testimonialsLoading: true,
    testimonials: [],
    products: [],
    productLoading: true,
    addTestimonialLoading: true,
    orders: [],
    orderDataLoading: true,
    ApproveTestimonialLoading: true
};

export const addToDB = createAsyncThunk(
    'users/fetchByIdStatus',
    async (food) => {
        const response = await axios.post(`http://localhost:5000/addToCart`, food).then(res => {
            toast.success(`${food.name} added on your cart.`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        });
        return response.data;
    }
);

export const Testimonials = createAsyncThunk(
    'data/testimonials',
    async () => {
        const response = await axios.get('http://localhost:5000/reviews');
        return response.data;
    }
);

export const allPorducts = createAsyncThunk(
    'data/products',
    async () => {
        const response = await axios.get('http://localhost:5000/foods');
        return response.data;
    })

export const addTestimonial = createAsyncThunk(
    'data/addtestimonial',
    async (info) => {
        console.log(info);
        const response = await axios.post('http://localhost:5000/review', info);
        return response.data;
    })

export const Myorders = createAsyncThunk(
    'data/orderdata',
    async (email) => {
        console.log(email);
        const response = await axios.get(`http://localhost:5000/orders?email=${email}`);
        return response.data;
    });



export const ApproveTestimonial = createAsyncThunk(
    'data/approvetestimonial',
    async (id) => {
        const response = await axios.put(`http://localhost:5000/approvetestimonial?id=${id}`);
        return response.data;
    });



export const deleteTestimonial = createAsyncThunk(
    'data/approvetestimonial',
    async (id) => {
        const response = await axios.delete(`http://localhost:5000/deletetestimonial?id=${id}`).then(res => {
            toast.success(`Delete testimonial successfully `, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        });
        return response.data;
    });




export const cartSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            state.cartProducts.push(payload);
        },
        removeFormCart: (state, { payload }) => {
            state.cartProducts = state.cartProducts.filter(book => book.name !== payload)
        },
        saveOrderInfo: (state, { payload }) => {
            state.orderInfo = payload;
        },
        remainingTestimonial: (state, { payload }) => {
            state.testimonials = state.testimonials.filter(testimonial => testimonial._id !== payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addToDB.fulfilled, (state, action) => {
        })
            .addCase(addToDB.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(Testimonials.pending, (state, action) => {
                state.testimonialsLoading = true;
            })
            .addCase(Testimonials.fulfilled, (state, { payload }) => {
                state.testimonialsLoading = false;
                state.testimonials = payload;
            })
            .addCase(allPorducts.pending, (state, { payload }) => {
                state.productLoading = true;
            })
            .addCase(allPorducts.fulfilled, (state, { payload }) => {
                state.productLoading = false;
                state.products = payload;
            })
            .addCase(Myorders.pending, (state, { payload }) => {
                state.orderDataLoading = true;
            })
            .addCase(Myorders.fulfilled, (state, { payload }) => {
                state.orderDataLoading = false;
                state.orders = payload;
            })
            .addCase(addTestimonial.pending, (state, { payload }) => {
                state.addTestimonialLoading = true;
            })
            .addCase(ApproveTestimonial.pending, (state, { payload }) => {
                state.ApproveTestimonialLoading = true;
            })
            .addCase(ApproveTestimonial.fulfilled, (state, { payload }) => {
                state.ApproveTestimonialLoading = false;
            })
            .addCase(addTestimonial.fulfilled, (state, { payload }) => {
                state.addTestimonialLoading = false;
                toast.success(`Thank you for review.`, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })


    },

})

export const { addToCart, remainingTestimonial, removeFormCart, saveOrderInfo } = cartSlice.actions;
export const allData = (state) => state.data;
export default cartSlice.reducer
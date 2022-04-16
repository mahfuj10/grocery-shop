import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { toast } from 'react-toastify';
import swal from 'sweetalert';



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
    ApproveTestimonialLoading: true,
    cartProductLoading: false,
    deleteProductLoading: false,
    updateProductLoading: false,
    myProfile: {},
    myProfileLoading: true,
    allOrders: [],
    allOrderDataLoading: true,
    user: {},
    firebaseLoading: Boolean,
    // cartProducts:[]
};

export const addToDB = createAsyncThunk(
    'users/fetchByIdStatus',
    async (food) => {
        const response = await axios.post(`https://secret-island-26493.herokuapp.com/addToCart`, food).then(res => {
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
        const response = await axios.get('https://secret-island-26493.herokuapp.com/reviews');
        return response.data;
    }
);

export const allPorducts = createAsyncThunk(
    'data/products',
    async () => {
        const response = await axios.get('https://secret-island-26493.herokuapp.com/foods');
        return response.data;
    })

export const addTestimonial = createAsyncThunk(
    'data/addtestimonial',
    async (info) => {
        console.log(info);
        const response = await axios.post('https://secret-island-26493.herokuapp.com/review', info);
        return response.data;
    })

export const Myorders = createAsyncThunk(
    'data/orderdata',
    async (email) => {
        console.log(email);
        const response = await axios.get(`https://secret-island-26493.herokuapp.com/orders?email=${email}`);
        return response.data;
    });

export const deleteProduct = createAsyncThunk(
    'data/deleteProduct',
    async (id) => {
        const response = await axios.delete(`https://secret-island-26493.herokuapp.com/deleteproduct?id=${id}`).then(res => {
            swal("Poof! This product has been deleted!", {
                icon: "success",
            });
        });
        return response.data;
    });



export const ApproveTestimonial = createAsyncThunk(
    'data/approvetestimonial',
    async (id) => {
        const response = await axios.put(`https://secret-island-26493.herokuapp.com/approvetestimonial?id=${id}`);
        return response.data;
    });


export const getCartProducts = createAsyncThunk(
    'data/approvetestimonial',
    async (email) => {
        const response = await axios.get(`https://secret-island-26493.herokuapp.com/myCartProducts/${email}`);
        return response.data;
    });



export const deleteTestimonial = createAsyncThunk(
    'data/approvetestimonial',
    async (id) => {
        const response = await axios.delete(`https://secret-island-26493.herokuapp.com/deletetestimonial?id=${id}`).then(res => {
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


export const updateProductName = createAsyncThunk(
    'data/dataupdateproductname',
    async (info) => {
        const response = await axios.put(`https://secret-island-26493.herokuapp.com/updateproductname?id=${info._id}`, info);
        return response.data;
    });

export const updateProductPrice = createAsyncThunk(
    'data/dataupdateproductprice',
    async (info) => {
        const response = await axios.put(`https://secret-island-26493.herokuapp.com/updateproductprice?id=${info._id}`, info);
        return response.data;
    });



export const updateProductCategory = createAsyncThunk(
    'data/dataupdateproductcategory',
    async (info) => {
        const response = await axios.put(`https://secret-island-26493.herokuapp.com/updateproductcategory?id=${info._id}`, info);
        return response.data;
    });


export const userProfile = createAsyncThunk(
    'data/getmyprofile',
    async (uid) => {
        const response = await axios.get(`https://secret-island-26493.herokuapp.com/myprofile?uid=${uid}`);
        return response.data;
    });

export const allOrdersData = createAsyncThunk(
    'data/allOrders',
    async () => {
        const response = await axios.get(`https://secret-island-26493.herokuapp.com/orders`);
        return response.data;
    });


export const cartSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            // state.cartProducts.push(payload);
        },
        removeFormCart: (state, { payload }) => {
            state.cartProducts = state.cartProducts.filter(book => book.name !== payload)
        },
        saveOrderInfo: (state, { payload }) => {
            state.orderInfo = payload;
        },
        remainingTestimonial: (state, { payload }) => {
            state.testimonials = state.testimonials.filter(testimonial => testimonial._id !== payload);
        },
        remainingProducts: (state, { payload }) => {
            state.products = state.products.filter(product => product._id !== payload);
        },
        saveUser: (state, { payload }) => {
            state.user = payload;
        },
        firebaseLoad: (state, { payload }) => {
            state.firebaseLoading = payload;
        },

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
            .addCase(deleteProduct.pending, (state, { payload }) => {
                state.deleteProductLoading = false;
            })
            .addCase(deleteProduct.fulfilled, (state, { payload }) => {
                state.deleteProductLoading = true;
            })
            .addCase(updateProductName.pending, (state, { payload }) => {
                state.updateProductLoading = false;
            })
            .addCase(updateProductName.fulfilled, (state, { payload }) => {
                state.updateProductLoading = true;
            })
            .addCase(updateProductName.rejected, (state, { payload }) => {
                state.updateProductLoading = true;
            })
            .addCase(updateProductPrice.pending, (state, { payload }) => {
                state.updateProductLoading = false;
            })
            .addCase(updateProductPrice.fulfilled, (state, { payload }) => {
                state.updateProductLoading = true;
            })
            .addCase(updateProductPrice.rejected, (state, { payload }) => {
                state.updateProductLoading = true;
            })
            .addCase(updateProductCategory.pending, (state, { payload }) => {
                state.updateProductLoading = false;
            })
            .addCase(updateProductCategory.fulfilled, (state, { payload }) => {
                state.updateProductLoading = true;
            })
            .addCase(updateProductCategory.rejected, (state, { payload }) => {
                state.updateProductLoading = true;
            })
            .addCase(userProfile.pending, (state, { payload }) => {
                state.myProfileLoading = true;
            })
            .addCase(userProfile.fulfilled, (state, { payload }) => {
                state.myProfile = payload;
                state.myProfileLoading = false;
            })
            .addCase(allOrdersData.pending, (state, { payload }) => {
                state.allOrderDataLoading = true;
            })
            .addCase(allOrdersData.fulfilled, (state, { payload }) => {
                state.allOrderDataLoading = false;
                state.allOrders = payload;
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

export const { addToCart, saveUser, remainingTestimonial, remainingProducts, firebaseLoad, removeFormCart, saveOrderInfo } = cartSlice.actions;
export const allData = (state) => state.data;
export default cartSlice.reducer
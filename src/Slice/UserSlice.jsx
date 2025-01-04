import { createSlice } from "@reduxjs/toolkit";


const userInfoFromStorage = JSON.parse(localStorage.getItem('userInfo')) || null;
const isLoggedInFromStorage = JSON.parse(localStorage.getItem('isLoggedIn')) || false;

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: userInfoFromStorage,
    loading: false,
    error: null,
    isLoggedIn: isLoggedInFromStorage,
  },
  reducers: {
    registerUser: (state, action) => {
      state.userInfo = action.payload;
      state.isLoggedIn = true;
      state.loading = false;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
      localStorage.setItem('isLoggedIn', 'true');
    },

    loginUser: (state, action) => {
      state.userInfo = action.payload;
      state.isLoggedIn = true;
      state.loading = false;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
      localStorage.setItem('isLoggedIn', 'true');
    },

    logoutUser: (state) => {
      state.userInfo = null;
      state.isLoggedIn = false;
      localStorage.removeItem('userInfo');
      localStorage.removeItem('isLoggedIn');
    },

 
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

 
    setError: (state, action) => {
      state.error = action.payload;
    },

    resetError: (state) => {
      state.error = null;
    },
  },
});


export const { registerUser, loginUser, logoutUser, setLoading, setError, resetError } = UserSlice.actions;


export default UserSlice.reducer;

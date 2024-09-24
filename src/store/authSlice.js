// import {createSlice} from "@reduxjs/toolkit"

// const initialState = {
//   status: false,
//   userData: null
// }

// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//       login: (state, action)=>{
//         state.status = true,
//         state.userData = action.payload.userData
//         console.log("from authSlice:",state.userData)
//       },
//       logout: (state)=>{
//         state.status = false,
//         state.userData = null
//       }
//     }
// })


// export const {login, logout} = authSlice.actions;

// export default authSlice.reducer;







// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   status: false,
//   userData: null,
//   darkMode: false, // Add this property
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       state.status = true;
//       state.userData = action.payload.userData;
//     },
//     logout: (state) => {
//       state.status = false;
//       state.userData = null;
//     },
//     toggleDarkMode: (state) => {
//       state.darkMode = !state.darkMode;
//     },
//   },
// });

// export const { login, logout, toggleDarkMode } = authSlice.actions;

// export default authSlice.reducer;










import { createSlice } from "@reduxjs/toolkit";

// Retrieving darkMode from localStorage or default to false (light mode)
const initialState = {
  status: false,
  userData: null,
  darkMode: localStorage.getItem('darkMode') === 'true', // Checking localStorage for darkMode
  // loader: false, 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      // Saving the updated darkMode state to localStorage
      localStorage.setItem('darkMode', state.darkMode);
    },
    // loading:(state)=>{
    //   state.loader = !state.loader;
    // }
  },
});

export const { login, logout, toggleDarkMode } = authSlice.actions;

export default authSlice.reducer;

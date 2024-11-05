import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
  "getuser", // Action type as a string
  async (args, { rejectWithValue }) => {
    // const api =  process.env.REACT_APP_SECRET_KEY
    try {
      let req = await axios
      .get("https://forested-subdued-sarahsaurus.glitch.me/blogs")
      // .get(`${api}/blogs`)
      .then(res =>{
    return res.data
      }) // Provide your API URL
      return req
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network error"
      ); // Handle errors
    }
  }
);
export const editUsers = createAsyncThunk(
  "edituser", // Action type as a string
  async (data, { rejectWithValue }) => {
    // const apiUrl =  `${process.env.REACT_APP_SECRET_KEY}${data?.id}`;
    try {
      let req = await axios
      // .patch(apiUrl,data)
      .patch(`https://forested-subdued-sarahsaurus.glitch.me/blogs/${data?.id}`,data)
      .then(res =>{
    return res.data
      }) // Provide your API URL
      return req
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network error"
      ); // Handle errors
    }
  }
);
export const postUsers = createAsyncThunk(
  "postuser", // Action type as a string
  async (data, { rejectWithValue }) => {
    try {
      const req = await axios.post(`https://forested-subdued-sarahsaurus.glitch.me/blogs`, data); // API URL aur data
      return req.data; // Response data return karen
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Network error"
      ); // Handle errors
    }
  }
);

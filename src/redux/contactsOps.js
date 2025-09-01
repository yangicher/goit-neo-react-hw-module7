import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://68b57a14e5dc090291af29ee.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("/");
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkApi) => {
    try {
      const { data } = await axios.post("/", contact);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`/${id}`);
      return data.id;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

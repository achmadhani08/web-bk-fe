import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import { urlAPI } from "../../../data/fixData";

export const getPrestasis = createAsyncThunk(
	"prestasis/getPrestasis",
	async () => {
		// const response = await axios.get("http://localhost:3005/top-prestasi"); // Mock API
		const response = await axios.get(`${urlAPI.penghargaan}/top-prestasi`); // Laravel API
		return response.data.data;
	}
);

export const newPrestasis = createAsyncThunk(
	"prestasis/newPrestasis",
	async (request) => {
		const response = await axios.post(
			`${urlAPI.penghargaan}/tambah-prestasi`,
			request,
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					Accept: "application/x-www-form-urlencoded, text-plain, */*",
					"X-Requested-With": "XMLHttpRequest",
					// "X-CSRF-TOKEN": token,
				},
			}
			// {
			// 	headers: {
			// 		"Content-Type": "application/x-www-form-urlencoded",
			// 	},
			// }
		); // Laravel API
		return response.data;
	}
);

export const updatePrestasis = createAsyncThunk(
	"prestasis/updatePrestasis",
	async (request, id) => {
		const response = await axios.put(
			`${urlAPI.penghargaan}/${id}/edit-prestasi`,
			request,
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					Accept: "application/x-www-form-urlencoded, text-plain, */*",
					"X-Requested-With": "XMLHttpRequest",
					// "X-CSRF-TOKEN": token,
				},
			}
			// {
			// 	headers: {
			// 		"Content-Type": "application/x-www-form-urlencoded",
			// 	},
			// }
		); // Laravel API
		return response.data;
	}
);

export const deletePrestasis = createAsyncThunk(
	"prestasis/deletePrestasis",
	async (request, id) => {
		const response = await axios.put(
			`${urlAPI.penghargaan}/${id}/hapus-prestasi`,
			request,
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					Accept: "application/x-www-form-urlencoded, text-plain, */*",
					"X-Requested-With": "XMLHttpRequest",
				},
			}
		); // Laravel API
		return response.data;
	}
);

const prestasiEntity = createEntityAdapter({
	selectId: (prestasi) => prestasi.id,
});

const prestasiSlice = createSlice({
	name: "prestasi",
	initialState: prestasiEntity.getInitialState(),
	extraReducers: {
		[getPrestasis.fulfilled]: (state, action) => {
			prestasiEntity.setAll(state, action.payload);
		},
		[newPrestasis.fulfilled]: (state, action) => {
			prestasiEntity.addOne(state, action.payload);
		},
		[updatePrestasis.fulfilled]: (state, action) => {
			prestasiEntity.updateOne(state, action.payload);
		},
		[deletePrestasis.fulfilled]: (state, action) => {
			prestasiEntity.removeOne(state, action.payload);
		},
	},
});

export const prestasiSelectors = prestasiEntity.getSelectors(
	(state) => state.prestasi
);
export default prestasiSlice.reducer;

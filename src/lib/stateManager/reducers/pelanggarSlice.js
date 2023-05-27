import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import { urlAPI } from "../../../data/fixData";

export const getPelanggars = createAsyncThunk(
	"pelanggars/getPelanggars",
	async () => {
		// const response = await axios.get("http://localhost:3005/top-pelanggar"); // Mock API
		const response = await axios.get(`${urlAPI.pelanggaran}/top-pelanggar`); // Laravel API
		return response.data.data;
	}
);

export const newPelanggars = createAsyncThunk(
	"pelanggars/postPelanggars",
	async ({ request }) => {
		const response = await axios.post(
			`${urlAPI.pelanggaran}/tambah-pelanggar`,
			{ request },
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					Accept: "application/x-www-form-urlencoded, text-plain, */*",
					"X-Requested-With": "XMLHttpRequest",
				},
			}
		); // Laravel API
		console.log(request, "Hit API");
		return response.data;
	}
);

export const updatePelanggars = createAsyncThunk(
	"pelanggars/updatePelanggars",
	async (request, id) => {
		const response = await axios.put(
			`${urlAPI.pelanggaran}/${id}/edit-pelanggar`,
			request,
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					Accept: "application/x-www-form-urlencoded, text-plain, */*",
					"X-Requested-With": "XMLHttpRequest",
				},
			}
		); // Laravel API
		console.log(request, "Hit API");
		return response.data;
	}
);

export const deletePelanggars = createAsyncThunk(
	"pelanggars/deletePelanggars",
	async (request, id) => {
		const response = await axios.delete(
			`${urlAPI.pelanggaran}/${id}/hapus-pelanggar`,
			request,
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					Accept: "application/x-www-form-urlencoded, text-plain, */*",
					"X-Requested-With": "XMLHttpRequest",
				},
			}
		); // Laravel API
		console.log(request, "Hit API");
		return response.data;
	}
);

const pelanggarEntity = createEntityAdapter({
	selectId: (pelanggar) => pelanggar.id,
});

const pelanggarSlice = createSlice({
	name: "pelanggar",
	initialState: pelanggarEntity.getInitialState(),
	extraReducers: {
		[getPelanggars.fulfilled]: (state, action) => {
			pelanggarEntity.setAll(state, action.payload);
		},
		[newPelanggars.fulfilled]: (state, action) => {
			pelanggarEntity.addOne(state, action.payload);
		},
		[updatePelanggars.fulfilled]: (state, action) => {
			pelanggarEntity.updateOne(state, action.payload);
		},
		[deletePelanggars.fulfilled]: (state, action) => {
			pelanggarEntity.removeOne(state, action.payload);
		},
	},
});

export const pelanggarSelectors = pelanggarEntity.getSelectors(
	(state) => state.pelanggar
);

export default pelanggarSlice.reducer;

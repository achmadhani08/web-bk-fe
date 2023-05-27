import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import { urlAPI } from "../../../data/fixData";

export const getListPelanggarans = createAsyncThunk(
	"listPelanggarans/getListPelanggarans",
	async () => {
		// const response = await axios.get("http://localhost:3005/list-pelanggaran"); // Mock API
		const response = await axios.get(
			`${urlAPI.pelanggaran}/list`
		); // Laravel API
		return response.data.data;
	}
);

const listPelanggaranEntity = createEntityAdapter({
	selectId: (listPelanggaran) => listPelanggaran.id,
});

const listPelanggaranSlice = createSlice({
	name: "listPelanggaran",
	initialState: listPelanggaranEntity.getInitialState(),
	extraReducers: {
		[getListPelanggarans.fulfilled]: (state, action) => {
			listPelanggaranEntity.setAll(state, action.payload);
		},
	},
});

export const listPelanggaranSelectors = listPelanggaranEntity.getSelectors(
	(state) => state.listPelanggaran
);
export default listPelanggaranSlice.reducer;

import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getListPelanggarans = createAsyncThunk(
	"listPelanggarans/getListPelanggarans",
	async () => {
		// const response = await axios.get("http://localhost:3005/list-pelanggaran"); // Mock API
		const response = await axios.get(
			"http://127.0.0.1:8000/api/list-pelanggaran"
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

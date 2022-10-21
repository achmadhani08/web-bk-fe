import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getListPenghargaans = createAsyncThunk(
	"listPenghargaans/getListPenghargaans",
	async () => {
		const response = await axios.get("http://localhost:3005/list-penghargaan"); // Mock API
		// const response = await axios.get(
		// 	"http://127.0.0.1:8000/api/list-penghargaan"
		// ); // Laravel API
		return response.data.data;
	}
);

const listPenghargaanEntity = createEntityAdapter({
	selectId: (listPenghargaan) => listPenghargaan.id,
});

const listPenghargaanSlice = createSlice({
	name: "listPenghargaan",
	initialState: listPenghargaanEntity.getInitialState(),
	extraReducers: {
		[getListPenghargaans.fulfilled]: (state, action) => {
			listPenghargaanEntity.setAll(state, action.payload);
		},
	},
});

export const listPenghargaanSelectors = listPenghargaanEntity.getSelectors(
	(state) => state.listPenghargaan
);
export default listPenghargaanSlice.reducer;

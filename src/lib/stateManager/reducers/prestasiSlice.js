import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getPrestasis = createAsyncThunk(
	"prestasis/getPrestasis",
	async () => {
		const response = await axios.get("http://localhost:3005/top-prestasi"); // Mock API
		// const response = await axios.get("http://127.0.0.1:8000/api/top-prestasi"); // Laravel API
		return response.data.data;
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
	},
});

export const prestasiSelectors = prestasiEntity.getSelectors(
	(state) => state.prestasi
);
export default prestasiSlice.reducer;

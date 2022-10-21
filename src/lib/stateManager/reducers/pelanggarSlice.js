import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getPelanggars = createAsyncThunk(
	"pelanggars/getPelanggars",
	async () => {
		const response = await axios.get("http://localhost:3005/top-pelanggar"); // Mock API
		// const response = await axios.get("http://127.0.0.1:8000/api/top-pelanggar"); // Laravel API
		return response.data.data;
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
	},
});

export const pelanggarSelectors = pelanggarEntity.getSelectors(
	(state) => state.pelanggar
);
export default pelanggarSlice.reducer;

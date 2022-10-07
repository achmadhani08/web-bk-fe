import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getPrestasis = createAsyncThunk(
	"prestasis/getPrestasis",
	async () => {
		const response = await axios.get("http://localhost:3004/top-prestasi");
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
	},
});

export const prestasiSelectors = prestasiEntity.getSelectors(
	(state) => state.prestasi
);
export default prestasiSlice.reducer;

import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getPelanggars = createAsyncThunk(
	"pelanggars/getPelanggars",
	async () => {
		const response = await axios.get("http://localhost:3004/top-pelanggar");
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
	},
});

export const pelanggarSelectors = pelanggarEntity.getSelectors(
	(state) => state.pelanggar
);
export default pelanggarSlice.reducer;

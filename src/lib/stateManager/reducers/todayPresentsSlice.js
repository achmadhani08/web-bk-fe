import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getTodayPresents = createAsyncThunk(
	"todayPresents/getTodayPresents",
	async () => {
		const response = await axios.get("http://localhost:3005/today-presents"); // Mock API
		return response.data.data;
	}
);

const todayPresentsEntity = createEntityAdapter({
	selectId: (presents) => presents.id,
});

const todayPresentsSlice = createSlice({
	name: "todayPresents",
	initialState: todayPresentsEntity.getInitialState(),
	extraReducers: {
		[getTodayPresents.fulfilled]: (state, action) => {
			todayPresentsEntity.setAll(state, action.payload);
		},
	},
});

export const todayPresentsSelectors = todayPresentsEntity.getSelectors(
	(state) => state.todayPresents
);
export default todayPresentsSlice.reducer;

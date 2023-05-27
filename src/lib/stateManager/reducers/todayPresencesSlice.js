import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import { urlAPI } from "../../../data/fixData";

export const getTodayPresences = createAsyncThunk(
	"todayPresences/getTodayPresences",
	async () => {
		// const response = await axios.get("http://localhost:3005/today-presents"); // Mock API
		const response = await axios.get(`${urlAPI.absen}/hari`); // Laravel API
		return response.data.data;
	}
);

const todayPresencesEntity = createEntityAdapter({
	selectId: (presents) => presents.keterangan,
});

const todayPresencesSlice = createSlice({
	name: "todayPresences",
	initialState: todayPresencesEntity.getInitialState(),
	extraReducers: {
		[getTodayPresences.fulfilled]: (state, action) => {
			todayPresencesEntity.setAll(state, action.payload);
		},
	},
});

export const todayPresencesSelectors = todayPresencesEntity.getSelectors(
	(state) => state.todayPresences
);
export default todayPresencesSlice.reducer;

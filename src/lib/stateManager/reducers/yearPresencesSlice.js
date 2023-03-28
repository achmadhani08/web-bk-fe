import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getYearPresences = createAsyncThunk(
	"yearPresences/getYearPresences",
	async (request) => {
		let kelas = request.kelas;
		let jurusan = request.jurusan;
		let tahun = request.tahun;
		console.log(request);
		// const response = await axios.get("http://localhost:3005/semester-presents"); // Mock API
		const response = await axios.get(
			`http://127.0.0.1:8000/api/absen/tahun/${tahun}/${kelas}-${jurusan}`
		); // Laravel API
		console.log(response.data.data);
		return response.data.data;
	}
);

const yearPresencesEntity = createEntityAdapter({
	selectId: (presents) => presents.id,
});

const yearPresencesSlice = createSlice({
	name: "yearPresences",
	initialState: yearPresencesEntity.getInitialState(),
	extraReducers: {
		[getYearPresences.fulfilled]: (state, action) => {
			yearPresencesEntity.setAll(state, action.payload);
		},
	},
});

export const yearPresencesSelectors = yearPresencesEntity.getSelectors(
	(state) => state.yearPresences
);
export default yearPresencesSlice.reducer;

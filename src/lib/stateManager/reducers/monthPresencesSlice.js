import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getMonthPresences = createAsyncThunk(
	"monthPresences/getMonthPresences",
	async (request) => {
		let bulan = request.bulan;
		let kelas = request.kelas;
		let jurusan = request.jurusan;
		let tahun = request.tahun;
		console.log(request);

		// const response = await axios.get("http://localhost:3005/semester-presents"); // Mock API
		const response = await axios.get(
			`http://127.0.0.1:8000/api/absen/bulan/${bulan}/${tahun}/${kelas}-${jurusan}`
		); // Laravel API
		console.log(response.data.data);
		return response.data.data;
	}
);

const monthPresencesEntity = createEntityAdapter({
	selectId: (presents) => presents.id,
});

const monthPresencesSlice = createSlice({
	name: "monthPresences",
	initialState: monthPresencesEntity.getInitialState(),
	extraReducers: {
		[getMonthPresences.fulfilled]: (state, action) => {
			monthPresencesEntity.setAll(state, action.payload);
		},
	},
});

export const monthPresencesSelectors = monthPresencesEntity.getSelectors(
	(state) => state.monthPresences
);
export default monthPresencesSlice.reducer;

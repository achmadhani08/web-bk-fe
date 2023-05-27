import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import { urlAPI } from "../../../data/fixData";

export const getSemesterPresences = createAsyncThunk(
	"semesterPresences/getSemesterPresences",
	async (request) => {
		let semester = request.semester;
		let kelas = request.kelas;
		let jurusan = request.jurusan;
		let tahun = request.tahun;
		console.log(request);

		// const response = await axios.get("http://localhost:3005/semester-presents"); // Mock API
		const response = await axios.get(
			`${urlAPI.absen}/semester/${semester}/${tahun}/${kelas}-${jurusan}`
		); // Laravel API
		console.log(response.data.data);
		return response.data.data;
	}
);

const semesterPresencesEntity = createEntityAdapter({
	selectId: (presents) => presents.id,
});

const semesterPresencesSlice = createSlice({
	name: "semesterPresences",
	initialState: semesterPresencesEntity.getInitialState(),
	extraReducers: {
		[getSemesterPresences.fulfilled]: (state, action) => {
			semesterPresencesEntity.setAll(state, action.payload);
		},
	},
});

export const semesterPresencesSelectors = semesterPresencesEntity.getSelectors(
	(state) => state.semesterPresences
);
export default semesterPresencesSlice.reducer;

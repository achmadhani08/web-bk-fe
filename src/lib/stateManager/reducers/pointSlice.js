import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getPointSiswas = createAsyncThunk(
	"point/getPointSiswas",
	async (nis) => {
		// const response = await axios.get("http://localhost:3005/top-prestasi"); // Mock API
		const response = await axios.get(
			`http://127.0.0.1:8000/api/siswa/point/${nis}`
		); // Laravel API
		return response.data.data;
	}
);

export const getPointKelas = createAsyncThunk(
	"point/getPointKelas",
	async (kelas, jurusan) => {
		// const response = await axios.get("http://localhost:3005/top-prestasi"); // Mock API
		const response = await axios.get(
			`http://127.0.0.1:8000/api/point/${kelas}-${jurusan}`
		); // Laravel API
		return response.data.data;
	}
);

const pointEntity = createEntityAdapter({
	selectId: (point) => point.id,
});

const pointSlice = createSlice({
	name: "point",
	initialState: pointEntity.getInitialState(),
	extraReducers: {
		[getPointSiswas.fulfilled]: (state, action) => {
			pointEntity.setAll(state, action.payload);
		},
		[getPointKelas.fulfilled]: (state, action) => {
			pointEntity.setAll(state, action.payload);
		},
	},
});

export const pointSelectors = pointEntity.getSelectors((state) => state.point);
export default pointSlice.reducer;

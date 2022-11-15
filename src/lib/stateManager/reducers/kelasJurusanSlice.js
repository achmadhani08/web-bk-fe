import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getKelasJurusans = createAsyncThunk(
	"kelasJurusan/getKelasJurusans",
	async () => {
		// const response = await axios.get("http://localhost:3005/kelas-jurusan"); // Mock API
		const response = await axios.get("http://127.0.0.1:8000/api/kelas"); // Laravel API
		return response.data.data;
	}
);

const kelasJurusanEntity = createEntityAdapter({
	selectId: (kelasJurusan) => kelasJurusan.id,
});

const kelasJurusanSlice = createSlice({
	name: "kelasJurusan",
	initialState: kelasJurusanEntity.getInitialState(),
	extraReducers: {
		[getKelasJurusans.fulfilled]: (state, action) => {
			kelasJurusanEntity.setAll(state, action.payload);
		},
	},
});

export const kelasJurusanSelectors = kelasJurusanEntity.getSelectors(
	(state) => state.kelasJurusan
);
export default kelasJurusanSlice.reducer;

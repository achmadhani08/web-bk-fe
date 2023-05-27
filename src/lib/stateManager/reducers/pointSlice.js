import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import { urlAPI } from "../../../data/fixData";

export const getPointSiswas = createAsyncThunk(
	"point/getPointSiswas",
	async (request) => {
		let nis = request.nis;

		const response = await axios.get(
			`${urlAPI.point}/siswa/${nis}`
		); // Laravel API
		return response.data.data;
	}
);

const pointSiswaEntity = createEntityAdapter({
	selectId: (pointSiswa) => pointSiswa.id,
});

const pointSiswaSlice = createSlice({
	name: "pointSiswa",
	initialState: pointSiswaEntity.getInitialState(),
	extraReducers: {
		[getPointSiswas.fulfilled]: (state, action) => {
			pointSiswaEntity.setAll(state, action.payload);
		},
	},
});

export const pointSiswaSelectors = pointSiswaEntity.getSelectors((state) => state.pointSiswa);
export default pointSiswaSlice.reducer;

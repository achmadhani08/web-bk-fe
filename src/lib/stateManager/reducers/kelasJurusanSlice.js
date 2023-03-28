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

export const newKelasJurusans = createAsyncThunk(
	"kelasJurusan/postKelasJurusans",
	async (request) => {
		const response = await axios.post(
			"http://127.0.0.1:8000/api/tambah-kelas",
			request
			// {
			// 	headers: {
			// 		"Content-Type": "application/x-www-form-urlencoded",
			// 		Accept: "application/x-www-form-urlencoded, text-plain, */*",
			// 		"X-Requested-With": "XMLHttpRequest",
			// 		// "X-CSRF-TOKEN": token,
			// 	},
			// }
		); // Laravel API
		console.log(request, "Hit API");
		return response.data;
	}
);

export const updateKelasJurusans = createAsyncThunk(
	"kelasJurusan/updateKelasJurusans",
	async (request) => {
		let id = request?.id;
		const response = await axios.put(
			`http://127.0.0.1:8000/api/kelas/${id}/edit-kelas`,
			{ request },
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					Accept: "application/x-www-form-urlencoded, text-plain, */*",
					"X-Requested-With": "XMLHttpRequest",
					// "X-CSRF-TOKEN": token,
				},
			}
			// {
			// 	headers: {
			// 		"Content-Type": "application/x-www-form-urlencoded",
			// 	},
			// }
		); // Laravel API
		console.log(request, "Hit API");
		return response.data;
	}
);

export const deleteKelasJurusans = createAsyncThunk(
	"kelasJurusan/deleteKelasJurusans",
	async (request) => {
		let id = request?.id;
		const response = await axios.delete(
			`http://127.0.0.1:8000/api/kelas/${id}/hapus-kelas`,
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					Accept: "application/x-www-form-urlencoded, text-plain, */*",
					"X-Requested-With": "XMLHttpRequest",
					// "X-CSRF-TOKEN": token,
				},
			}
			// {
			// 	headers: {
			// 		"Content-Type": "application/x-www-form-urlencoded",
			// 	},
			// }
		); // Laravel API
		console.log(request, "Hit API Delete Kelas");
		return response.data;
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
		[newKelasJurusans.fulfilled]: (state, action) => {
			kelasJurusanEntity.addOne(state, action.payload);
		},
		[updateKelasJurusans.fulfilled]: (state, action) => {
			kelasJurusanEntity.updateOne(state, action.payload);
		},
		[deleteKelasJurusans.fulfilled]: (state, action) => {
			kelasJurusanEntity.removeOne(state, action.payload);
		},
	},
});

export const kelasJurusanSelectors = kelasJurusanEntity.getSelectors(
	(state) => state.kelasJurusan
);
export default kelasJurusanSlice.reducer;

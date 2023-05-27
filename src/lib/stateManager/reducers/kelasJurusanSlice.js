import { toast } from 'react-toastify';
import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import { urlAPI } from "../../../data/fixData";

export const getKelasJurusans = createAsyncThunk(
	"kelasJurusan/getKelasJurusans",
	async (setLoading) => {
		// const response = await axios.get("http://localhost:3005/kelas-jurusan"); // Mock API
		setLoading(true)
		const response = await axios.get(`${urlAPI.kelas}/list`); // Laravel API
		setLoading(false)
		return response.data.data;
	}
);

export const newKelasJurusans = createAsyncThunk(
	"kelasJurusan/postKelasJurusans",
	async (request) => {
		const response = await axios.post(
			`${urlAPI.kelas}/tambah-kelas`,
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

		if (response?.data?.status === 'success') {
			toast.success('Berhasil menambah data kelas');
		} else toast.error('Gagal menambah data kelas');
		return response.data;
	}
);

export const updateKelasJurusans = createAsyncThunk(
	"kelasJurusan/updateKelasJurusans",
	async (request) => {
		let id = request?.id;
		const response = await axios.put(
			`${urlAPI.kelas}/${id}/edit-kelas`,
			{
				kelas: request.kelas,
				jurusan: request.jurusan
			}
			// {
			// 	headers: {
			// 		"Content-Type": "application/x-www-form-urlencoded",
			// 		Accept: "application/x-www-form-urlencoded, text-plain, */*",
			// 		"X-Requested-With": "XMLHttpRequest",
			// 		// "X-CSRF-TOKEN": token,
			// 	},
			// }
			// {
			// 	headers: {
			// 		"Content-Type": "application/x-www-form-urlencoded",
			// 	},
			// }
		); // Laravel API

		if (response?.data?.status === 'success') {
			toast.info('Berhasil mengubah data kelas');
		} else toast.error('Gagal mengubah data kelas');
		return response.data;
	}
);

export const deleteKelasJurusans = createAsyncThunk(
	"kelasJurusan/deleteKelasJurusans",
	async (request) => {
		let id = request?.id;
		const response = await axios.delete(
			`${urlAPI.kelas}/${id}/hapus-kelas`
			// {
			// 	headers: {
			// 		"Content-Type": "application/x-www-form-urlencoded",
			// 		Accept: "application/x-www-form-urlencoded, text-plain, */*",
			// 		"X-Requested-With": "XMLHttpRequest",
			// 		// "X-CSRF-TOKEN": token,
			// 	},
			// }
			// {
			// 	headers: {
			// 		"Content-Type": "application/x-www-form-urlencoded",
			// 	},
			// }
		); // Laravel API

		if (response?.data?.status === 'success') {
			toast.success('Berhasil menghapus data kelas');
		} else toast.error('Gagal menghapus data kelas');
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

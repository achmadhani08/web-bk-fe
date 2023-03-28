import { configureStore } from "@reduxjs/toolkit";

import prestasiReducer from "./reducers/prestasiSlice";
import pelanggarReducer from "./reducers/pelanggarSlice";
import pointReducer from "./reducers/pointSlice";
import todayPresencesReducer from "./reducers/todayPresencesSlice";
import semesterPresencesReducer from "./reducers/semesterPresencesSlice";
import yearPresencesReducer from "./reducers/yearPresencesSlice";
import listPelanggaranReducer from "./reducers/listPelanggaranSlice";
import listPenghargaanReducer from "./reducers/listPenghargaanSlice";
import kelasJurusanReducer from "./reducers/kelasJurusanSlice";

export const store = configureStore({
	reducer: {
		prestasi: prestasiReducer,
		pelanggar: pelanggarReducer,
		point: pointReducer,
		todayPresences: todayPresencesReducer,
		semesterPresences: semesterPresencesReducer,
		yearPresences: yearPresencesReducer,
		listPelanggaran: listPelanggaranReducer,
		listPenghargaan: listPenghargaanReducer,
		kelasJurusan: kelasJurusanReducer,
	},
});

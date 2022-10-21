import { configureStore } from "@reduxjs/toolkit";

import prestasiReducer from "./reducers/prestasiSlice";
import pelanggarReducer from "./reducers/pelanggarSlice";
import todayPresentsReducer from "./reducers/todayPresentsSlice";
import listPelanggaranReducer from "./reducers/listPelanggaranSlice";
import listPenghargaanReducer from "./reducers/listPenghargaanSlice";

export const store = configureStore({
	reducer: {
		prestasi: prestasiReducer,
		pelanggar: pelanggarReducer,
		todayPresents: todayPresentsReducer,
		listPelanggaran: listPelanggaranReducer,
		listPenghargaan: listPenghargaanReducer,
	},
});

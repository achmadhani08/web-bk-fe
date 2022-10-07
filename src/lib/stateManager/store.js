import { configureStore } from "@reduxjs/toolkit";
import prestasiReducer from "./reducers/prestasiSlice";
import pelanggarReducer from "./reducers/pelanggarSlice";

export const store = configureStore({
	reducer: {
		prestasi: prestasiReducer,
		pelanggar: pelanggarReducer,
	},
});

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

import Dashboard from "../pages/dashboard/Dashboard";
import ListPoint from "../pages/listpoint/ListPoint";

// Absensi
import RekapanAbsensi from "../pages/absensi/RekapanAbsensi";

// Point
import RekapanPoint from "../pages/point/RekapanPoint";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<Dashboard />} />
				<Route path="/list-point" exact element={<ListPoint />} />

				<Route path="/login" exact element={<LoginPage />} />
				<Route path="/register" exact element={<RegisterPage />} />

				<Route path="/rekapan-absensi" exact element={<RekapanAbsensi />} />

				<Route path="/rekapan-point" exact element={<RekapanPoint />} />
			</Routes>
		</BrowserRouter>
	);
}

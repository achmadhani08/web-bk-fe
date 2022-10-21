import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

import Dashboard from "../pages/Dashboard";
import ListPoint from "../pages/ListPoint";

// Absensi
import RekapAbsenChoise from "../pages/absensi/RekapAbsenChoise";
import RekapAbsenperBulan from "../pages/absensi/RekapAbsenperBulan";
import RekapAbsenperSemester from "../pages/absensi/RekapAbsenperSemester";
import RekapAbsenperTahun from "../pages/absensi/RekapAbsenperTahun";

// Point
import RekapPointChoise from "../pages/point/RekapPointChoice";
import RekapPointKelasperSemester from "../pages/point/RekapPointKelasperSemester";
import RincianPointKelasperSemester from "../pages/point/RincianPointKelasperSemester";
import RekapPointSiswa from "../pages/point/RekapPointSiswa";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<Dashboard />} />
				<Route path="/list-point" exact element={<ListPoint />} />

				<Route path="/login" exact element={<LoginPage />} />
				<Route path="/register" exact element={<RegisterPage />} />

				<Route path="/rekapan-absensi">
					<Route index exact element={<RekapAbsenChoise />} />
					<Route
						path="bulan/:bulan/:tahun/:kelas"
						element={<RekapAbsenperBulan />}
					/>
					<Route
						path="semester/:semester/:tahun/:kelas"
						element={<RekapAbsenperSemester />}
					/>
					<Route path="tahun/:tahun/:kelas" element={<RekapAbsenperTahun />} />
				</Route>

				<Route path="/rekapan-point">
					<Route index exact element={<RekapPointChoise />} />
					<Route
						path="semester/:semester/:tahun/:kelas"
						element={<RekapPointKelasperSemester />}
					/>
					<Route
						path="semester/:semester/:tahun/:kelas/detail"
						element={<RincianPointKelasperSemester />}
					/>
					<Route path=":siswa/:kelas" element={<RekapPointSiswa />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

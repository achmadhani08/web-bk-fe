import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";

import Dashboard from "../pages/Dashboard";
import ListPoint from "../pages/ListPoint";

// Absensi
import RekapAbsenperBulan from "../pages/absensi/RekapAbsenperBulan";
import RekapAbsenperSemester from "../pages/absensi/RekapAbsenperSemester";
import RekapAbsenperTahun from "../pages/absensi/RekapAbsenperTahun";

// Point
import RekapPointKelasperSemester from "../pages/point/RekapPointKelasperSemester";
import RincianPointKelasperSemester from "../pages/point/RincianPointKelasperSemester";
import RekapPointSiswa from "../pages/point/RekapPointSiswa";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Dashboard />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="list-point" element={<ListPoint />} />
					<Route path="rekapan-absensi">
						<Route index path="bulan/:bulan" element={<RekapAbsenperBulan />} />
						<Route
							path="semester/:semester"
							element={<RekapAbsenperSemester />}
						/>
						<Route path="tahun/:tahun" element={<RekapAbsenperTahun />} />
					</Route>
					<Route path="rekapan-point">
						<Route
							index
							path="semester/:semester/:kelas"
							element={<RekapPointKelasperSemester />}
						/>
						<Route
							path="semester/:semester/:kelas/detail"
							element={<RincianPointKelasperSemester />}
						/>
						<Route path=":siswa/:kelas" element={<RekapPointSiswa />} />
					</Route>
					<Route path="login" element={<LoginPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;

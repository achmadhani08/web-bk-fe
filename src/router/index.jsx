import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loading from "../components/Loading";
import PrivateRoute from "../components/PrivateRoute";

const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const ListPoint = lazy(() => import("../pages/listPoint/ListPoint"));

const RekapanAbsensi = lazy(() => import("../pages/absensi/RekapanAbsensi"));
const RekapanPoint = lazy(() => import("../pages/point/RekapanPoint"));

const DataKelas = lazy(() => import("../pages/masterData/DataKelas"));
const DataSiswa = lazy(() => import("../pages/masterData/DataSiswa"));

const RegisterPage = lazy(() => import("../pages/auth/RegisterPage"));
const LoginPage = lazy(() => import("../pages/auth/LoginPage"));

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/dashboard"
					exact
					element={
						<Suspense fallback={<Loading />}>
							<Dashboard />
						</Suspense>
					}
				/>

				<Route
					path="/list-point"
					exact
					element={
						<Suspense fallback={<Loading />}>
							<ListPoint />
						</Suspense>
					}
				/>

				<Route
					path="/login"
					exact
					element={
						<Suspense fallback={<Loading />}>
							<LoginPage />
						</Suspense>
					}
				/>

				<Route
					path="/rekapan-absensi"
					exact
					element={
						<Suspense fallback={<Loading />}>
							<RekapanAbsensi />
						</Suspense>
					}
				/>

				<Route
					path="/rekapan-point"
					exact
					element={
						<Suspense fallback={<Loading />}>
							<RekapanPoint />
						</Suspense>
					}
				/>

				<Route
					path="/register"
					exact
					element={
						<Suspense fallback={<Loading />}>
							<PrivateRoute>
								<RegisterPage />
							</PrivateRoute>
						</Suspense>
					}
				/>
				<Route
					path="/data-kelas"
					exact
					element={
						<Suspense fallback={<Loading />}>
							<PrivateRoute>
								<DataKelas />
							</PrivateRoute>
						</Suspense>
					}
				/>
				<Route
					path="/data-siswa"
					exact
					element={
						<Suspense fallback={<Loading />}>
							<PrivateRoute>
								<DataSiswa />
							</PrivateRoute>
						</Suspense>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

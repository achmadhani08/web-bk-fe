import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	getPrestasis,
	prestasiSelectors,
} from "../lib/stateManager/reducers/prestasiSlice";
import {
	getPelanggars,
	pelanggarSelectors,
} from "../lib/stateManager/reducers/pelanggarSlice";

import TableAchievement from "../components/TableAchievement";
import Navbar from "../components/Navbar";
import CardsDashboard from "../components/CardsDashboard";

const noData = [
	{
		id: 1,
		nama: "Tidak ada data siswa",
		kelas: "Tidak ada data kelas",
		jurusan: "",
		point: "Tidak ada data point",
	},
	{
		id: 2,
		nama: "Tidak ada data siswa",
		kelas: "Tidak ada data kelas",
		jurusan: "",
		point: "Tidak ada data point",
	},
	{
		id: 3,
		nama: "Tidak ada data siswa",
		kelas: "Tidak ada data kelas",
		jurusan: "",
		point: "Tidak ada data point",
	},
	{
		id: 4,
		nama: "Tidak ada data siswa",
		kelas: "Tidak ada data kelas",
		jurusan: "",
		point: "Tidak ada data point",
	},
	{
		id: 5,
		nama: "Tidak ada data siswa",
		kelas: "Tidak ada data kelas",
		jurusan: "",
		point: "Tidak ada data point",
	},
	{
		id: 6,
		nama: "Tidak ada data siswa",
		kelas: "Tidak ada data kelas",
		jurusan: "",
		point: "Tidak ada data point",
	},
	{
		id: 7,
		nama: "Tidak ada data siswa",
		kelas: "Tidak ada data kelas",
		jurusan: "",
		point: "Tidak ada data point",
	},
	{
		id: 8,
		nama: "Tidak ada data siswa",
		kelas: "Tidak ada data kelas",
		jurusan: "",
		point: "Tidak ada data point",
	},
	{
		id: 9,
		nama: "Tidak ada data siswa",
		kelas: "Tidak ada data kelas",
		jurusan: "",
		point: "Tidak ada data point",
	},
	{
		id: 10,
		nama: "Tidak ada data siswa",
		kelas: "Tidak ada data kelas",
		jurusan: "",
		point: "Tidak ada data point",
	},
];

export default function Dashboard() {
	const dispatch = useDispatch();
	const prestasis = useSelector(prestasiSelectors.selectAll);
	const pelanggars = useSelector(pelanggarSelectors.selectAll);

	useEffect(() => {
		dispatch(getPrestasis());
		dispatch(getPelanggars());
	}, [dispatch]);

	return (
		<>
			<Navbar />
			<div className="bg-white flex flex-col w-full h-full">
				<div className="w-full">
					<CardsDashboard />
				</div>

				<div className="w-full flex">
					<div className="w-1/2 pt-2 pb-6 px-6">
						<div className="bg-green-500 rounded-2xl shadow-xl">
							<div className="py-2 bg-green-600 rounded-t-2xl">
								<h2 className="uppercase text-white font-semibold justify-center flex">
									Penghargaan
								</h2>
							</div>

							{prestasis.length !== 0 ? (
								<TableAchievement
									datas={prestasis}
									borderColor="border-green-600"
								/>
							) : (
								<TableAchievement
									datas={noData}
									borderColor="border-green-600"
								/>
							)}
						</div>
					</div>

					<div className="w-1/2 pt-2 pb-6 px-6">
						<div className="bg-red-500 rounded-2xl shadow-xl">
							<div className="py-2 bg-red-600 rounded-t-2xl">
								<h2 className="uppercase text-white font-semibold justify-center flex">
									Pelanggaran
								</h2>
							</div>

							{pelanggars.length !== 0 ? (
								<TableAchievement
									datas={pelanggars}
									borderColor="border-red-600"
								/>
							) : (
								<TableAchievement datas={noData} borderColor="border-red-600" />
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

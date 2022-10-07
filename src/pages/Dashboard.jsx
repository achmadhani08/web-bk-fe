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
		<div className="bg-white flex h-full">
			<div className="w-1/2 py-2 px-6">
				<div className="py-2 bg-green-600 rounded-2xl mb-4">
					<h2 className="uppercase text-white font-semibold justify-center flex">
						Penghargaan
					</h2>
				</div>

				{prestasis.length != 0 ? (
					<TableAchievement datas={prestasis} color="green-500" />
				) : (
					<TableAchievement datas={noData} color="green-500" />
				)}
			</div>

			<div className="w-1/2 py-2 px-6">
				<div className="py-2 bg-red-700 rounded-2xl mb-4">
					<h2 className="uppercase text-white font-semibold justify-center flex">
						Pelanggaran
					</h2>
				</div>

				{pelanggars.length != 0 ? (
					<TableAchievement datas={pelanggars} color="red-600" />
				) : (
					<TableAchievement datas={noData} color="red-600" />
				)}
			</div>
		</div>
	);
}

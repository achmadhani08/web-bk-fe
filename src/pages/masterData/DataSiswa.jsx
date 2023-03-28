import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../../components/Navbar";
import Filter from "./Filter";
import TableSiswa from "./TableSiswa";

import { dataSiswa } from "../../data/dummy/dummySiswa";

import {
	getKelasJurusans,
	kelasJurusanSelectors,
} from "../../lib/stateManager/reducers/kelasJurusanSlice";

export default function DataSiswa() {
	const dispatch = useDispatch();
	const kelasJurusans = useSelector(kelasJurusanSelectors.selectAll);

	useEffect(() => {
		dispatch(getKelasJurusans());
	}, [dispatch]);

	const [request, setRequest] = useState({
		kelas: 12,
		jurusan: "AKL1",
		tahun: "2022-2023",
	});
	return (
		<div className="min-h-screen bg-color1">
			<Navbar />
			<div className="w-full sticky top-[5.5rem] z-10">
				<Filter
					request={request}
					kelasJurusans={kelasJurusans}
					setRequest={setRequest}
				/>
			</div>
			<div className="w-full py-8 px-6">
				<TableSiswa
					datas={dataSiswa}
					title={`Data Siswa ${request.kelas} ${request.jurusan} Tahun ${request.tahun}`}
					borderColor="border-color4"
					hoverBg="bg-color2"
				/>
			</div>
		</div>
	);
}

import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import Navbar from "../../components/Navbar";
import Filter from "./Filter";
import TableRekapPointKelas from "./TableRekapPointKelas";
import TableRekapPointSiswa from "./TableRekapPointSiswa";

import { dataRekapPointKelas } from "../../data/dummy/dummyRekapPoint";
import { dataRekapPointSiswa } from "../../data/dummy/dummyRekapPoint";

import {
	getPointSiswas,
	pointSiswaSelectors,
} from "../../lib/stateManager/reducers/pointSlice";
import { getKelasJurusans, kelasJurusanSelectors } from "../../lib/stateManager/reducers/kelasJurusanSlice";
import { UserContext } from "../../App";
// import { getPointKelas } from "../../lib/stateManager/reducers/API/pointKelas";

export default function RekapanPoint() {
	const dispatch = useDispatch();
	const {setLoading} = useContext(UserContext)

	const kelasJurusans = useSelector(kelasJurusanSelectors.selectAll);
	const pointSiswa = useSelector(pointSiswaSelectors.selectAll);
	const [pointKelas, setPointKelas] = useState(null);
	const [request, setRequest] = useState({
		kelas: 12,
		jurusan: "AKL1",
		tahun: "2022-2023",
		nis: "",
	});

	const getPointKelas = async (request) => {
		let kelas = request.kelas;
		let jurusan = request.jurusan;

		try {
			await axios
				.get(`http://127.0.0.1:8000/api/point/${kelas}-${jurusan}`)
				.then((response) => {
					let result = response.data.data;
					if (result.length > 0) {
						setPointKelas(result);
					}
					setPointKelas(null);
				});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		dispatch(getKelasJurusans(setLoading));
		getPointKelas(request);
	}, []);

	useEffect(() => {
		console.log("Point Kelas", pointKelas);
	}, [pointKelas]);

	useEffect(() => {
		if (request.nis !== "" && request.nis.length >= 5) {
			dispatch(getPointSiswas(request));
		}
		getPointKelas(request);
	}, [request]);

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

			<div className="w-full py-8 px-6 flex flex-col gap-8">
				{request.nis.length >= 5 ? (
					<TableRekapPointSiswa
						datas={dataRekapPointSiswa}
						// datas={pointSiswa}
						request={request}
						hoverBg="bg-color2"
						borderColor="border-color4"
					/>
				) : (
					<TableRekapPointKelas
						datas={dataRekapPointKelas}
						// datas={pointKelas}
						request={request}
						setRequest={setRequest}
						title={`Rekapan Point Siswa/i ${request.kelas} ${request.jurusan} Tahun Ajaran ${request.tahun}`}
						hoverBg="bg-color2"
						borderColor="border-color4"
					/>
				)}
			</div>
		</div>
	);
}

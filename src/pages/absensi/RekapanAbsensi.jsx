import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../../components/Navbar";
import Filter from "./Filter";

import { TableRekapAbsenBulan } from "./TableRekapAbsenBulan";
import { TableRekapAbsenSemester } from "./TableRekapAbsenSemester";
import { TableRekapAbsenTahun } from "./TableRekapAbsenTahun";

import {
	getKelasJurusans,
	kelasJurusanSelectors,
} from "../../lib/stateManager/reducers/kelasJurusanSlice";

import { dataRekapanAbsensiBulan } from "../../data/dummy/dummyRekapAbsen";
import { dataRekapanAbsensiSemester } from "../../data/dummy/dummyRekapAbsen";
import { dataRekapanAbsensiTahun } from "../../data/dummy/dummyRekapAbsen";

export default function RekapanAbsensi() {
	const dispatch = useDispatch();
	const kelasJurusans = useSelector(kelasJurusanSelectors.selectAll);

	useEffect(() => {
		dispatch(getKelasJurusans());
	}, [dispatch]);

	let month = [
		"januari",
		"februari",
		"maret",
		"april",
		"mei",
		"juni",
		"juli",
		"agustus",
		"september",
		"oktober",
		"november",
		"desember",
	];
	let xbulan = new Date().getMonth();
	let bulan = month[xbulan];

	const [radioButton, setRadioButton] = useState("bulan");

	const [request, setRequest] = useState({
		kelas: 12,
		jurusan: "AKL1",
		bulan: bulan,
		semester: "",
		tahun: "2022-2023",
	});

	let selectedMonth = month.indexOf(request.bulan);
	// console.log(selectedMonth);

	let inputedYear;

	if (request.semester === "ganjil") {
		// console.log(request.semester.split("-"));
	}

	let lastday = function (y, m) {
		return new Date(y, m + 1, 0).getDate();
	};

	// console.log(lastday(year, selectedMonth));

	const handleRadio = (event, newValue) => {
		if (newValue === "bulan") {
			setRadioButton(newValue);
			setRequest({
				...request,
				bulan: bulan,
			});
		}
		if (newValue === "semester") {
			setRadioButton(newValue);
			setRequest({
				...request,
				semester: "ganjil",
			});
		}
		if (newValue === "tahun") {
			setRadioButton(newValue);
			setRequest({
				...request,
				bulan: "",
				semester: "",
			});
		}
		if (newValue === null) {
			return;
		}
	};

	useEffect(() => {
		if (radioButton === "bulan") {
			setRequest({
				...request,
				semester: "",
			});
		}
		if (radioButton === "semester") {
			setRequest({ ...request, bulan: "" });
		}
		if (radioButton === "tahun") {
			setRequest({
				...request,
				bulan: "",
				semester: "",
			});
		}
		console.log(kelasJurusans);
	}, [radioButton]);

	function capitalize(word) {
		return word[0].toUpperCase() + word.slice(1).toLowerCase();
	}

	return (
		<div className="min-h-screen bg-color1">
			<Navbar />

			<div className="w-full sticky top-[5.5rem] z-10">
				<Filter
					request={request}
					kelasJurusans={kelasJurusans}
					setRequest={setRequest}
					radioButton={radioButton}
					handleRadio={handleRadio}
				/>
			</div>

			<div className="w-full py-8 px-6">
				{radioButton === "bulan" ? (
					<TableRekapAbsenBulan request={request} />
				) : null}
				{radioButton === "semester" ? (
					<TableRekapAbsenSemester
						datas={dataRekapanAbsensiSemester}
						title={`Rekapan Absensi ${request.jurusan} Semester ${capitalize(
							request.semester
						)} `}
						borderColor="border-color4"
						hoverBg="bg-color2"
					/>
				) : null}
				{radioButton === "tahun" ? (
					<TableRekapAbsenTahun
						datas={dataRekapanAbsensiTahun}
						title={`Rekapan Absensi ${request.jurusan} Tahun ${request.tahun} `}
						borderColor="border-color4"
						hoverBg="bg-color2"
					/>
				) : null}
			</div>
		</div>
	);
}

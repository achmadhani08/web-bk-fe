import { useContext, useEffect, useState } from "react";
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

import {
	getSemesterPresences,
	semesterPresencesSelectors,
} from "../../lib/stateManager/reducers/semesterPresencesSlice";

import {
	getYearPresences,
	yearPresencesSelectors,
} from "../../lib/stateManager/reducers/yearPresencesSlice";

import { dataRekapanAbsensiBulan } from "../../data/dummy/dummyRekapAbsen";
import { dataRekapanAbsensiSemester } from "../../data/dummy/dummyRekapAbsen";
import { dataRekapanAbsensiTahun } from "../../data/dummy/dummyRekapAbsen";
import { TableRekapAbsenBulanAdmin } from "./TableRekapAbsenBulanAdmin";
import {
	getMonthPresences,
	monthPresencesSelectors,
} from "../../lib/stateManager/reducers/monthPresencesSlice";
import { UserContext } from "../../App";

export default function RekapanAbsensi() {
	const [authenticated, setAuthenticated] = useContext(UserContext);
	const dispatch = useDispatch();
	const kelasJurusans = useSelector(kelasJurusanSelectors.selectAll);
	const monthPresences = useSelector(monthPresencesSelectors.selectAll);
	const semesterPrecences = useSelector(semesterPresencesSelectors.selectAll);
	const yearPrecences = useSelector(yearPresencesSelectors.selectAll);

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
		jurusan: "RPL",
		bulan: bulan,
		semester: "",
		tahun: "2022-2023",
	});

	useEffect(() => {
		dispatch(getKelasJurusans());
		// dispatch(getMonthPresences(request));
	}, [dispatch]);

	useEffect(() => {
		if (request.bulan !== "") {
			const fetchMonth = setTimeout(() => {
				// dispatch(getMonthPresences(request));
				console.log("Fetch Data Month After 2 second!");
			}, 2000);
			return () => clearTimeout(fetchMonth);
		} else if (request.semester !== "") {
			const fetchSemester = setTimeout(() => {
				dispatch(getSemesterPresences(request));
				console.log("Fetch Data Semester After 2 second!");
			}, 2000);
			return () => clearTimeout(fetchSemester);
		} else if (request.semester === "" && request.bulan === "") {
			const fetchYear = setTimeout(() => {
				dispatch(getYearPresences(request));
				console.log("Fetch Data Year After 2 second!");
			}, 2000);
			return () => clearTimeout(fetchYear);
		}
	}, [request]);

	const handleRadio = (event, newValue) => {
		if (newValue === "bulan") {
			setRadioButton(newValue);
			setRequest({
				...request,
				tahun: "2022-2023",
				bulan: bulan,
			});
		}
		if (newValue === "semester") {
			setRadioButton(newValue);
			setRequest({
				...request,
				tahun: "2022-2023",
				semester: "ganjil",
				bulan: "",
			});
		}
		if (newValue === "tahun") {
			setRadioButton(newValue);
			setRequest({
				...request,
				bulan: "",
				semester: "",
				tahun: "2022",
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
		// console.log(kelasJurusans);
	}, [radioButton]);

	function capitalize(word) {
		return word[0].toUpperCase() + word.slice(1).toLowerCase();
	}

	// useEffect(() => {
	// 	console.log(semesterPrecences, "Data Semester");
	// 	console.log(yearPrecences, "Data year");
	// }, [yearPrecences, semesterPrecences]);

	const showMonthPresences = (param) => {
		switch (param) {
			case radioButton === "bulan" && authenticated.name !== null:
				return (
					<TableRekapAbsenBulanAdmin
						datas={dataRekapanAbsensiBulan}
						title={`Rekapan Absensi ${request.kelas} ${
							request.jurusan
						} Bulan ${capitalize(request.bulan)} ${request.tahun}`}
						borderColor="border-color4"
						hoverBg="bg-color2"
					/>
				);
				break;
			case radioButton === "bulan" && authenticated.name === null:
				return (
					<TableRekapAbsenBulan
						datas={dataRekapanAbsensiBulan}
						title={`Rekapan Absensi ${request.kelas} ${
							request.jurusan
						} Bulan ${capitalize(request.bulan)} ${request.tahun}`}
						borderColor="border-color4"
						hoverBg="bg-color2"
					/>
				);
			default:
				return null;
				break;
		}
	};

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
				{(() => {
					switch (true) {
						case radioButton === "bulan" && authenticated.name !== null:
							return (
								<TableRekapAbsenBulanAdmin
									datas={dataRekapanAbsensiBulan}
									title={`Rekapan Absensi ${request.kelas} ${
										request.jurusan
									} Bulan ${capitalize(request.bulan)} ${request.tahun}`}
									borderColor="border-color4"
									hoverBg="bg-color2"
								/>
							);
							break;
						case radioButton === "bulan" && authenticated.name === null:
							return (
								<TableRekapAbsenBulan
									datas={dataRekapanAbsensiBulan}
									title={`Rekapan Absensi ${request.kelas} ${
										request.jurusan
									} Bulan ${capitalize(request.bulan)} ${request.tahun}`}
									borderColor="border-color4"
									hoverBg="bg-color2"
								/>
							);
						default:
							return null;
							break;
					}
				})()}
				{/* {showMonthPresences(true)} */}
				{radioButton === "semester" ? (
					<TableRekapAbsenSemester
						datas={semesterPrecences}
						title={`Rekapan Absensi ${request.kelas} ${
							request.jurusan
						} Semester ${capitalize(request.semester)} ${request.tahun}`}
						borderColor="border-color4"
						hoverBg="bg-color2"
					/>
				) : null}
				{radioButton === "tahun" ? (
					<TableRekapAbsenTahun
						datas={yearPrecences}
						title={`Rekapan Absensi ${request.kelas} ${request.jurusan} Tahun ${request.tahun} `}
						borderColor="border-color4"
						hoverBg="bg-color2"
					/>
				) : null}
			</div>
		</div>
	);
}

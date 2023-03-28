import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	TextField,
	ToggleButtonGroup,
	ToggleButton,
} from "@mui/material";

import { classData } from "../../data/fixData";
import { monthData } from "../../data/fixData";

export default function Filter({
	request,
	setRequest,
	radioButton,
	handleRadio,
	kelasJurusans,
}) {
	const uniqueMajor = [
		...new Map(kelasJurusans.map((item) => [item.jurusan, item])).values(),
	];

	let addDash = function (str) {
		let chars = str.split("");
		chars.splice(chars.length - 1, 0, "-");
		return chars.join("");
	};

	let loopingMajor = (data) => {
		let result = [];
		data.forEach((d) => {
			if (d.jurusan !== "RPL") {
				return result.push(addDash(d.jurusan));
			}
			return result.push(d.jurusan);
		});
	};

	let newDataMajor = loopingMajor(uniqueMajor);

	// function containsNumbers(str) {
	// 	return /\d/.test(str);
	// }

	// let classView = uniqueMajor.map((e) => {
	// 	if (containsNumbers(e.jurusan)) {
	// 		return e.jurusan.slice(0, -1) + " " + e.jurusan.slice(-1);
	// 	}
	// 	return e.jurusan;
	// });

	return (
		<div className="flex bg-color1 justify-center px-6 py-5 gap-16 items-baseline shadow-[1px_0_5px_0_rgba(113,113,112,1)]">
			{/* Select Kelas */}
			<FormControl required variant="standard" sx={{ m: 1, minWidth: 180 }}>
				<InputLabel id="select-kelas-absenperbulan-label">Kelas</InputLabel>
				<Select
					labelId="select-kelas-absenperbulan-label"
					id="select-kelas-absenperbulan"
					value={request.kelas}
					onChange={(e) =>
						setRequest({
							...request,
							kelas: e.target.value,
						})
					}
					label="Kelas"
				>
					{classData.map((e, index) => (
						<MenuItem key={index} value={e.value}>
							{e.value}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			{/* Select Jurusan */}
			<FormControl required variant="standard" sx={{ m: 1, minWidth: 180 }}>
				<InputLabel id="select-jurusan-absenperbulan-label">Jurusan</InputLabel>
				<Select
					labelId="select-jurusan-absenperbulan-label"
					id="select-jurusan-absenperbulan"
					value={request.jurusan}
					onChange={(e) =>
						setRequest({
							...request,
							jurusan: e.target.value,
						})
					}
					MenuProps={{ PaperProps: { sx: { maxHeight: 120 } } }}
					label="Jurusan"
				>
					{uniqueMajor.map((e, index) => (
						<MenuItem key={index} value={e.jurusan}>
							{e.jurusan}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			{/* Input Tahun */}
			{radioButton !== "tahun" ? (
				<TextField
					required
					id="input-tahun-absensiperbulan"
					value={request.tahun}
					onChange={(e) =>
						setRequest({
							...request,
							tahun: e.target.value,
						})
					}
					helperText="contoh: 2022-2023"
					label="Tahun Ajaran"
					variant="standard"
				/>
			) : (
				<TextField
					required
					id="input-tahun-absensiperbulan"
					value={request.tahun}
					onChange={(e) =>
						setRequest({
							...request,
							tahun: e.target.value,
						})
					}
					helperText="contoh: 2022"
					label="Tahun Ajaran"
					variant="standard"
				/>
			)}

			{/* RadioButton */}
			<ToggleButtonGroup
				className="bg-color2"
				value={radioButton}
				exclusive
				onChange={handleRadio}
			>
				<ToggleButton value="bulan">Bulan</ToggleButton>
				<ToggleButton value="semester">Semester</ToggleButton>
				<ToggleButton value="tahun">Tahun</ToggleButton>
			</ToggleButtonGroup>

			{/* Conditional Rendering Bulan / Semester */}
			{radioButton === "bulan" ? (
				<FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
					<InputLabel id="select-absenperbulan-label">Bulan</InputLabel>
					<Select
						labelId="select-absenperbulan-label"
						id="select-absenperbulan"
						value={request.bulan}
						onChange={(e) =>
							setRequest({
								...request,
								bulan: e.target.value,
							})
						}
						label="Bulan"
					>
						{monthData.map((e, index) => (
							<MenuItem key={index} value={e.value}>
								{e.label}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			) : null}

			{radioButton === "semester" ? (
				<FormControl required variant="standard" sx={{ m: 1, minWidth: 180 }}>
					<InputLabel id="select-absenpersemester-label">Semester</InputLabel>
					<Select
						labelId="select-absenpersemester-label"
						id="select-absenpersemester"
						value={request.semester}
						onChange={(e) =>
							setRequest({
								...request,
								semester: e.target.value,
							})
						}
						label="Semester"
					>
						<MenuItem value="ganjil">Ganjil</MenuItem>
						<MenuItem value="genap">Genap</MenuItem>
					</Select>
				</FormControl>
			) : null}
		</div>
	);
}

import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	TextField,
} from "@mui/material";

import { classData } from "../../data/fixData";

export default function Filter({ request, setRequest, kelasJurusans }) {
	const uniqueMajor = [
		...new Map(kelasJurusans?.map((item) => [item.jurusan, item])).values(),
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
		<div className="flex bg-color1 justify-center px-6 py-5 gap-36 items-baseline shadow-[1px_0_5px_0_rgba(113,113,112,1)]">
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
					{uniqueMajor
						?.sort((a, b) => (a.jurusan > b.jurusan ? 1 : -1))
						?.map((e, index) => (
							<MenuItem key={index} value={e.jurusan}>
								{e.jurusan}
							</MenuItem>
						))}
				</Select>
			</FormControl>
		</div>
	);
}

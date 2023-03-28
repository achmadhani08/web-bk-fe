import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	TextField,
} from "@mui/material";

import { classData } from "../../data/fixData";

export default function Filter({ request, setRequest }) {
	let jurusan = [
		{
			value: "AKL1",
		},
		{
			value: "AKL2",
		},
		{
			value: "BDP1",
		},
		{
			value: "BDP2",
		},
		{
			value: "OTKP1",
		},
		{
			value: "OTKP2",
		},
		{ value: "RPL" },
	];
	return (
		<div className="flex bg-color1 justify-center px-6 py-5 gap-20 items-baseline shadow-[1px_0_5px_0_rgba(113,113,112,1)]">
			{/* Select Kelas */}
			<FormControl required variant="standard" sx={{ m: 1, minWidth: 180 }}>
				<InputLabel id="select-kelas-rekapanpoint-label">Kelas</InputLabel>
				<Select
					labelId="select-kelas-rekapanpoint-label"
					id="select-kelas-rekapanpoint"
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
				<InputLabel id="select-jurusan-rekapanpoint-label">Jurusan</InputLabel>
				<Select
					labelId="select-jurusan-rekapanpoint-label"
					id="select-jurusan-rekapanpoint"
					value={request.jurusan}
					onChange={(e) =>
						setRequest({
							...request,
							jurusan: e.target.value,
						})
					}
					label="Jurusan"
					MenuProps={{ PaperProps: { sx: { maxHeight: 120 } } }}
				>
					{jurusan.map((e, index) => (
						<MenuItem key={index} value={e.value}>
							{e.value}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			{/* Input Tahun */}
			<TextField
				required
				id="input-tahun-rekapanpoint"
				value={request.tahun}
				onChange={(e) =>
					setRequest({
						...request,
						tahun: e.target.value,
					})
				}
				label="Tahun Ajaran"
				variant="standard"
				helperText="contoh: 2021-2022"
			/>

			{/* Input NIS */}
			<TextField
				id="input-nis-rekapanpoint"
				value={request.nis}
				onChange={(e) =>
					setRequest({
						...request,
						nis: e.target.value,
					})
				}
				label="NIS"
				variant="standard"
				helperText="contoh: 12062"
			/>
		</div>
	);
}

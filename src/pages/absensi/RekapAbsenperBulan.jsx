import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useParams, NavLink } from "react-router-dom";

import Navbar from "../../components/Navbar";

function RekapAbsenperBulan() {
	const [request, setRequest] = useState({
		kelas: "",
		jurusan: "",
		bulan: "",
		tahun: "",
	});

	const { bulan, kelas, tahun } = useParams();

	let jurusanValue = kelas?.slice(3);
	let kelasValue = kelas?.slice(0, 2);

	useEffect(() => {
		setRequest({
			...request,
			kelas: kelasValue,
			jurusan: jurusanValue,
			bulan: bulan,
			tahun: tahun,
		});
	}, [bulan, kelas, tahun]);

	return (
		<>
			<Navbar />

			<div className="bg-white justify-center gap-y-4 flex flex-col w-full h-full">
				<div className="flex p-8">
					<div className="bg-color1 flex px-5 py-3 gap-5 items-center rounded-lg">
						{/* Select Kelas */}
						<FormControl
							required
							variant="standard"
							sx={{ m: 1, minWidth: 120 }}
						>
							<InputLabel id="select-kelas-absenperbulan-label">
								Kelas
							</InputLabel>
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
								<MenuItem value={10}>10</MenuItem>
								<MenuItem value={11}>11</MenuItem>
								<MenuItem value={12}>12</MenuItem>
							</Select>
						</FormControl>

						{/* Select Jurusan */}
						<FormControl
							required
							variant="standard"
							sx={{ m: 1, minWidth: 120 }}
						>
							<InputLabel id="select-jurusan-absenperbulan-label">
								Jurusan
							</InputLabel>
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
								label="Jurusan"
							>
								<MenuItem value="AKL1">AKL 1</MenuItem>
								<MenuItem value="AKL2">AKL 2</MenuItem>
								<MenuItem value="BDP1">BDP 1</MenuItem>
								<MenuItem value="BDP2">BDP 2</MenuItem>
								<MenuItem value="OTKP1">OTKP 1</MenuItem>
								<MenuItem value="OTKP2">OTKP 2</MenuItem>
								<MenuItem value="RPL">RPL</MenuItem>
							</Select>
						</FormControl>

						{/* Select Bulan */}
						<FormControl
							required
							variant="standard"
							sx={{ m: 1, minWidth: 120 }}
						>
							<InputLabel id="select-bulan-absenperbulan-label">
								Bulan
							</InputLabel>
							<Select
								labelId="select-bulan-absenperbulan-label"
								id="select-bulan-absenperbulan"
								value={request.bulan}
								onChange={(e) =>
									setRequest({
										...request,
										bulan: e.target.value,
									})
								}
								label="Bulan"
							>
								<MenuItem value="Januari">Januari</MenuItem>
								<MenuItem value="Februari">Februari</MenuItem>
								<MenuItem value="Maret">Maret</MenuItem>
								<MenuItem value="April">April</MenuItem>
								<MenuItem value="Mei">Mei</MenuItem>
								<MenuItem value="Juni">Juni</MenuItem>
								<MenuItem value="Juli">Juli</MenuItem>
								<MenuItem value="Agustus">Agustus</MenuItem>
								<MenuItem value="September">September</MenuItem>
								<MenuItem value="Oktober">Oktober</MenuItem>
								<MenuItem value="November">November</MenuItem>
								<MenuItem value="Desember">Desember</MenuItem>
							</Select>
						</FormControl>

						{/* Select Tahun */}
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
							label="Tahun Ajaran"
							variant="standard"
							helperText="contoh: 2021-2022"
						/>

						<NavLink
							to={`bulan/${request.bulan}/${request.tahun}/${request.kelas}-${request.jurusan}`}
						>
							<button className="btn gap-2">
								<FiSearch size={20} /> Cari Data
							</button>
						</NavLink>
					</div>
				</div>

				<div className="flex p-8">
					<div className=""></div>
				</div>
			</div>
		</>
	);
}

export default RekapAbsenperBulan;

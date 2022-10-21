import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import { FiSearch } from "react-icons/fi";
import React, { useState } from "react";

import Navbar from "../../components/Navbar";
import { NavLink } from "react-router-dom";

export default function RekapAbsenChoise() {
	const [absenPerBulan, setAbsenPerBulan] = useState({
		kelas: "",
		jurusan: "",
		bulan: "",
		tahun: "",
	});

	const [absenPerSemester, setAbsenPerSemester] = useState({
		kelas: "",
		jurusan: "",
		semester: "",
		tahun: "",
	});

	const [absenPerTahun, setAbsenPerTahun] = useState({
		kelas: "",
		jurusan: "",
		tahun: "",
	});

	return (
		<>
			<Navbar />

			<div
				className="bg-white justify-center flex flex-col w-full h-full"
				style={{ minHeight: "88vh" }}
			>
				<div className="w-full">
					<div className="justify-evenly py-12 flex">
						{/* Absensi per Bulan */}
						<div className="card w-100 bg-color2 text-black">
							<div className="card-body items-center text-center">
								<h2 className="card-title">Data Absensi per Bulan</h2>

								<div className="card-actions mt-3 flex">
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
											value={absenPerBulan.kelas}
											onChange={(e) =>
												setAbsenPerBulan({
													...absenPerBulan,
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
											value={absenPerBulan.jurusan}
											onChange={(e) =>
												setAbsenPerBulan({
													...absenPerBulan,
													jurusan: e.target.value,
												})
											}
											label="Jurusan"
										>
											<MenuItem value="AKL-1">AKL-1</MenuItem>
											<MenuItem value="AKL-2">AKL-2</MenuItem>
											<MenuItem value="BDP-1">BDP-1</MenuItem>
											<MenuItem value="BDP-2">BDP-2</MenuItem>
											<MenuItem value="OTKP-1">OTKP-1</MenuItem>
											<MenuItem value="OTKP-2">OTKP-2</MenuItem>
											<MenuItem value="RPL">RPL</MenuItem>
										</Select>
									</FormControl>
								</div>
								<div className="card-actions mt-2 flex">
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
											value={absenPerBulan.bulan}
											onChange={(e) =>
												setAbsenPerBulan({
													...absenPerBulan,
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
										value={absenPerBulan.tahun}
										onChange={(e) =>
											setAbsenPerBulan({
												...absenPerBulan,
												tahun: e.target.value,
											})
										}
										label="Tahun Ajaran"
										variant="standard"
										helperText="contoh: 2021-2022"
									/>
								</div>
								<div className="card-actions mt-2 flex">
									<NavLink
										to={`bulan/${absenPerBulan.bulan}/${absenPerBulan.tahun}/${absenPerBulan.kelas}-${absenPerBulan.jurusan}`}
									>
										<button className="btn gap-2">
											<FiSearch size={20} /> Cari Data
										</button>
									</NavLink>
								</div>
							</div>
						</div>
						{/* Absensi per Semester */}
						<div className="card w-100 bg-color2 text-black">
							<div className="card-body items-center text-center">
								<h2 className="card-title">Data Absensi per Semester</h2>

								<div className="card-actions mt-3 flex">
									{/* Select Kelas */}
									<FormControl
										required
										variant="standard"
										sx={{ m: 1, minWidth: 120 }}
									>
										<InputLabel id="select-kelas-absenpersemester-label">
											Kelas
										</InputLabel>
										<Select
											labelId="select-kelas-absenpersemester-label"
											id="select-kelas-absenpersemester"
											value={absenPerSemester.kelas}
											onChange={(e) =>
												setAbsenPerSemester({
													...absenPerSemester,
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
										<InputLabel id="select-jurusan-absenpersemester-label">
											Jurusan
										</InputLabel>
										<Select
											labelId="select-jurusan-absenpersemester-label"
											id="select-jurusan-absenpersemester"
											value={absenPerSemester.jurusan}
											onChange={(e) =>
												setAbsenPerSemester({
													...absenPerSemester,
													jurusan: e.target.value,
												})
											}
											label="Jurusan"
										>
											<MenuItem value="AKL-1">AKL-1</MenuItem>
											<MenuItem value="AKL-2">AKL-2</MenuItem>
											<MenuItem value="BDP-1">BDP-1</MenuItem>
											<MenuItem value="BDP-2">BDP-2</MenuItem>
											<MenuItem value="OTKP-1">OTKP-1</MenuItem>
											<MenuItem value="OTKP-2">OTKP-2</MenuItem>
											<MenuItem value="RPL">RPL</MenuItem>
										</Select>
									</FormControl>
								</div>

								<div className="card-actions mt-2 flex">
									{/* Select Semester */}
									<FormControl
										required
										variant="standard"
										sx={{ m: 1, minWidth: 120 }}
									>
										<InputLabel id="select-semester-absenpersemester-label">
											Semester
										</InputLabel>
										<Select
											labelId="select-semester-absenpersemester-label"
											id="select-semester-absenpersemester"
											value={absenPerSemester.semester}
											onChange={(e) =>
												setAbsenPerSemester({
													...absenPerSemester,
													semester: e.target.value,
												})
											}
											label="Semester"
										>
											<MenuItem value="ganjil">Ganjil</MenuItem>
											<MenuItem value="genap">Genap</MenuItem>
										</Select>
									</FormControl>

									{/* Select Tahun */}
									<TextField
										required
										id="input-tahun-absensipersemester"
										value={absenPerSemester.tahun}
										onChange={(e) =>
											setAbsenPerSemester({
												...absenPerSemester,
												tahun: e.target.value,
											})
										}
										label="Tahun Ajaran"
										variant="standard"
										helperText="contoh: 2021-2022"
									/>
								</div>
								<div className="card-actions mt-2 flex">
									<NavLink
										to={`semester/${absenPerSemester.semester}/${absenPerSemester.tahun}/${absenPerSemester.kelas}-${absenPerSemester.jurusan}`}
									>
										<button className="btn gap-2">
											<FiSearch size={20} /> Cari Data
										</button>
									</NavLink>
								</div>
							</div>
						</div>
						{/* Absensi per Tahun */}
						<div className="card w-100 bg-color2 text-black">
							<div className="card-body items-center text-center">
								<h2 className="card-title">Data Absensi per Tahun</h2>

								<div className="card-actions mt-3 flex">
									{/* Select Kelas */}
									<FormControl
										required
										variant="standard"
										sx={{ m: 1, minWidth: 120 }}
									>
										<InputLabel id="select-kelas-absenpertahun-label">
											Kelas
										</InputLabel>
										<Select
											labelId="select-kelas-absenpertahun-label"
											id="select-kelas-absenpertahun"
											value={absenPerTahun.kelas}
											onChange={(e) =>
												setAbsenPerTahun({
													...absenPerTahun,
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
										<InputLabel id="select-jurusan-absenpertahun-label">
											Jurusan
										</InputLabel>
										<Select
											labelId="select-jurusan-absenpertahun-label"
											id="select-jurusan-absenpertahun"
											value={absenPerTahun.jurusan}
											onChange={(e) =>
												setAbsenPerTahun({
													...absenPerTahun,
													jurusan: e.target.value,
												})
											}
											label="Jurusan"
										>
											<MenuItem value="AKL-1">AKL-1</MenuItem>
											<MenuItem value="AKL-2">AKL-2</MenuItem>
											<MenuItem value="BDP-1">BDP-1</MenuItem>
											<MenuItem value="BDP-2">BDP-2</MenuItem>
											<MenuItem value="OTKP-1">OTKP-1</MenuItem>
											<MenuItem value="OTKP-2">OTKP-2</MenuItem>
											<MenuItem value="RPL">RPL</MenuItem>
										</Select>
									</FormControl>
								</div>
								<div className="card-actions mt-2 flex">
									{/* Select Tahun */}
									<TextField
										required
										id="input-tahun-absensipertahun"
										value={absenPerTahun.tahun}
										onChange={(e) =>
											setAbsenPerTahun({
												...absenPerTahun,
												tahun: e.target.value,
											})
										}
										label="Tahun Ajaran"
										variant="standard"
										helperText="contoh: 2021-2022"
									/>
								</div>
								<div className="card-actions mt-2 flex">
									<NavLink
										to={`tahun/${absenPerTahun.tahun}/${absenPerTahun.kelas}-${absenPerTahun.jurusan}`}
									>
										<button className="btn gap-2">
											<FiSearch size={20} /> Cari Data
										</button>
									</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

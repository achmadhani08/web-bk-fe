import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import Filter from "./Filter";
import TableRekapPointKelas from "./TableRekapPointKelas";
import TableRekapPointSiswa from "./TableRekapPointSiswa";

import { dataRekapPointKelas } from "../../data/dummy/dummyRekapPoint";
import { dataRekapPointSiswa } from "../../data/dummy/dummyRekapPoint";

export default function RekapanPoint() {
	const [request, setRequest] = useState({
		kelas: 12,
		jurusan: "AKL1",
		tahun: "2022-2023",
		nis: "",
	});

	return (
		<div className="min-h-screen bg-color1">
			<Navbar />

			{/* <div className="bg-color1"> */}
			<div className="w-full sticky top-[5.5rem] z-10">
				<Filter request={request} setRequest={setRequest} />
			</div>

			<div className="w-full py-8 px-6 flex flex-col gap-8">
				{request.nis.length >= 5 ? (
					<TableRekapPointSiswa
						datas={dataRekapPointSiswa}
						request={request}
						hoverBg="bg-color2"
						borderColor="border-color4"
					/>
				) : (
					<TableRekapPointKelas
						datas={dataRekapPointKelas}
						request={request}
						title={`Rekapan Point Siswa/i ${request.kelas} ${request.jurusan} Tahun Ajaran ${request.tahun}`}
						hoverBg="bg-color2"
						borderColor="border-color4"
					/>
				)}
			</div>
			{/* </div> */}
		</div>
	);
}

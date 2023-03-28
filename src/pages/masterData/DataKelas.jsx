import Navbar from "../../components/Navbar";
import TableKelas from "./TableKelas";

import { dataKelas } from "../../data/dummy/dummyKelas";

export default function DataKelas() {
	return (
		<div className="min-h-screen bg-color1">
			<Navbar />

			<div className="w-full py-8 px-6">
				<TableKelas
					datas={dataKelas}
					title="Data Kelas - Jurusan SMK Negeri 10 Jakarta"
					borderColor="border-color4"
					hoverBg="bg-color2"
				/>
			</div>
		</div>
	);
}

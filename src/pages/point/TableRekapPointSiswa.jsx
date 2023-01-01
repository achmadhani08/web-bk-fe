import { FaRegFilePdf } from "react-icons/fa";

import TablePelanggaranSiswa from "../../components/TablePelanggaranSiswa";
import TablePenghargaanSiswa from "../../components/TablePenghargaanSiswa";
import TableKumulatifSiswa from "../../components/TableKumulatifSiswa";
import TableJenjangPembinaan from "../../components/TableJenjangPembinaan";

import { diciplineData } from "../../data/fixData";

export default function TableRekapPointSiswa({ datas, borderColor, hoverBg }) {
	console.log(datas);
	return (
		<>
			<div className="font-bold text-2xl tracking-wide select-none text-black">
				{datas.nama}
			</div>

			<div className="flex gap-6 justify-between">
				<TablePelanggaranSiswa
					datas={datas.rekap_pelanggaran}
					siswa_id={datas.id}
					title="Rekapan Point Pelanggaran"
					borderColor={borderColor}
					hoverBg={hoverBg}
				/>
				<TablePenghargaanSiswa
					datas={datas.rekap_penghargaan}
					siswa_id={datas.id}
					title="Rekapan Point Penghargaan"
					borderColor={borderColor}
					hoverBg={hoverBg}
				/>
			</div>

			<div className="flex gap-6 justify-between">
				<TableKumulatifSiswa
					datas={datas.kumulatif}
					title="Kumulatif"
					borderColor={borderColor}
					hoverBg={hoverBg}
				/>
				<TableJenjangPembinaan
					datas={diciplineData}
					title="Jenjang Pembinaan"
					borderColor={borderColor}
					hoverBg={hoverBg}
				/>
			</div>

			<button
				className="btn fixed bottom-[1.5rem] right-[1.5rem] btn-square bg-color1 hover:bg-color2 text-black shadow-sm shadow-slate-400 border-none"
				// onClick={exportPdf}
			>
				<FaRegFilePdf size={20} />
			</button>
		</>
	);
}

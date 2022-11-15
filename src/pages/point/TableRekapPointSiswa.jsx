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
					title="Rekapan Point Pelanggaran"
					borderColor={borderColor}
					hoverBg={hoverBg}
				/>
				<TablePenghargaanSiswa
					datas={datas.rekap_penghargaan}
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
		</>
	);
}

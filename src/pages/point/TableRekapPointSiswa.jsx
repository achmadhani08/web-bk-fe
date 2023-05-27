import { useContext } from "react";
import { FaRegFilePdf } from "react-icons/fa";

import TablePelanggaranSiswa from "../../components/TablePelanggaranSiswa";
import TablePelanggaranSiswaAdmin from "../../components/TablePelanggaranSiswaAdmin";
import TablePenghargaanSiswa from "../../components/TablePenghargaanSiswa";
import TablePenghargaanSiswaAdmin from "../../components/TablePenghargaanSiswaAdmin";
import TableKumulatifSiswa from "../../components/TableKumulatifSiswa";
import TableJenjangPembinaan from "../../components/TableJenjangPembinaan";

import { diciplineData } from "../../data/fixData";
import { UserContext } from "../../App";

export default function TableRekapPointSiswa({ datas, borderColor, hoverBg }) {
	const { authenticated } = useContext(UserContext);

	return (
		<>
			<div className="font-bold text-2xl tracking-wide select-none text-black">
				{datas.nama} ({datas.kelas} | {datas.nis})
			</div>

			<div className="flex gap-6 justify-between">
				{authenticated ? (
					<>
						<TablePelanggaranSiswaAdmin
							datas={datas.rekap_pelanggaran}
							siswa_id={datas.id}
							title="Rekapan Point Pelanggaran"
							borderColor={borderColor}
							hoverBg={hoverBg}
						/>
						<TablePenghargaanSiswaAdmin
							datas={datas.rekap_penghargaan}
							siswa_id={datas.id}
							title="Rekapan Point Penghargaan"
							borderColor={borderColor}
							hoverBg={hoverBg}
						/>
					</>
				) : (
					<>
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
					</>
				)}
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

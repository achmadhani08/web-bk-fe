import { useState } from "react";
import { FaRegFilePdf } from "react-icons/fa";
// import JsPDF from "jspdf";

import ModalAddSiswa from "../../components/ModalAddSiswa";
import TableFewDataSiswa from "../../components/TableFewDataSiswa";
import ModalDeleteMultipleData from "../../components/ModalDeleteMultipleData";
import { deleteSelectedSiswa } from "../../lib/stateManager/reducers/API/siswa";

export default function TableSiswa({
	datas,
	title,
	getDataSiswa,
	borderColor,
	hoverBg,
	kelas,
	jurusan,
}) {
	// const exportPdf = () => {
	// 	const report = new JsPDF("landscape", "pt", "a4");
	// 	report.html(document.querySelector("#table-siswa")).then(() => {
	// 		report.save(`${title}.pdf`);
	// 	});
	// };

	const [selectedRows, setSelectedRows] = useState([]);

	const toggleRow = (e, id) => {
		if (!e.ctrlKey || !e.shiftKey) {
			if (selectedRows.includes(id)) {
				setSelectedRows(selectedRows.filter((row) => row !== id));
			} else {
				setSelectedRows([...selectedRows, id]);
			}
		}
	};

	const destroySiswa = async () => {
		await deleteSelectedSiswa(selectedRows);
		getDataSiswa();
	};

	return (
		<>
			<div id="table-siswa" className="relative">
				<div className={`py-2 border-2 ${borderColor} rounded-t-2xl`}>
					<h2 className="text-black font-medium justify-center text-xl items-center flex">
						<span className="mx-3 select-none">{title}</span>
					</h2>
				</div>

				{selectedRows?.length > 0 && (
					<ModalDeleteMultipleData
						datas={selectedRows}
						destroy={destroySiswa}
						title="Hapus Data Siswa"
					/>
				)}

				<ModalAddSiswa
					getDataSiswa={getDataSiswa}
					title="Buat Data Siswa"
					kelas={kelas}
					jurusan={jurusan}
				/>

				<TableFewDataSiswa
					datas={datas}
					getDataSiswa={getDataSiswa}
					borderColor={borderColor}
					hoverBg={hoverBg}
					selectedRows={selectedRows}
					setSelectedRows={setSelectedRows}
					toggleRow={toggleRow}
				/>

				<div className={`py-3 border-2 ${borderColor} rounded-b-2xl`}></div>
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

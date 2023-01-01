import { FaRegFilePdf } from "react-icons/fa";

export default function TableRekapPointKelas({
	datas,
	title,
	borderColor,
	hoverBg,
}) {
	// const exportPdf = () => {
	// 	const doc = new jsPDF();
	// 	doc.autoTable({ html: "#export-table" });
	// 	doc.save(`rekapan-absensi-${kelas}-${jurusan}-${bulan}-${tahun}.pdf`);
	// };

	// const exportColumns = cols.map((col) => ({
	// 	title: col.header,
	// 	dataKey: col.field,
	// 	colSpan: col.colSpan,
	// 	styles: { halign: "center" },
	// }));

	// const exportPdf = () => {
	// 	import("jspdf").then((jsPDF) => {
	// 		import("jspdf-autotable").then(() => {
	// 			const doc = new jsPDF.default("landscape", 0, 0);
	// 			doc.autoTable({
	// 				head: [
	// 					[
	// 						{
	// 							content: `Rekapan Absensi ${kelas} ${jurusan} Semester ${semester} ${tahun}`,
	// 							colSpan: 12,
	// 							styles: { halign: "center" },
	// 						},
	// 					],
	// 					exportColumns,
	// 				],
	// 				body: [
	// 					[
	// 						{
	// 							content: "1",
	// 							colSpan: 1,
	// 							styles: { halign: "center" },
	// 						},
	// 						{
	// 							content: "1234",
	// 							colSpan: 1,
	// 							styles: { halign: "center" },
	// 						},
	// 						{
	// 							content: "Rendi Andika",
	// 							colSpan: 4,
	// 							styles: { halign: "center" },
	// 						},
	// 						{
	// 							content: "Laki-Laki",
	// 							colSpan: 2,
	// 							styles: { halign: "center" },
	// 						},
	// 						{
	// 							content: "2",
	// 							colSpan: 1,
	// 							styles: { halign: "center" },
	// 						},
	// 						{
	// 							content: "4",
	// 							colSpan: 1,
	// 							styles: { halign: "center" },
	// 						},
	// 						{
	// 							content: "1",
	// 							colSpan: 1,
	// 							styles: { halign: "center" },
	// 						},
	// 						{
	// 							content: "3",
	// 							colSpan: 1,
	// 							styles: { halign: "center" },
	// 						},
	// 					],
	// 				],
	// 			});
	// 			doc.save(`dashboard-prestasi.pdf`);
	// 		});
	// 	});
	// };

	// const exportPdf = () => {
	// 	import("jspdf").then((jsPDF) => {
	// 		import("jspdf-autotable").then(() => {
	// 			const doc = new jsPDF.default("landscape", 0, 0);
	// 			doc.autoTable(exportColumns, dataRekapanAbsensiSemester);
	// 			doc.save(
	// 				`rekapan-absensi-${kelas}-${jurusan}-${semester}-${tahun}.pdf`
	// 			);
	// 		});
	// 	});
	// };
	return (
		<>
			<div id="table-point-kelas">
				<div className={`py-2 border-2 ${borderColor} rounded-t-2xl`}>
					<h2 className="text-black font-medium justify-center text-xl items-center flex">
						<span className="mx-3 select-none">{title}</span>
					</h2>
				</div>

				<table className="w-full border-collapse table-auto text-slate-800">
					<thead>
						<tr className="text-base font-semibold">
							<th className={`border-x-2 ${borderColor} w-[5%]`}>No.</th>
							<th className={`border-x-2 ${borderColor} w-[7%]`}>NIS</th>
							<th className={`border-x-2 ${borderColor} w-[40%]`}>Nama</th>
							<th className={`border-x-2 ${borderColor} w-[12%]`}>
								Jenis Kelamin
							</th>
							<th className={`border-x-2 ${borderColor} w-[8%]`}>Kumulatif</th>
							<th className={`border-x-2 ${borderColor} w-[28%]`}>Tindakan</th>
						</tr>
					</thead>
					<tbody>
						{datas?.map((data, index) => (
							<tr
								className={`text-center hover:${hoverBg} text-base font-medium`}
								key={data.id}
							>
								<td className={`py-1 border-t-2 border-x-2  ${borderColor}`}>
									{index + 1}
								</td>
								<td className={`py-1 border-t-2 border-x-2 ${borderColor}`}>
									{data.nis}
								</td>
								<td
									className={`py-1 pl-3 text-start border-t-2 border-x-2 ${borderColor}`}
								>
									{data.nama}
								</td>
								<td className={`py-1 border-t-2 border-x-2  ${borderColor}`}>
									{data.jk}
								</td>
								<td className={`py-1 border-t-2 border-x-2  ${borderColor}`}>
									{data.kumulatif}
								</td>
								<td className={`py-1 border-t-2 border-x-2  ${borderColor}`}>
									{data.tindakan}
								</td>
							</tr>
						))}
					</tbody>
				</table>

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

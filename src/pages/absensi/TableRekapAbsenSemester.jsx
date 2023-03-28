import { FaRegFilePdf } from "react-icons/fa";
import JsPDF from "jspdf";

export const TableRekapAbsenSemester = ({
	datas,
	title,
	icon,
	borderColor,
	hoverBg,
}) => {
	const exportPdf = () => {
		const report = new JsPDF("landscape", "m", "a4");
		report.html(document.querySelector("#table-semester")).then(() => {
			report.save(`${title}.pdf`);
		});
	};

	// console.log(datas);
	return (
		<>
			<div id="table-semester">
				<div className={`py-2 border-2 ${borderColor} rounded-t-2xl`}>
					<h2 className="text-black font-medium justify-center text-xl items-center flex">
						{icon}
						<span className="mx-3 select-none">{title}</span>
						{icon}
					</h2>
				</div>

				<table className="w-full border-collapse table-auto text-slate-800">
					<thead>
						<tr className="text-base font-semibold">
							<th className={`border-x-2 ${borderColor} w-[8%]`}>No.</th>
							<th className={`border-x-2 ${borderColor} w-[15%]`}>NIS</th>
							<th className={`border-x-2 ${borderColor} w-[30%]`}>Nama</th>
							<th className={`border-x-2 ${borderColor} w-[15%]`}>
								Jenis Kelamin
							</th>
							<th className={`border-x-2 ${borderColor} w-[8%]`}>Sakit</th>
							<th className={`border-x-2 ${borderColor} w-[8%]`}>Izin</th>
							<th className={`border-x-2 ${borderColor} w-[8%]`}>Alfa</th>
							<th className={`border-x-2 ${borderColor} w-[8%]`}>Terlambat</th>
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
									{data.keterangan.S}
								</td>
								<td className={`py-1 border-t-2 border-x-2  ${borderColor}`}>
									{data.keterangan.I}
								</td>
								<td className={`py-1 border-t-2 border-x-2  ${borderColor}`}>
									{data.keterangan.A}
								</td>
								<td className={`py-1 border-t-2 border-x-2  ${borderColor}`}>
									{data.keterangan.T}
								</td>
							</tr>
						))}
					</tbody>
				</table>

				<div className={`py-3 border-2 ${borderColor} rounded-b-2xl`}></div>
			</div>

			<button
				className="btn fixed bottom-[1.5rem] right-[1.5rem] btn-square bg-color1 hover:bg-color2 text-black shadow-sm shadow-slate-400 border-none"
				onClick={exportPdf}
			>
				<FaRegFilePdf size={20} />
			</button>
		</>
	);
};

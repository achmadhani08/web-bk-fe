import { FaRegFilePdf } from "react-icons/fa";
import ModalUpdateAbsensi from "../../components/ModalUpdateAbsensi";

import { dataRekapanAbsensiBulan } from "../../data/dummy/dummyRekapAbsen";

export const TableRekapAbsenBulanAdmin = ({
	datas,
	title,
	icon,
	borderColor,
	hoverBg,
}) => {
	let loopingData = (data) => {
		if (data.H) {
			return "H";
		} else if (data.I) {
			return "I";
		} else if (data.S) {
			return "S";
		} else if (data.A) {
			return "A";
		} else if (data.T) {
			return "T";
		} else {
			return "-";
		}
	};

	return (
		<>
			<div className="w-full" id="table-bulan">
				<div className={`py-2 border-2 ${borderColor} rounded-t-2xl`}>
					<h2 className="text-black font-medium justify-center text-xl items-center flex">
						{icon}
						<span className="mx-3 select-none">{title}</span>
						{icon}
					</h2>
				</div>

				<table className="w-full border-collapse table-auto overflow-auto block relative text-slate-800">
					<thead>
						<tr className="text-base font-semibold">
							<th
								rowSpan={2}
								className={`border-x-2 cursor-default ${borderColor} w-[8%] min-w-[35px] px-1`}
							>
								No.
							</th>
							<th
								rowSpan={2}
								className={`border-x-2 cursor-default ${borderColor} w-[15%] min-w-[60px]`}
							>
								NIS
							</th>
							<th
								rowSpan={2}
								className={`border-x-2 cursor-default ${borderColor} w-[30%] min-w-[200px]`}
							>
								Nama
							</th>
							<th
								rowSpan={2}
								className={`border-x-2 cursor-default ${borderColor} w-[15%] min-w-[95px] px-1`}
							>
								Jenis Kelamin
							</th>
							<th
								colSpan={datas[0]?.days?.length}
								className={`border-x-2 cursor-default border-b-2 ${borderColor} w-[8%]`}
							>
								Tanggal
							</th>
						</tr>
						<tr>
							{datas[0]?.days.map((data, index) => (
								<th
									key={index}
									className={`border-x-2 cursor-default ${borderColor}`}
									style={{ minWidth: "45px" }}
								>
									{index + 1}
								</th>
							))}
						</tr>
					</thead>
					<tbody className="overflow-x-scroll w-full">
						{datas?.map((data, index) => (
							<tr
								className={`text-center hover:${hoverBg} text-base font-medium min-h-[60px] h-[60px]`}
								key={data.id}
							>
								<td className={`py-1 border-t-2 border-x-2  ${borderColor}`}>
									{index + 1}
								</td>
								<td className={`py-1 border-t-2 border-x-2 ${borderColor}`}>
									{data.nis}
								</td>
								<td
									className={`py-1 px-3 text-start border-t-2 border-x-2 ${borderColor}`}
								>
									{data.nama}
								</td>
								<td
									className={`py-1 border-t-2 border-x-2  ${borderColor} px-3`}
								>
									{data.jk}
								</td>
								{data?.days.map((day, index) => (
									<td
										key={index}
										className={`py-1 cursor-default border-t-2 border-x-2 ${borderColor}`}
									>
										<ModalUpdateAbsensi
											datas={day}
											nis={data.nis}
											// tanggal={day.tanggal}
											title="Edit Data Absensi"
											key={index}
											label={loopingData(day)}
										/>
										{/* {loopingData(day)} */}
									</td>
								))}
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
};

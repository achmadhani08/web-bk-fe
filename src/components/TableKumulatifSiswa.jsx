import { datas } from "autoprefixer";

export default function TableKumulatifSiswa({
	datas,
	title,
	borderColor,
	hoverBg,
}) {
	return (
		<div className="flex-col w-1/2">
			<div className={`py-2 border-2 ${borderColor} rounded-t-2xl`}>
				<h2 className="text-black font-medium justify-center text-xl items-center flex">
					<span className="select-none items-center flex">{title}</span>
				</h2>
			</div>
			<table className="w-full border-collapse table-auto text-slate-800">
				<tbody className="border-r-2 border-color4 w-full">
					<tr className="text-center hover:bg-color2 text-base font-medium">
						<td className="py-1 border-x-2 border-color4 w-[50%]">
							Point Pelanggaran
						</td>
						<td className="py-1 border-r-2 border-color4 w-[50%]">
							{datas.point_pelanggaran}
						</td>
					</tr>
					<tr className="text-center hover:bg-color2 text-base font-medium">
						<td className="py-1 border-t-2 border-x-2 border-color4 w-[50%]">
							Point Penghargaan
						</td>
						<td className="py-1 border-t-2 border-r-2 border-color4 w-[50%]">
							{datas.point_penghargaan}
						</td>
					</tr>
					<tr className="text-center hover:bg-color2 text-base font-medium">
						<td className="py-1 border-t-2 border-x-2 border-color4 w-[50%]">
							Total
						</td>
						<td className="py-1 border-t-2 border-r-2 border-color4 w-[50%]">
							{datas.total}
						</td>
					</tr>
					<tr className="text-center hover:bg-color2 text-base font-medium">
						<td className="py-1 border-t-2 border-x-2 border-color4 w-[50%]">
							Tindakan
						</td>
						<td className="py-1 border-t-2 border-r-2 border-color4 w-[50%]">
							{datas.tindakan}
						</td>
					</tr>
				</tbody>
			</table>
			<div className="py-3 border-2 border-color4 rounded-b-2xl"></div>
		</div>
	);
}

import Tooltip from "@mui/material/Tooltip";

export default function TablePelanggaranSiswa({
	datas,
	title,
	borderColor,
	hoverBg,
}) {
	return (
		<div className="flex-col w-1/2 relative">
			<div className={`py-2 border-2 ${borderColor} rounded-t-2xl`}>
				<h2 className="text-black font-medium justify-center text-xl items-center flex">
					<span className="select-none items-center flex">{title}</span>
				</h2>
			</div>
			<span className="p-2 bg-color4 rounded-2xl absolute top-2 right-5">
				<svg
					stroke="currentColor"
					fill="currentColor"
					strokeWidth="0"
					viewBox="0 0 24 24"
					className="text-base text-black"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M19 15v-3h-2v3h-3v2h3v3h2v-3h3v-2h-.937zM4 7h11v2H4zm0 4h11v2H4zm0 4h8v2H4z"></path>
				</svg>
			</span>
			<table
				className={`w-full border-collapse border-r-2 ${borderColor} table-auto overflow-scroll text-slate-800`}
			>
				<thead className="flex w-full">
					<tr className="text-base flex w-full font-semibold">
						<th className={`border-x-2 ${borderColor} w-[10%]`}>No.</th>
						<th className={`border-r-2 ${borderColor} w-[60%]`}>Tanggal</th>
						<th className={`border-r-2 ${borderColor} w-[15%]`}>Jenis</th>
						<th className="w-[15%]">Point</th>
					</tr>
				</thead>
				<tbody
					className="flex flex-col h-[25vh] items-center justify-between overflow-y-scroll w-full"
					// style={{ height: "25vh" }}
				>
					{datas.map((data, index) => (
						<tr
							key={index}
							className={`text-center flex w-full hover:${hoverBg} text-base font-medium`}
						>
							<td
								className={`py-1 border-t-2 border-x-2 ${borderColor} w-[10.3%]`}
							>
								{index + 1}
							</td>
							<td
								className={`py-1 border-t-2 border-r-2 ${borderColor} w-[61.7%]`}
							>
								{data.tanggal}
							</td>
							<Tooltip title={data.pelanggaran} placement="left">
								<td
									className={`py-1 border-t-2 border-r-2 ${borderColor} w-[15.4%]`}
								>
									{data.jenis}
								</td>
							</Tooltip>
							<td className={`py-1 border-t-2 ${borderColor} w-[12.6%]`}>
								{data.point}
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className={`py-3 border-2 ${borderColor} rounded-b-2xl`}></div>
		</div>
	);
}

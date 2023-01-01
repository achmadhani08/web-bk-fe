export default function TableJenjangPembinaan({
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
				<thead className="">
					<tr className="text-base w-full font-semibold">
						<th className={`border-x-2 ${borderColor} w-[10%]`}>No.</th>
						<th className={`border-r-2 ${borderColor} w-[75%]`}>Keterangan</th>
						<th className={`border-r-2 ${borderColor} w-[15%]`}>Point</th>
					</tr>
				</thead>
				<tbody className={`border-r-2 ${borderColor} w-full`}>
					{datas.map((data, index) => (
						<tr
							key={index}
							className={`text-center hover:${hoverBg} text-base font-medium`}
						>
							<td
								className={`py-1 border-t-2 border-x-2 ${borderColor} w-[10%]`}
							>
								{index + 1}
							</td>
							<td
								className={`py-1 border-t-2 border-r-2 ${borderColor} w-[75%]`}
							>
								{data.desc}
							</td>
							<td
								className={`py-1 border-t-2 border-r-2 ${borderColor} w-[15%]`}
							>
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

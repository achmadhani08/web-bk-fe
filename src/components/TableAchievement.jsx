export default function TableAchievement({ datas, borderColor, hoverBg }) {
	return (
		<table className="w-full border-collapse table-auto text-slate-800">
			<thead>
				<tr className="text-base font-semibold">
					<th className={`border-x-2 ${borderColor}`}>No</th>
					<th className={`border-x-2 ${borderColor}`}>Nama</th>
					<th className={`border-x-2 ${borderColor}`}>Kelas</th>
					<th className={`border-x-2 ${borderColor}`}>Point</th>
				</tr>
			</thead>
			<tbody>
				{datas
					?.sort((a, b) => b.point - a.point)
					.map((data, index) => (
						<tr
							className={`text-center hover:${hoverBg} text-base font-medium`}
							key={data.id}
						>
							<td className={`py-1 border-t-2 border-x-2  ${borderColor}`}>
								{index + 1}
							</td>
							<td
								className={`py-1 text-start pl-3 border-t-2 border-x-2 ${borderColor}`}
							>
								{data.nama}
							</td>
							<td className={`py-1 border-t-2 border-x-2 ${borderColor}`}>
								{data.kelas} {data.jurusan}
							</td>
							<td className={`py-1 border-t-2 border-x-2  ${borderColor}`}>
								{data.point}
							</td>
						</tr>
					))}
			</tbody>
		</table>
	);
}

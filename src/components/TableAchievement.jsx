export default function TableAchievement({ datas, color }) {
	return (
		<table className="w-full table-auto text-black">
			<thead>
				<tr className="first:rounded-tl-2xl last:rounded-tr-2xl">
					<th
						className={`border rounded-tl-2xl border-${color} text-base font-medium`}
					>
						No
					</th>
					<th className={`border border-${color} text-base font-medium`}>
						Nama
					</th>
					<th className={`border border-${color} text-base font-medium`}>
						Kelas
					</th>
					<th className={`border border-${color} text-base font-medium`}>
						Point
					</th>
				</tr>
			</thead>
			<tbody>
				{datas
					?.sort((a, b) => b.point - a.point)
					.map((data, index) => (
						<tr className="text-center" key={data.id}>
							<td className={`border border-${color}`}>{index + 1}</td>
							<td className={`border text-start pl-3 border-${color}`}>
								{data.nama}
							</td>
							<td className={`border border-${color}`}>
								{data.kelas} {data.jurusan}
							</td>
							<td className={`border border-${color}`}>{data.point}</td>
						</tr>
					))}
			</tbody>
		</table>
	);
}

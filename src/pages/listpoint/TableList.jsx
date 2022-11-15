export default function TableList({ datas, title, borderColor, hoverBg }) {
	let firstData = datas[0];

	return (
		<>
			<div className={`py-2 border-2 ${borderColor} rounded-t-2xl`}>
				<h2 className="text-black font-medium justify-center text-xl items-center flex">
					<span className="select-none items-center flex">{title}</span>
				</h2>
			</div>

			<table className="w-full border-collapse table-auto overflow-scroll text-slate-800">
				{firstData?.kategori && (
					<>
						<thead className="">
							<tr className="text-base flex w-full font-semibold">
								<th className={`border-x-2 ${borderColor} w-[10%]`}>No.</th>
								<th className={`border-r-2 ${borderColor} w-[18%]`}>
									Kategori
								</th>
								<th className={`border-r-2 ${borderColor} w-[60%]`}>
									Jenis Pelanggaran
								</th>
								<th className={`border-r-2 ${borderColor} w-[12%]`}>Point</th>
							</tr>
						</thead>
						<tbody
							className={`flex flex-col border-r-2 ${borderColor} items-center justify-between overflow-y-scroll w-full`}
							style={{ height: "63vh" }}
						>
							{datas?.map((data, index) => (
								<tr
									className={`text-center flex w-full hover:${hoverBg} text-base font-medium`}
									key={data.id}
								>
									<td
										className={`py-1 border-t-2 border-x-2  ${borderColor} w-[10.3%]`}
									>
										{index + 1}
									</td>
									<td
										className={`py-1 border-t-2 border-r-2 ${borderColor} w-[18.4%]`}
									>
										{data.kategori}
									</td>
									<td
										className={`py-1 pl-3 text-start border-t-2 border-r-2 ${borderColor} w-[61.9%]`}
									>
										{data.pelanggaran}
									</td>
									<td className={`py-1 border-t-2 ${borderColor} w-[9.4%]`}>
										{data.point}
									</td>
								</tr>
							))}
						</tbody>
					</>
				)}

				{!firstData?.kategori && (
					<>
						<thead className="flex w-full ">
							<tr className="text-base flex w-full font-semibold">
								<th className={`border-x-2 ${borderColor} w-[10%]`}>No.</th>
								<th className={` ${borderColor} w-[78%]`}>Jenis Penghargaan</th>
								<th className={`border-x-2 ${borderColor} w-[12%]`}>Point</th>
							</tr>
						</thead>
						<tbody
							className={`flex flex-col border-r-2 ${borderColor} items-center justify-between overflow-y-scroll w-full`}
							style={{ height: "63vh" }}
						>
							{datas?.map((data, index) => (
								<tr
									className={`text-center flex w-full hover:${hoverBg} text-base font-medium`}
									key={data.id}
								>
									<td
										className={`py-1 border-t-2 border-x-2 ${borderColor} w-[10.3%]`}
									>
										{index + 1}
									</td>
									<td
										className={`py-1 pl-3 text-start border-t-2 ${borderColor} w-[80.3%]`}
									>
										{data.penghargaan}
									</td>
									<td
										className={`py-1 border-t-2 border-l-2  ${borderColor} w-[9.4%]`}
									>
										{data.point}
									</td>
								</tr>
							))}
						</tbody>
					</>
				)}
			</table>

			<div className={`py-3 border-2 ${borderColor} rounded-b-2xl`}></div>
		</>
	);
}

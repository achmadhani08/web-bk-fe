import ModalUpdateDeleteSiswa from "./ModalUpdateDeleteSiswa";

export default function TableFewDataSiswa({
	datas,
	getDataSiswa,
	borderColor,
	hoverBg,
	selectedRows,
	toggleRow,
}) {
	let checkLengthData = (datas) => {
		if (datas?.length > 10) {
			return (
				<table className="w-full border-collapse table-auto text-slate-800">
					<thead className="flex w-full">
						<tr className="text-base flex w-full font-semibold">
							<th className={`border-x-2 ${borderColor} w-[10%]`}>No.</th>
							<th className={`border-r-2 ${borderColor} w-[15%]`}>NIS</th>
							<th className={`border-r-2 ${borderColor} w-[55%]`}>Nama</th>
							<th className={`border-r-2 ${borderColor} w-[20%]`}>
								Jenis Kelamin
							</th>
						</tr>
					</thead>
					<tbody
						className={`flex flex-col border-r-2 ${borderColor} items-center justify-between overflow-y-scroll w-full`}
						style={{ height: "50vh" }}
					>
						{datas?.map((data, index) => (
							<ModalUpdateDeleteSiswa
								getDataSiswa={getDataSiswa}
								datas={datas[index]}
								title="Update / Delete Siswa"
								key={index}
								label={
									<tr
										className={`${
											selectedRows.includes(data.id) ? "bg-red-400" : null
										} text-center flex w-full hover:${hoverBg} text-base font-medium`}
										key={data.id}
									>
										<td
											className={`relative w-[10.13%] py-1 border-t-2 border-x-2  ${borderColor}`}
										>
											<input
												type="checkbox"
												checked={selectedRows.includes(data.id)}
												className="checkbox border-color3 z-10 absolute top-1 left-[10px]"
												onChange={(e) => toggleRow(e, data.id)}
											/>
											{index + 1}
										</td>
										<td
											className={`w-[15.2%] py-1 border-t-2 border-r-2 ${borderColor}`}
										>
											{data.nis}
										</td>
										<td
											className={`w-[55.8%] py-1 pl-3 text-start border-t-2 border-r-2 ${borderColor}`}
										>
											{data.nama}
										</td>
										<td className={`w-[18.78%] py-1 border-t-2 ${borderColor}`}>
											{data.jk}
										</td>
									</tr>
								}
							/>
						))}
					</tbody>
				</table>
			);
		} else if (datas?.length > 0 && datas?.length <= 10) {
			return (
				<table className="w-full border-collapse table-auto text-slate-800">
					<thead className="flex w-full ">
						<tr className="text-base flex w-full font-semibold">
							<th className={`border-x-2 border-b-2 ${borderColor} w-[10%]`}>
								No.
							</th>
							<th className={`border-r-2 border-b-2 ${borderColor} w-[15%]`}>
								NIS
							</th>
							<th className={`border-r-2 border-b-2 ${borderColor} w-[55%]`}>
								Nama
							</th>
							<th className={`border-r-2 border-b-2 ${borderColor} w-[20%]`}>
								Jenis Kelamin
							</th>
						</tr>
					</thead>
					<tbody
						className={`flex flex-col border-x-2 ${borderColor} items-center overflow-y-scroll w-full`}
						style={{ height: "50vh" }}
					>
						{datas?.map((data, index) => (
							<ModalUpdateDeleteSiswa
								getDataSiswa={getDataSiswa}
								datas={datas[index]}
								title="Update / Delete Siswa"
								key={index}
								label={
									<tr
										className={`${
											selectedRows.includes(data.id) ? "bg-red-400" : null
										} text-center flex w-full hover:${hoverBg} text-base font-medium`}
										key={data.id}
									>
										<td
											className={`relative w-[10%] py-1 border-b-2 border-r-2 ${borderColor}`}
										>
											<input
												type="checkbox"
												checked={selectedRows.includes(data.id)}
												className="checkbox border-color3 z-10 absolute top-1 left-[10px]"
												onChange={(e) => toggleRow(e, data.id)}
											/>
											{index + 1}
										</td>
										<td
											className={`w-[15.2%] py-1 border-b-2 border-r-2 ${borderColor}`}
										>
											{data.nis}
										</td>
										<td
											className={`w-[55.9%] py-1 pl-3 text-start border-b-2 border-r-2 ${borderColor}`}
										>
											{data.nama}
										</td>
										<td className={`w-[18.78%] py-1 border-b-2 ${borderColor}`}>
											{data.jk}
										</td>
									</tr>
								}
							/>
						))}
					</tbody>
				</table>
			);
		} else if (datas?.length === 0) {
			return (
				<table className="w-full border-collapse table-auto text-slate-800">
					<thead className="flex w-full ">
						<tr className="text-base flex w-full font-semibold">
							<th className={`border-x-2 border-b-2 ${borderColor} w-[10%]`}>
								No.
							</th>
							<th className={`border-r-2 border-b-2 ${borderColor} w-[15%]`}>
								NIS
							</th>
							<th className={`border-r-2 border-b-2 ${borderColor} w-[55%]`}>
								Nama
							</th>
							<th className={`border-r-2 border-b-2 ${borderColor} w-[20%]`}>
								Jenis Kelamin
							</th>
						</tr>
					</thead>
					<tbody
						className={`text-xl font-semibold flex border-x-2 ${borderColor} items-center justify-center overflow-y-scroll w-full`}
						style={{ height: "50vh" }}
					>
						Tidak Ada Data Siswa
					</tbody>
				</table>
			);
		}
	};

	return checkLengthData(datas);
}

import ModalAddKelas from "../../components/ModalAddKelas";
import ModalUpdateDeleteKelas from "../../components/ModalUpdateDeleteKelas";

export default function TableList({
	getDataKelas,
	datas,
	title,
	borderColor,
	hoverBg,
}) {
	return (
		<div className="relative">
			<div className={`py-2 border-2 ${borderColor} rounded-t-2xl`}>
				<h2 className="text-black font-medium justify-center text-xl items-center flex">
					<span className="select-none items-center flex">{title}</span>
				</h2>
			</div>

			<ModalAddKelas getDataKelas={getDataKelas} title="Buat Data Kelas" />

			<table className="w-full border-collapse table-auto overflow-scroll text-slate-800">
				<thead className="flex w-full ">
					<tr className="text-base flex w-full font-semibold">
						<th className={` ${borderColor} border-l-2 w-[50%]`}>Kelas</th>
						<th className={`border-x-2 ${borderColor} w-[50%]`}>Jurusan</th>
					</tr>
				</thead>
				<tbody
					className={`flex flex-col border-r-2 ${borderColor} items-center justify-between overflow-y-scroll w-full`}
					style={{ height: "63vh" }}
				>
					{datas?.map((data, index) => (
						<ModalUpdateDeleteKelas
							getDataKelas={getDataKelas}
							datas={datas[index]}
							title="Update / Delete Kelas"
							key={index}
							label={
								<tr
									className={`text-center flex w-full hover:${hoverBg} text-base font-medium`}
									key={index}
								>
									<td
										className={`py-1 border-t-2 border-l-2 ${borderColor} w-[50.7%]`}
									>
										{data.kelas}
									</td>
									<td
										className={`py-1 border-t-2 border-l-2 ${borderColor} w-[49.3%]`}
									>
										{data.jurusan}
									</td>
								</tr>
							}
						/>
					))}
				</tbody>
			</table>

			<div className={`py-3 border-2 ${borderColor} rounded-b-2xl`}></div>
		</div>
	);
}

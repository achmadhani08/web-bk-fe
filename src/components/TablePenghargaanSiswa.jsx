import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tooltip from "@mui/material/Tooltip";

import ModalAddPointSiswa from "./ModalAddPointSiswa";
import ModalUpdateDeletePointSiswa from "./ModalUpdateDeletePointSiswa";

import {
	getListPenghargaans,
	listPenghargaanSelectors,
} from "../lib/stateManager/reducers/listPenghargaanSlice";
export default function TablePenghargaanSiswa({
	datas,
	siswa_id,
	title,
	borderColor,
	hoverBg,
}) {
	const dispatch = useDispatch();
	const listPenghargaans = useSelector(listPenghargaanSelectors.selectAll);

	useEffect(() => {
		dispatch(getListPenghargaans());
	}, [dispatch]);
	console.log(datas);
	console.log(listPenghargaans);
	return (
		<div className="flex-col w-1/2 relative">
			<div className={`py-2 border-2 ${borderColor} rounded-t-2xl`}>
				<h2 className="text-black font-medium justify-center text-xl items-center flex">
					<span className="select-none items-center flex">{title}</span>
				</h2>
			</div>

			<ModalAddPointSiswa
				listDatas={listPenghargaans}
				siswa_id={siswa_id}
				type="list_penghargaan_id"
				title="Buat Rekapan Penghargaan"
			/>

			<table
				className={`w-full border-collapse border-x-2 ${borderColor} table-auto overflow-scroll text-slate-800`}
			>
				<thead className="flex w-full">
					<tr className="text-base flex w-full font-semibold">
						<th className={`border-r-2 ${borderColor} w-[10%]`}>No.</th>
						<th className={`border-r-2 ${borderColor} w-[60%]`}>Tanggal</th>
						<th className={`border-r-2 ${borderColor} w-[15%]`}>Jenis</th>
						<th className="w-[15%]">Point</th>
					</tr>
				</thead>
				<tbody className="flex h-[25vh] flex-col items-center justify-between overflow-y-scroll w-full">
					{datas.map((data, index) => (
						<ModalUpdateDeletePointSiswa
							datas={datas[index]}
							type="list_penghargaan_id"
							siswa_id={siswa_id}
							listDatas={listPenghargaans}
							title="Edit Rekapan Penghargaan"
							key={index}
							label={
								<tr
									className={`text-center flex w-full hover:${hoverBg} text-base font-medium`}
									key={index}
								>
									<td
										className={`py-1 border-t-2 border-r-2 ${borderColor} w-[10.3%]`}
									>
										{index + 1}
									</td>
									<td
										className={`py-1 border-t-2 border-r-2 ${borderColor} w-[61.7%]`}
									>
										{data.tanggal}
									</td>
									<Tooltip title={data.desc} placement="left">
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
							}
						/>
					))}
				</tbody>
			</table>
			<div className={`py-3 border-2 ${borderColor} rounded-b-2xl`}></div>
		</div>
	);
}

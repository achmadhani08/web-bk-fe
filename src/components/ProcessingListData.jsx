import { useEffect, useState } from "react";

import { listPelanggaranColumn } from "../data/dummy/dummyListPelanggaran";
import { listPenghargaanColumn } from "../data/dummy/dummyListPenghargaan";

import TableList from "./TableList";

export default function ProcessingListData({ datas }) {
	let firstData = datas[0];

	// List Penghargaan
	const [listPenghargaanRow, setListPenghargaanRow] = useState([]);

	// List Pelanggaran
	const [listPelanggaranRow, setListPelanggaranRow] = useState([]);

	useEffect(() => {
		if (!firstData?.kategori) {
			setListPenghargaanRow(datas);
		} else if (firstData?.kategori) {
			setListPelanggaranRow(datas);
		}
	}, [datas]);

	console.log(firstData);
	console.log(listPenghargaanRow);
	console.log(listPelanggaranRow);

	return (
		<>
			{firstData?.kategori && (
				<TableList rows={listPelanggaranRow} columns={listPelanggaranColumn} />
			)}
			{!firstData?.kategori && (
				<TableList rows={listPenghargaanRow} columns={listPenghargaanColumn} />
			)}
		</>
	);
}

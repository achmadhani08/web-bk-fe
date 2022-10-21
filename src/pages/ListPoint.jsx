import { MdNotInterested, MdVerified } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
	getListPelanggarans,
	listPelanggaranSelectors,
} from "../lib/stateManager/reducers/listPelanggaranSlice";
import {
	getListPenghargaans,
	listPenghargaanSelectors,
} from "../lib/stateManager/reducers/listPenghargaanSlice";

import { dummyListPelanggaranData } from "../data/dummy/dummyListPelanggaran";
import { dummyListPenghargaanData } from "..//data/dummy/dummyListPenghargaan";

import Navbar from "../components/Navbar";
import ProcessingListData from "../components/ProcessingListData";

function ListPoint() {
	const dispatch = useDispatch();
	const listPelanggarans = useSelector(listPelanggaranSelectors.selectAll);
	const listPenghargaans = useSelector(listPenghargaanSelectors.selectAll);

	useEffect(() => {
		dispatch(getListPelanggarans());
		dispatch(getListPenghargaans());
	}, [dispatch]);

	console.log(listPenghargaans);

	return (
		<>
			<Navbar />

			<div className="bg-white flex flex-col w-full h-full">
				<div className="w-full flex">
					<div className="w-1/2 pt-12 pb-12 pl-6 pr-3">
						<div className="py-2 bg-color2 rounded-t-2xl">
							<h2 className="uppercase text-slate-800 font-semibold justify-center text-lg items-center flex">
								<MdVerified />
								<span className="mx-3 select-none">Penghargaan</span>
								<MdVerified />
							</h2>
						</div>
						{listPelanggarans?.length !== 0 && (
							<ProcessingListData datas={listPenghargaans} />
						)}
						{listPelanggarans?.length === 0 && (
							<ProcessingListData datas={dummyListPenghargaanData} />
						)}
					</div>

					<div className="w-1/2 pt-12 pb-12 pl-3 pr-6">
						<div className="py-2 bg-color2 rounded-t-2xl">
							<h2 className="uppercase text-slate-800 font-semibold justify-center text-lg items-center flex">
								<MdNotInterested />
								<span className="mx-3 select-none">Pelanggaran</span>
								<MdNotInterested />
							</h2>
						</div>
						{listPelanggarans.length !== 0 && (
							<ProcessingListData datas={listPelanggarans} />
						)}
						{listPelanggarans.length === 0 && (
							<ProcessingListData datas={dummyListPelanggaranData} />
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default ListPoint;

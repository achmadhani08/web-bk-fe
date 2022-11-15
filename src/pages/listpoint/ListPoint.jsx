import { MdNotInterested, MdVerified } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
	getListPelanggarans,
	listPelanggaranSelectors,
} from "../../lib/stateManager/reducers/listPelanggaranSlice";
import {
	getListPenghargaans,
	listPenghargaanSelectors,
} from "../../lib/stateManager/reducers/listPenghargaanSlice";

import { dummyListPelanggaranData } from "../../data/dummy/dummyList";
import { dummyListPenghargaanData } from "../../data/dummy/dummyList";

import Navbar from "../../components/Navbar";
import TableList from "./TableList";

export default function ListPoint() {
	const dispatch = useDispatch();
	const listPelanggarans = useSelector(listPelanggaranSelectors.selectAll);
	const listPenghargaans = useSelector(listPenghargaanSelectors.selectAll);

	useEffect(() => {
		dispatch(getListPelanggarans());
		dispatch(getListPenghargaans());
	}, [dispatch]);

	return (
		<>
			<Navbar />

			<div className="bg-color1 flex flex-col w-full h-full">
				<div className="w-full flex">
					<div className="w-1/2 pt-8 pb-8 pl-6 pr-3">
						{listPelanggarans?.length !== 0 ? (
							<TableList
								datas={listPenghargaans}
								title={
									<>
										<MdVerified />
										<span className="mx-3">Penghargaan</span>
										<MdVerified />
									</>
								}
								borderColor="border-color4"
								hoverBg="bg-color2"
							/>
						) : (
							<TableList
								datas={dummyListPenghargaanData}
								title={
									<>
										<MdVerified />
										<span className="mx-3">Penghargaan</span>
										<MdVerified />
									</>
								}
								borderColor="border-color4"
								hoverBg="bg-color2"
							/>
						)}
					</div>

					<div className="w-1/2 pt-8 pb-8 pl-3 pr-6">
						{listPelanggarans.length !== 0 ? (
							<TableList
								datas={listPelanggarans}
								title={
									<>
										<MdNotInterested />
										<span className="mx-3">Pelanggaran</span>
										<MdNotInterested />
									</>
								}
								borderColor="border-color4"
								hoverBg="bg-color2"
							/>
						) : (
							<TableList
								datas={dummyListPelanggaranData}
								title={
									<>
										<MdNotInterested />
										<span className="mx-3">Pelanggaran</span>
										<MdNotInterested />
									</>
								}
								borderColor="border-color4"
								hoverBg="bg-color2"
							/>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdNotInterested, MdVerified } from "react-icons/md";

import {
	getPrestasis,
	prestasiSelectors,
} from "../lib/stateManager/reducers/prestasiSlice";
import {
	getPelanggars,
	pelanggarSelectors,
} from "../lib/stateManager/reducers/pelanggarSlice";
import {
	getTodayPresents,
	todayPresentsSelectors,
} from "../lib/stateManager/reducers/todayPresentsSlice";

import TableAchievement from "../components/TableAchievement";
import Navbar from "../components/Navbar";
import CardsDashboard from "../components/CardsDashboard";

import { dummyTopList } from "../data/dummy/dummyTopList";
import { dummyTodayPresents } from "../data/dummy/dummyTodayPresents";

export default function Dashboard() {
	const dispatch = useDispatch();
	const prestasis = useSelector(prestasiSelectors.selectAll);
	const pelanggars = useSelector(pelanggarSelectors.selectAll);
	const todayPresents = useSelector(todayPresentsSelectors.selectAll);

	useEffect(() => {
		dispatch(getPrestasis());
		dispatch(getPelanggars());
		dispatch(getTodayPresents());
	}, [dispatch]);

	return (
		<>
			<Navbar />
			<div className="bg-white flex flex-col w-full h-full">
				<div className="w-full">
					{todayPresents.length !== 0 ? (
						<CardsDashboard datas={todayPresents} />
					) : (
						<CardsDashboard datas={dummyTodayPresents} />
					)}
				</div>

				<div className="w-full flex">
					<div className="w-1/2 pt-2 pb-6 pl-6 pr-3">
						<div className="bg-white rounded-2xl hover:shadow-md hover:shadow-slate-600">
							<div className="py-2 border border-color1 rounded-t-2xl">
								<h2 className="uppercase text-black font-semibold justify-center text-lg items-center flex">
									<MdVerified />
									<span className="mx-3 select-none">
										Top 10 Siswa Berprestasi
									</span>
									<MdVerified />
								</h2>
							</div>

							{prestasis.length !== 0 ? (
								<TableAchievement
									datas={prestasis}
									borderColor="border-color1"
									hoverBg="bg-color1"
								/>
							) : (
								<TableAchievement
									datas={dummyTopList}
									borderColor="border-color1"
									hoverBg="bg-color1"
								/>
							)}
							<div className="py-3 border border-color1 rounded-b-2xl"></div>
						</div>
					</div>

					<div className="w-1/2 pt-2 pb-6 pl-3 pr-6">
						<div className="bg-white rounded-2xl hover:shadow-lg hover:shadow-slate-600">
							<div className="py-2 border border-color1 rounded-t-2xl">
								<h2 className="uppercase text-black font-semibold justify-center text-lg items-center flex">
									<MdNotInterested />
									<span className="mx-3 select-none">
										Top 10 Siswa Pelanggar
									</span>
									<MdNotInterested />
								</h2>
							</div>

							{pelanggars.length !== 0 ? (
								<TableAchievement
									datas={pelanggars}
									borderColor="border-color1"
									hoverBg="bg-color1"
								/>
							) : (
								<TableAchievement
									datas={dummyTopList}
									borderColor="border-color1"
									hoverBg="bg-color1"
								/>
							)}
							<div className="py-3 border border-color1 rounded-b-2xl"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdNotInterested, MdVerified } from "react-icons/md";

import {
	getPrestasis,
	prestasiSelectors,
} from "../../lib/stateManager/reducers/prestasiSlice";
import {
	getPelanggars,
	pelanggarSelectors,
} from "../../lib/stateManager/reducers/pelanggarSlice";
import {
	getTodayPresents,
	todayPresentsSelectors,
} from "../../lib/stateManager/reducers/todayPresentsSlice";

import Navbar from "../../components/Navbar";
import CardsDashboard from "./CardsDashboard";
import TableAchievement from "./TableAchievement";

import { dummyTopList } from "../../data/dummy/dummyTopList";
import { dummyTodayPresents } from "../../data/dummy/dummyTodayPresents";

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

			<div className="bg-color1 flex flex-col w-full h-full">
				<div className="w-full">
					{todayPresents.length !== 0 ? (
						<CardsDashboard datas={todayPresents} />
					) : (
						<CardsDashboard datas={dummyTodayPresents} />
					)}
				</div>

				<div className="w-full flex">
					<div className="w-1/2 pt-2 pb-6 pl-6 pr-3">
						<div
							id="prestasi"
							className="bg-color1 rounded-2xl hover:shadow hover:shadow-slate-500"
						>
							{prestasis.length !== 0 ? (
								<TableAchievement
									datas={prestasis}
									title="Top 10 Siswa Berprestasi"
									icon={<MdVerified />}
									borderColor="border-color4"
									hoverBg="bg-color2"
								/>
							) : (
								<TableAchievement
									datas={dummyTopList}
									title="Top 10 Siswa Berprestasi"
									icon={<MdVerified />}
									borderColor="border-color4"
									hoverBg="bg-color2"
								/>
							)}
						</div>
					</div>

					<div className="w-1/2 pt-2 pb-6 pl-3 pr-6">
						<div className="bg-color1 rounded-2xl hover:shadow hover:shadow-slate-500">
							{pelanggars.length !== 0 ? (
								<TableAchievement
									datas={pelanggars}
									title="Top 10 Siswa Pelanggar"
									icon={<MdNotInterested />}
									borderColor="border-color4"
									hoverBg="bg-color2"
								/>
							) : (
								<TableAchievement
									datas={dummyTopList}
									title="Top 10 Siswa Pelanggar"
									icon={<MdNotInterested />}
									borderColor="border-color4"
									hoverBg="bg-color2"
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

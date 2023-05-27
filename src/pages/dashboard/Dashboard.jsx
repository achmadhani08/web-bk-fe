import { useContext, useEffect, useState } from "react";
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
	getTodayPresences,
	todayPresencesSelectors,
} from "../../lib/stateManager/reducers/todayPresencesSlice";

import Navbar from "../../components/Navbar";
import CardsDashboard from "./CardsDashboard";
import TableAchievement from "./TableAchievement";

import { dummyTopList } from "../../data/dummy/dummyTopList";
import { dummyTodayPresences } from "../../data/dummy/dummyTodayPresences";
import { UserContext } from "../../App";

export default function Dashboard() {
	const { authenticated } = useContext(UserContext);
	const dispatch = useDispatch();
	const apiPrestasis = useSelector(prestasiSelectors.selectAll);
	const apiPelanggars = useSelector(pelanggarSelectors.selectAll);
	const [prestasis, setPrestasis] = useState(apiPrestasis);
	const [pelanggars, setPelanggars] = useState(apiPelanggars);
	const todayPresences = useSelector(todayPresencesSelectors.selectAll);

	useEffect(() => {
		dispatch(getPrestasis());
		dispatch(getPelanggars());
		dispatch(getTodayPresences());
		console.log(authenticated.isLogin);
	}, [dispatch]);

	useEffect(() => {
		setPelanggars(apiPelanggars);
		// console.log("set data pelanggar");
	}, [apiPelanggars]);
	useEffect(() => {
		setPrestasis(apiPrestasis);
		// console.log("set data prestasi");
	}, [apiPrestasis]);

	useEffect(() => {
		if (apiPrestasis?.length > 0 && prestasis?.length < 10) {
			setPrestasis([
				...prestasis,
				{
					id: prestasis?.length + 1,
					nama: "-",
					kelas: "-",
					jurusan: "",
					point: "-",
				},
			]);
			// console.log(`Data Prestasi kurang ${10 - prestasis?.length}`);
		}
		if (apiPelanggars?.length > 0 && pelanggars?.length < 10) {
			// console.log(`Data Pelanggar kurang ${10 - pelanggars?.length}`);
			setPelanggars([
				...pelanggars,
				{
					id: pelanggars?.length + 1,
					nama: "-",
					kelas: "-",
					jurusan: "",
					point: "-",
				},
			]);
		}
	}, [prestasis, pelanggars]);

	// console.log(apiPelanggars?.length);
	// console.log(apiPrestasis?.length);
	// console.log(pelanggars, "pelanggar");
	// console.log(prestasis, "prestasi");
	// console.log(todayPresences, "todayPresences");

	return (
		<>
			<Navbar />

			<div className="bg-color1 flex flex-col w-full h-full">
				<div className="w-full">
					{todayPresences?.length !== 0 ? (
						<CardsDashboard datas={todayPresences} />
					) : (
						<CardsDashboard datas={dummyTodayPresences} />
					)}
				</div>

				<div className="w-full flex">
					<div className="w-1/2 pt-2 pb-6 pl-6 pr-3">
						<div
							id="prestasi"
							className="bg-color1 rounded-2xl hover:shadow hover:shadow-slate-500"
						>
							{apiPrestasis?.length !== 0 ? (
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
							{apiPelanggars?.length !== 0 ? (
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

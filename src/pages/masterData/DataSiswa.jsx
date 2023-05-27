import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../../components/Navbar";
import Filter from "./Filter";
import TableSiswa from "./TableSiswa";

import {
	getKelasJurusans,
	kelasJurusanSelectors,
} from "../../lib/stateManager/reducers/kelasJurusanSlice";
import { getSiswas } from "../../lib/stateManager/reducers/API/siswa";
import { UserContext } from "../../App";

export default function DataSiswa() {
	const dispatch = useDispatch();
	const { loading, setLoading } = useContext(UserContext);
	const kelasJurusans = useSelector(kelasJurusanSelectors.selectAll);
	const [request, setRequest] = useState({
		kelas: 12,
		jurusan: "AKL1",
	});
	const [dataSiswa, setDataSiswa] = useState(null);

	const getDataSiswa = () => getSiswas(setDataSiswa, request, setLoading);

	useEffect(() => {
		dispatch(getKelasJurusans(setLoading));
		getDataSiswa();
	}, []);

	useEffect(() => {
		setLoading(true);
		const timer = setTimeout(() => {
			getDataSiswa();
		}, 2000);
		return () => {
			clearTimeout(timer);
			setLoading(false);
		};
	}, [request]);

	return (
		<div className="min-h-screen bg-color1">
			<Navbar />
			<div className="w-full sticky top-[5.5rem] z-10">
				<Filter
					request={request}
					kelasJurusans={kelasJurusans}
					setRequest={setRequest}
				/>
			</div>
			<div className="w-full py-6 px-6">
				{loading ? (
					<div className="bg-color2 gap-4 flex-col text-center h-[65vh] rounded-2xl flex justify-center items-center">
						<h2 className="text-color4 text-2xl">Loading</h2>
						<progress className="progress indeterminate:after:bg-color4 w-56"></progress>
					</div>
				) : (
					<TableSiswa
						getDataSiswa={getDataSiswa}
						datas={dataSiswa}
						kelas={request.kelas}
						jurusan={request.jurusan}
						title={`Data Siswa ${request.kelas} ${request.jurusan}`}
						borderColor="border-color4"
						hoverBg="bg-color2"
					/>
				)}
			</div>
		</div>
	);
}

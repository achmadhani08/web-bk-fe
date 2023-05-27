import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect } from "react";

import Navbar from "../../components/Navbar";
import TableKelas from "./TableKelas";

import {
	getKelasJurusans,
	kelasJurusanSelectors,
} from "../../lib/stateManager/reducers/kelasJurusanSlice";
import { UserContext } from "../../App";

export default function DataKelas() {
	const dispatch = useDispatch();
	const kelasJurusan = useSelector(kelasJurusanSelectors.selectAll);
	const { loading, setLoading } = useContext(UserContext);

	const getDataKelas = () => dispatch(getKelasJurusans(setLoading));

	useEffect(() => {
		getDataKelas();
	}, [dispatch]);
	return (
		<div className="min-h-screen bg-color1">
			<Navbar />

			<div className="w-full py-8 px-6">
				{loading ? (
					<div className="bg-color2 gap-4 flex-col text-center h-[78vh] rounded-2xl flex justify-center items-center">
						<h2 className="text-color4 text-2xl">Loading</h2>
						<progress className="progress indeterminate:after:bg-color4 w-56"></progress>
					</div>
				) : (
					<TableKelas
						getDataKelas={getDataKelas}
						datas={kelasJurusan}
						title="Data Kelas - Jurusan SMK Negeri 10 Jakarta"
						borderColor="border-color4"
						hoverBg="bg-color2"
					/>
				)}
			</div>
		</div>
	);
}

import { FaUserCheck, FaUserTimes } from "react-icons/fa";
import { MdMail, MdSick, MdWatchLater } from "react-icons/md";
import CardDashboard from "./CardDashboard";

function CardsDashboard({ datas }) {
	return (
		<div className="flex gap-4 px-6 py-6 select-none cursor-default">
			{/* Hadir */}
			{/* <div className="flex-1 group stats bg-green-600 hover:bg-green-700 shadow-xl">
				<div className="stat text-white">
					<div className="stat-figure bg-green-500 group-hover:bg-green-600 rounded-lg p-2">
						<FaUserCheck size={20} />
					</div>
					<div className="stat-title opacity-80 font-semibold text-lg">
						Hadir
					</div>
					<div className="stat-value">
						412 <span className="text-2xl">Siswa</span>
					</div>
					<div className="stat-desc opacity-80 font-bold text-base">
						12 October 2022
					</div>
				</div>
			</div> */}

			{datas.map((data) => {
				switch (data.category) {
					case "Hadir":
						return (
							<CardDashboard
								key={data.id}
								bgColor="bg-color1"
								bgColorHover="bg-color2"
								bgIcon="bg-color2"
								bgIconHover="bg-color1"
								icon={<FaUserCheck size={20} />}
								category={data.category}
								sum={data.siswa}
								date={data.date}
							/>
						);
						break;
					case "Izin":
						return (
							<CardDashboard
								key={data.id}
								bgColor="bg-color2"
								bgColorHover="bg-color1"
								bgIcon="bg-color1"
								bgIconHover="bg-color2"
								icon={<MdMail size={20} />}
								category={data.category}
								sum={data.siswa}
								date={data.date}
							/>
						);
						break;
					case "Sakit":
						return (
							<CardDashboard
								key={data.id}
								bgColor="bg-color1"
								bgColorHover="bg-color2"
								bgIcon="bg-color2"
								bgIconHover="bg-color1"
								icon={<MdSick size={20} />}
								category={data.category}
								sum={data.siswa}
								date={data.date}
							/>
						);
						break;
					case "Terlambat":
						return (
							<CardDashboard
								key={data.id}
								bgColor="bg-color2"
								bgColorHover="bg-color1"
								bgIcon="bg-color1"
								bgIconHover="bg-color2"
								icon={<MdWatchLater size={20} />}
								category={data.category}
								sum={data.siswa}
								date={data.date}
							/>
						);
						break;
					case "Alfa":
						return (
							<CardDashboard
								key={data.id}
								bgColor="bg-color1"
								bgColorHover="bg-color2"
								bgIcon="bg-color2"
								bgIconHover="bg-color1"
								icon={<FaUserTimes size={20} />}
								category={data.category}
								sum={data.siswa}
								date={data.date}
							/>
						);
						break;
					default:
						break;
				}
			})}

			{/* Izin */}
			{/* <div className="flex-1 stats bg-blue-600 group hover:bg-blue-700 shadow-xl">
				<div className="stat text-white">
					<div className="stat-figure bg-blue-500 group-hover:bg-blue-600 rounded-lg p-2">
						<MdMail size={20} />
					</div>
					<div className="stat-title opacity-80 font-semibold text-lg">
						Izin
					</div>
					<div className="stat-value">
						12 <span className="text-2xl">Siswa</span>
					</div>
					<div className="stat-desc opacity-80 font-bold text-base">
						12 October 2022
					</div>
				</div>
			</div> */}

			{/* Sakit */}
			{/* <div className="flex-1 stats bg-yellow-500 group hover:bg-yellow-600 shadow-xl">
				<div className="stat text-white">
					<div className="stat-figure bg-yellow-400 group-hover:bg-yellow-500 rounded-lg p-2">
						<MdSick size={20} />
					</div>
					<div className="stat-title opacity-80 font-semibold text-lg">
						Sakit
					</div>
					<div className="stat-value">
						10 <span className="text-2xl">Siswa</span>
					</div>
					<div className="stat-desc opacity-80 font-bold text-base">
						12 October 2022
					</div>
				</div>
			</div> */}

			{/* Terlambat */}
			{/* <div className="flex-1 stats bg-orange-500 group hover:bg-orange-600 shadow-xl">
				<div className="stat text-white">
					<div className="stat-figure bg-orange-400 group-hover:bg-orange-500 rounded-lg p-2">
						<MdWatchLater size={20} />
					</div>
					<div className="stat-title opacity-80 font-semibold text-lg">
						Terlambat
					</div>
					<div className="stat-value">
						20 <span className="text-2xl">Siswa</span>
					</div>
					<div className="stat-desc opacity-80 font-bold text-base">
						12 October 2022
					</div>
				</div>
			</div> */}

			{/* Alfa / Tanpa Keterangan */}
			{/* <div className="flex-1 stats bg-red-600 group hover:bg-red-700 shadow-xl">
				<div className="stat text-white">
					<div className="stat-figure bg-red-500 group-hover:bg-red-600 rounded-lg p-2">
						<FaUserTimes size={20} />
					</div>
					<div className="stat-title opacity-80 font-semibold text-lg">
						Alfa
					</div>
					<div className="stat-value">
						5 <span className="text-2xl">Siswa</span>
					</div>
					<div className="stat-desc opacity-80  font-bold text-base">
						12 October 2022
					</div>
				</div>
			</div> */}
		</div>
	);
}

export default CardsDashboard;

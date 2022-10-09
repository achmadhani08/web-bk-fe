import { FaUserCheck, FaUserTimes } from "react-icons/fa";
import { MdMail, MdSick, MdWatchLater } from "react-icons/md";

function CardsDashboard() {
	return (
		<div className="flex gap-4 px-6 py-6 cursor-default">
			{/* Hadir */}
			<div className="flex-1 stats bg-green-600 shadow-xl">
				<div className="stat text-white">
					<div className="stat-figure bg-green-500 rounded-lg p-2">
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
			</div>

			{/* Izin */}
			<div className="flex-1 stats bg-blue-600 shadow-xl">
				<div className="stat text-white">
					<div className="stat-figure bg-blue-500 rounded-lg p-2">
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
			</div>

			{/* Sakit */}
			<div className="flex-1 stats bg-yellow-500 shadow-xl">
				<div className="stat text-white">
					<div className="stat-figure bg-yellow-400 rounded-lg p-2">
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
			</div>

			{/* Terlambat */}
			<div className="flex-1 stats bg-orange-500 shadow-xl">
				<div className="stat text-white">
					<div className="stat-figure bg-orange-400 rounded-lg p-2">
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
			</div>

			{/* Alfa / Tanpa Keterangan */}
			<div className="flex-1 stats bg-red-600 shadow-xl">
				<div className="stat text-white">
					<div className="stat-figure bg-red-500 rounded-lg p-2">
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
			</div>
		</div>
	);
}

export default CardsDashboard;

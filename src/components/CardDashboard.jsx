export default function CardDashboard({
	bgColor,
	bgIcon,
	icon,
	category,
	sum,
	// date,
}) {
	let bulan = new Date().getMonth();
	let tanggal = new Date().getDate();
	let tahun = new Date().getFullYear();

	switch (bulan) {
		case 0:
			bulan = "Januari";
			break;
		case 1:
			bulan = "Februari";
			break;
		case 2:
			bulan = "Maret";
			break;
		case 3:
			bulan = "April";
			break;
		case 4:
			bulan = "Mei";
			break;
		case 5:
			bulan = "Juni";
			break;
		case 6:
			bulan = "Juli";
			break;
		case 7:
			bulan = "Agustus";
			break;
		case 8:
			bulan = "September";
			break;
		case 9:
			bulan = "Oktober";
			break;
		case 10:
			bulan = "November";
			break;
		case 11:
			bulan = "Desember";
			break;
		default:
			break;
	}
	console.log(tanggal, bulan, tahun);
	return (
		<div
			className={`stat ${bgColor} rounded-2xl text-slate-700 shadow-md shadow-slate-500`}
		>
			<div className={`stat-figure rounded-lg p-2 ${bgIcon}`}>{icon}</div>
			<div className="stat-title opacity-80 font-semibold text-lg">
				{category}
			</div>
			<div className="stat-value">
				{sum} <span className="text-xl">Siswa</span>
			</div>
			<div className="stat-desc opacity-80 font-bold text-base">
				{tanggal} {bulan} {tahun}
			</div>
		</div>
	);
}

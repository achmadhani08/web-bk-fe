export default function CardDashboard({
	bgColor,
	bgIcon,
	icon,
	category,
	sum,
	date,
}) {
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
			<div className="stat-desc opacity-80 font-bold text-base">{date}</div>
		</div>
	);
}

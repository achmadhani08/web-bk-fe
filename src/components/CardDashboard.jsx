export default function CardDashboard({
	bgColor,
	bgIcon,
	icon,
	category,
	sum,
	date,
}) {
	return (
		<div className={`flex-1 stats ${bgColor} group shadow-md shadow-slate-500`}>
			<div className="stat text-slate-700 group-hover:text-slate-800">
				<div className={`stat-figure ${bgIcon} rounded-lg p-2`}>{icon}</div>
				<div className="stat-title opacity-80 font-semibold text-lg">
					{category}
				</div>
				<div className="stat-value">
					{sum} <span className="text-xl">Siswa</span>
				</div>
				<div className="stat-desc opacity-80 font-bold text-base">{date}</div>
			</div>
		</div>
	);
}

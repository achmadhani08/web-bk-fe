export default function CardDashboard({
	bgColor,
	bgIcon,
	icon,
	category,
	sum,
	date,
}) {
	return (
		<div className={`stat ${bgColor} rounded-2xl`}>
			<div className={`stat-figure rounded-lg p-2 ${bgIcon} text-slate-800`}>
				{icon}
			</div>
			<div className="stat-title font-semibold text-base text-slate-700">
				{category}
			</div>
			<div className="stat-value text-slate-800">
				{sum} <span className="text-xl">Siswa</span>
			</div>
			<div className="stat-desc text-slate-700 font-semibold text-base">
				{date}
			</div>
		</div>
	);
}

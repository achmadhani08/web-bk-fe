function CardDashboard({
	bgColor,
	bgColorHover,
	bgIcon,
	bgIconHover,
	icon,
	category,
	sum,
	date,
}) {
	return (
		<div
			className={`flex-1 stats ${bgColor} group hover:${bgColorHover} shadow-md shadow-slate-800`}
		>
			<div className="stat text-slate-700 group-hover:text-slate-800">
				<div
					className={`stat-figure ${bgIcon} group-hover:${bgIconHover} rounded-lg p-2`}
				>
					{icon}
				</div>
				<div className="stat-title opacity-80 font-semibold text-lg">
					{category}
				</div>
				<div className="stat-value">
					{sum} <span className="text-2xl">Siswa</span>
				</div>
				<div className="stat-desc opacity-80 font-bold text-base">{date}</div>
			</div>
		</div>
	);
}

export default CardDashboard;

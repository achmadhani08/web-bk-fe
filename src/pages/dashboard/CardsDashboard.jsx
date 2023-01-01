import { FaUserCheck, FaUserTimes } from "react-icons/fa";
import { MdMail, MdSick, MdWatchLater } from "react-icons/md";
import CardDashboard from "../../components/CardDashboard";

export default function CardsDashboard({ datas }) {
	return (
		<div className="flex gap-4 px-6 py-6 select-none cursor-default">
			{datas.map((data) => {
				switch (data.category) {
					case "Hadir":
						return (
							<CardDashboard
								key={data.id}
								bgColor="bg-color4"
								bgIcon="bg-color3"
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
								bgColor="bg-color3"
								bgIcon="bg-color4"
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
								bgColor="bg-color4"
								bgIcon="bg-color3"
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
								bgColor="bg-color3"
								bgIcon="bg-color4"
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
								bgColor="bg-color4"
								bgIcon="bg-color3"
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
		</div>
	);
}

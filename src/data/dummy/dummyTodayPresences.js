const date = new Date();
const formattedDate = date
	.toLocaleDateString("en-GB", {
		day: "2-digit",
		month: "long",
		year: "numeric",
	})
	.replace(/ /g, "-");

export const dummyTodayPresences = [
	{
		id: 1,
		keterangan: "Hadir",
		siswa: 0,
		tanggal: formattedDate,
	},
	{
		id: 2,
		keterangan: "Izin",
		siswa: 0,
		tanggal: formattedDate,
	},
	{
		id: 3,
		keterangan: "Sakit",
		siswa: 0,
		tanggal: formattedDate,
	},
	{
		id: 4,
		keterangan: "Terlambat",
		siswa: 0,
		tanggal: formattedDate,
	},
	{
		id: 5,
		keterangan: "Alfa",
		siswa: 0,
		tanggal: formattedDate,
	},
];

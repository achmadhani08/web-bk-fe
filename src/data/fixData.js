export const urlAPI = {
	absen: "http://127.0.0.1:8000/api/absen",
	base: "http://127.0.0.1:8000/api",
	kelas: "http://127.0.0.1:8000/api/kelas",
	pelanggaran: "http://127.0.0.1:8000/api/pelanggaran",
	penghargaan: "http://127.0.0.1:8000/api/penghargaan",
	point: "http://127.0.0.1:8000/api/point",
	siswa: "http://127.0.0.1:8000/api/siswa"
}

export const classData = [{ value: "10" }, { value: "11" }, { value: "12" }];

export const monthData = [
	{
		value: "januari",
		label: "Januari",
	},
	{
		value: "februari",
		label: "Februari",
	},
	{
		value: "maret",
		label: "Maret",
	},
	{
		value: "april",
		label: "April",
	},
	{
		value: "mei",
		label: "Mei",
	},
	{
		value: "juni",
		label: "Juni",
	},
	{
		value: "juli",
		label: "Juli",
	},
	{
		value: "agustus",
		label: "Agustus",
	},
	{
		value: "september",
		label: "September",
	},
	{
		value: "oktober",
		label: "Oktober",
	},
	{
		value: "november",
		label: "November",
	},
	{
		value: "desember",
		label: "Desember",
	},
];

export const diciplineData = [
	{
		desc: "Teguran/Pembinaan Umum",
		point: "< 76",
	},
	{
		desc: "Peringatan Pertama ( SP1 )",
		point: "76 - 100",
	},
	{
		desc: "Peringatan Kedua ( SP2 )",
		point: "101 - 200",
	},
	{
		desc: "Peringatan Ketiga ( SP3 )",
		point: "201 - 300",
	},
	{
		desc: "Peringatan Keempat ( SP4 ) / Dikembalikan kepada Orang Tua/Wali",
		point: "> 300",
	},
];

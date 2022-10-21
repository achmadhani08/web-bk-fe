export const listPelanggaranColumn = [
	{ field: "id", headerName: "No", sortable: false, width: 50 },
	{
		field: "kategori",
		headerName: "Kategori",
		sortable: false,
		width: 100,
	},
	{
		field: "pelanggaran",
		headerName: "Jenis Pelanggaran",
		sortable: false,
		width: 420,
	},
	{
		field: "point",
		headerName: "Point",
		type: "number",
		menubar: false,
		width: 50,
	},
];

export const dummyListPelanggaranData = [
	{
		id: 1,
		kategori: "Kelakuan",
		pelanggaran: "Melawan Guru / Karyawan secara langsung (fisik)",
		point: 300,
	},
	{
		id: 2,
		kategori: "Kelakuan",
		pelanggaran: "Mengedarkan, Menyimpan dan Memakai Narkoba / Miras",
		point: 300,
	},
	{
		id: 3,
		kategori: "Kelakuan",
		pelanggaran: "Menikah legal / ilegal",
		point: 300,
	},
	{
		id: 4,
		kategori: "Kelakuan",
		pelanggaran: "Tawuran di lingkungan maupun di luar sekolah",
		point: 300,
	},
	{
		id: 5,
		kategori: "Kelakuan",
		pelanggaran:
			"Menjadi anggota perkumpulan anak-anak nakal/organisasi terlarang",
		point: 300,
	},
	{
		id: 6,
		kategori: "Kelakuan",
		pelanggaran:
			"Peserta didik putri yang hamil dan peserta didik laki-laki yang menghamili",
		point: 300,
	},
	{
		id: 7,
		kategori: "Kelakuan",
		pelanggaran: "Menjadi terdakwa dalam perkara tindak pidana kriminal",
		point: 300,
	},
	{
		id: 8,
		kategori: "Kelakuan",
		pelanggaran: "Peserta didik laki-laki yang ditindik",
		point: 300,
	},
	{
		id: 9,
		kategori: "Kelakuan",
		pelanggaran: "Peserta didik perempuan yang ditindik tidak wajar",
		point: 300,
	},
	{ id: 10, kategori: "Kelakuan", pelanggaran: "Bertato", point: 300 },
];

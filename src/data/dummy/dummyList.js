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

export const listPenghargaanColumn = [
	{ field: "id", headerName: "No", sortable: false, width: 50 },
	{
		field: "penghargaan",
		headerName: "Jenis Penghargaan",
		sortable: false,
		width: 520,
	},
	{
		field: "point",
		headerName: "Point",
		type: "number",
		menubar: false,
		width: 50,
	},
];

export const dummyListPenghargaanData = [
	{
		id: 1,
		penghargaan: "Menjadi petugas upacara tingkat sekolah",
		point: 5,
	},
	{
		id: 2,
		penghargaan: "Menjadi pengurus kelas dan menjalankan tugas dengan baik",
		point: 5,
	},
	{
		id: 3,
		penghargaan: "Melaksanakan tugas kebersihan sekolah",
		point: 10,
	},
	{
		id: 4,
		penghargaan: "Menjadi petugas pengibar bendera tingkat wilayah",
		point: 10,
	},
	{
		id: 5,
		penghargaan: "Menjadi ketua kelas dan bertugas dengan baik",
		point: 10,
	},
	{
		id: 6,
		penghargaan: "Membawa nama baik sekolah tingkat kecamatan",
		point: 10,
	},
	{
		id: 7,
		penghargaan:
			"Menjadi petugas pengibar bendera tingkat provinsi dan nasional",
		point: 20,
	},
	{
		id: 8,
		penghargaan: "Menjadi pengurus OSIS dan bertugas dengan baik",
		point: 20,
	},
	{
		id: 9,
		penghargaan:
			"Membawa nama baik sekolah di tingkat wilayah bidang akademik atau non bidang akademik",
		point: 20,
	},
	{
		id: 10,
		penghargaan:
			"Membawa nama baik sekolah di tingkat provinsi bidang akademik atau non akademik",
		point: 25,
	},
	{
		id: 11,
		penghargaan:
			"Membawa nama baik sekolah di tingkat nasional bidang akademik atau non bidang akademik",
		point: 25,
	},
	{
		id: 12,
		penghargaan:
			"Membawa nama baik sekolah di tingkat internasional bidang akademik atau non akademik",
		point: 25,
	},
];

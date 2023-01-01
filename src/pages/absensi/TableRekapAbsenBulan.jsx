import { DataTable } from "primereact/datatable";
import { ColumnGroup } from "primereact/columngroup";
import { Column } from "primereact/column";
import { Row } from "primereact/row";
import { FaRegFilePdf } from "react-icons/fa";

import { dataRekapanAbsensiBulan } from "../../data/dummy/dummyRekapAbsen";

export const TableRekapAbsenBulan = ({ request }) => {
	const { kelas, jurusan, bulan, tahun } = request;

	// const dt = useRef(null);

	// let dayData = dataRekapanAbsensi.map((data) => {
	// 	data.days.map((day, index) => {
	// 		let dayData = { date: index + 1, info: day[index] };
	// 	});
	// });
	const cols = [
		{ field: "absen", header: "No. Absen", frozen: true },
		{ field: "nis", header: "NIS", frozen: true },
		{ field: "nama", header: "Nama", frozen: true },
		{ field: "gender", header: "Jenis Kelamin", frozen: false },
		{ field: "kelas", header: "Kelas", frozen: false },
		// { field: dayData.date, header: dayData.date, frozen: false },
	];

	const exportColumns = cols.map((col) => ({
		title: col.header,
		dataKey: col.field,
	}));

	// const exportPdf = () => {
	// 	const doc = new jsPDF();
	// 	doc.autoTable({ html: "#export-table" });
	// 	doc.save(`rekapan-absensi-${kelas}-${jurusan}-${bulan}-${tahun}.pdf`);
	// };

	const exportPdf = () => {
		import("jspdf").then((jsPDF) => {
			import("jspdf-autotable").then(() => {
				const doc = new jsPDF.default("landscape", 0, 0);
				doc.autoTable(exportColumns, dataRekapanAbsensiBulan);
				doc.save(`rekapan-absensi-${kelas}-${jurusan}-${bulan}-${tahun}.pdf`);
			});
		});
	};

	const headerGroup = (
		<ColumnGroup>
			<Row>
				<Column
					header={`Rekapan Absensi ${kelas} ${jurusan} ${bulan} ${tahun}`}
					// colSpan={35}
					style={{ width: "100%" }}
				/>
			</Row>
			<Row>
				<Column
					header="No. Absen"
					colSpan={1}
					rowSpan={2}
					// style={{ flexGrow: 1, flexBasis: "10px" }}
				/>
				<Column
					header="NIS"
					colSpan={2}
					rowSpan={2}
					// style={{ flexGrow: 1, flexBasis: "50px" }}
				/>
				<Column
					header="Nama"
					colSpan={4}
					rowSpan={2}
					// style={{ flexGrow: 1, flexBasis: "200px" }}
				/>
				<Column
					header="Jenis Kelamin"
					colSpan={3}
					rowSpan={2}
					// style={{ flexGrow: 1, flexBasis: "80px" }}
				/>
				<Column
					header="Kelas"
					colSpan={2}
					rowSpan={2}
					// style={{ flexGrow: 1, flexBasis: "50px" }}
				/>
				{/* <Column header="Tanggal" colSpan={31} rowSpan={1} />
				<Column header="Jumlah" colSpan={5} rowSpan={1} /> */}
			</Row>
			{/* <Row>
				<Column header="1" colSpan={1} />
				<Column header="2" colSpan={1} />
				<Column header="3" colSpan={1} />
				<Column header="4" colSpan={1} />
				<Column header="5" colSpan={1} />
				<Column header="6" colSpan={1} />
				<Column header="7" colSpan={1} />
				<Column header="8" colSpan={1} />
				<Column header="9" colSpan={1} />
				<Column header="10" colSpan={1} />
				<Column header="11" colSpan={1} />
				<Column header="12" colSpan={1} />
				<Column header="13" colSpan={1} />
				<Column header="14" colSpan={1} />
				<Column header="15" colSpan={1} />
				<Column header="16" colSpan={1} />
				<Column header="17" colSpan={1} />
				<Column header="18" colSpan={1} />
				<Column header="19" colSpan={1} />
				<Column header="20" colSpan={1} />
				<Column header="21" colSpan={1} />
				<Column header="22" colSpan={1} />
				<Column header="23" colSpan={1} />
				<Column header="24" colSpan={1} />
				<Column header="25" colSpan={1} />
				<Column header="26" colSpan={1} />
				<Column header="27" colSpan={1} />
				<Column header="28" colSpan={1} />
				<Column header="29" colSpan={1} />
				<Column header="30" colSpan={1} />
				<Column header="31" colSpan={1} />
				<Column header="H" colSpan={1} />
				<Column header="I" colSpan={1} />
				<Column header="S" colSpan={1} />
				<Column header="T" colSpan={1} />
				<Column header="A" colSpan={1} />
				{dataRekapanAbsensi.map((data) => {
					data.days.map((day, index) => (
						<Column key={index} header={index + 1} field={day[index]} />
					));
				})}
			</Row> */}
		</ColumnGroup>
	);

	const header = (
		<div className="flex justify-center items-center">
			<h2>
				Rekapan Absensi {kelas} {jurusan} {bulan} {tahun}
			</h2>
		</div>
	);

	return (
		<>
			<div className="w-full">
				<DataTable
					id="export-table"
					scrollable
					// scrollDirection="both"
					// ref={dt}
					header={header}
					// headerColumnGroup={headerGroup}
					value={dataRekapanAbsensiBulan}
					dataKey="id"
					showGridlines
					responsiveLayout="scroll"
				>
					{cols.map((col, index) => (
						<Column
							key={index}
							field={col.field}
							frozen={col.frozen}
							header={col.header}
						/>
					))}
					{/* <Column
						field="absen"
						frozen
						className="justify-center items-center"
						style={{ flexGrow: 1, flexBasis: "10px" }}
					/>
					<Column
						field="nis"
						frozen
						className="justify-center items-center"
						style={{ flexGrow: 1, flexBasis: "50px" }}
					/>
					<Column
						field="nama"
						frozen
						className="justify-center items-center"
						style={{ flexGrow: 1, flexBasis: "200px" }}
					/>
					<Column
						field="gender"
						className="justify-center items-center"
						style={{ flexGrow: 1, flexBasis: "80px" }}
					/>
					<Column
						field="kelas"
						className="justify-center items-center"
						style={{ flexGrow: 1, flexBasis: "50px" }}
					/> */}
					{/* <Column field="days" /> */}
				</DataTable>
			</div>
			<button
				className="btn fixed bottom-[1.5rem] right-[1.5rem] btn-square bg-color1 hover:bg-color2 text-black shadow-sm shadow-slate-400 border-none"
				onClick={exportPdf}
			>
				<FaRegFilePdf size={20} />
			</button>
		</>
	);
};

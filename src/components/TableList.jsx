import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export default function TableList({ rows, columns }) {
	return (
		<div style={{ height: "68vh", width: "100%" }}>
			<DataGrid
				rows={rows}
				columns={columns}
				// pageSize={6}
				disableSelectionOnClick
				disableColumnFilter
				disableColumnSelector
				disableDensitySelector
				rowsPerPageOptions={[6, 12]}
				// components={{ Toolbar: GridToolbar }}
				// componentsProps={{
				// 	toolbar: {
				// 		showQuickFilter: true,
				// 		quickFilterProps: { debounceMs: 500 },
				// 	},
				// }}
			/>
		</div>
	);
}

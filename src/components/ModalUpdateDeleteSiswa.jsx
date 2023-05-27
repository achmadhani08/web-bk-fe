import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import {
	TextField,
	IconButton,
	Box,
	Typography,
	Modal,
	ToggleButton,
	ToggleButtonGroup,
} from "@mui/material";

import {
	deleteSiswa,
	updateSiswa,
} from "../lib/stateManager/reducers/API/siswa";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	borderRadius: "1rem",
	transform: "translate(-50%, -50%)",
	width: 400,
	color: "black",
	bgcolor: "#E8DFCA",
	boxShadow: 24,
	p: 4,
};

export default function ModalUpdateDeleteSiswa({
	datas,
	title,
	label,
	getDataSiswa,
}) {
	const [request, setRequest] = useState({
		nama: datas.nama,
		jk: datas.jk,
		nis: datas.nis,
	});

	const [open, setOpen] = useState(false);

	const handleOpen = (e) => {
		if (e.ctrlKey || e.shiftKey) {
			setOpen(true);
		}
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleChange = (e) => {
		setRequest({
			...request,
			[e.target.name]: e.target.value,
		});
	};

	const handleRadio = (event, newValue) => {
		setRequest({
			...request,
			jk: newValue,
		});
		if (newValue === null) {
			return;
		}
	};

	const handleDelete = async () => {
		await deleteSiswa(datas.id);
		getDataSiswa();
		setOpen(false);
	};

	const handleSave = async () => {
		await updateSiswa(datas.id, request);
		getDataSiswa();
		setOpen(false);
	};

	return (
		<>
			<div
				className={`w-full ${datas.jenis !== null && "cursor-pointer"}`}
				onMouseDown={(e) => handleOpen(e)}
			>
				{label}
			</div>

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						{title}
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						<div className="flex flex-col gap-4">
							<div className="flex justify-around">
								<TextField
									className="w-[80%]"
									id="outlined-basic"
									label="Nama Lengkap"
									required
									rows={1}
									name="nama"
									variant="outlined"
									onChange={handleChange}
									value={request.nama}
								/>
							</div>

							<div className="flex gap-5 justify-center">
								<TextField
									className="w-[70%]"
									inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
									required
									id="outlined-basic"
									label="NIS"
									rows={1}
									name="nis"
									variant="outlined"
									onChange={handleChange}
									value={request.nis}
								/>
							</div>

							<div className="flex justify-around">
								<ToggleButtonGroup
									className="bg-color2"
									value={request.jk}
									exclusive
									onChange={handleRadio}
								>
									<ToggleButton value="Laki-laki">Laki-laki</ToggleButton>
									<ToggleButton value="Perempuan">Perempuan</ToggleButton>
								</ToggleButtonGroup>
							</div>
						</div>
					</Typography>
					<div className="button-action mt-5 flex justify-around">
						<IconButton
							color="error"
							aria-label="delete"
							onClick={handleDelete}
						>
							<BsTrash />
						</IconButton>

						<IconButton
							aria-label="cancel"
							sx={{
								position: "absolute",
								top: "0.5rem",
								right: "0.5rem",
							}}
							onClick={handleClose}
						>
							<MdOutlineCancel />
						</IconButton>

						<IconButton
							color="success"
							aria-label="update"
							onClick={handleSave}
						>
							<FiEdit />
						</IconButton>
					</div>
				</Box>
			</Modal>
		</>
	);
}

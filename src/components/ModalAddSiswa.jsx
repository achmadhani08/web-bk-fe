import { useState } from "react";
import { BsSave } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import {
	TextField,
	IconButton,
	Box,
	Typography,
	Modal,
	ToggleButtonGroup,
	ToggleButton,
} from "@mui/material";

import { addSiswa } from "../lib/stateManager/reducers/API/siswa";

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

export default function ModalAddSiswa({ title, kelas, jurusan, getDataSiswa }) {
	const [open, setOpen] = useState(false);

	const [request, setRequest] = useState({
		kelas: kelas,
		jurusan: jurusan,
		nama: "",
		jk: "Laki-laki",
		nis: "",
	});

	const handleRadio = (event, newValue) => {
		setRequest({
			...request,
			jk: newValue,
		});
		if (newValue === null) {
			return;
		}
	};

	const handleClose = () => {
		setRequest({
			...request,
			kelas: kelas,
			jurusan: jurusan,
			nama: "",
			jk: "Laki-laki",
			nis: "",
		});
		setOpen(false);
	};

	const handleSave = async () => {
		await addSiswa(request);
		getDataSiswa();

		console.log(request);
		handleClose();
	};

	const handleOpen = () => setOpen(true);

	const handleChange = (e) => {
		setRequest({
			...request,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			<div
				className="p-2 bg-color4 rounded-2xl absolute top-2 right-5 cursor-pointer"
				onClick={handleOpen}
			>
				<svg
					stroke="currentColor"
					fill="currentColor"
					strokeWidth="0"
					viewBox="0 0 24 24"
					className="text-base text-black"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M19 15v-3h-2v3h-3v2h3v3h2v-3h3v-2h-.937zM4 7h11v2H4zm0 4h11v2H4zm0 4h8v2H4z"></path>
				</svg>
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
							<div className="flex gap-5 justify-center">
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
							<div className="flex justify-center">
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
					<div className="button-action mt-5 flex justify-center">
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

						<IconButton color="success" aria-label="save" onClick={handleSave}>
							<BsSave />
						</IconButton>
					</div>
				</Box>
			</Modal>
		</>
	);
}

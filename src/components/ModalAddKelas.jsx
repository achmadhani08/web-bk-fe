import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsSave } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import {
	TextField,
	FormControl,
	IconButton,
	InputLabel,
	Select,
	MenuItem,
	Box,
	Typography,
	Modal,
} from "@mui/material";

import { classData } from "../data/fixData";
import {
	getKelasJurusans,
	newKelasJurusans,
} from "../lib/stateManager/reducers/kelasJurusanSlice";

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

export default function ModalAddKelas({ title }) {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);

	const [request, setRequest] = useState({
		kelas: "",
		jurusan: "",
	});
	const [jurusan, setJurusan] = useState({
		name: "",
		many: "",
	});

	useEffect(() => {
		setRequest({
			...request,
			jurusan: `${jurusan.name}${jurusan.many}`,
		});
	}, [jurusan]);

	const handleClose = () => {
		setRequest({
			...request,
			kelas: "",
			jurusan: "",
		});
		setOpen(false);
	};
	const handleSave = async (e) => {
		e.preventDefault();

		await dispatch(newKelasJurusans(request));
		dispatch(getKelasJurusans());
		setOpen(false);
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
							<div className="flex justify-around">
								<FormControl required className="w-[50%]">
									<InputLabel id="select-label">Kelas</InputLabel>
									<Select
										labelId="select-label"
										id="select"
										value={request.kelas}
										label="Kelas"
										name="kelas"
										onChange={handleChange}
										MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
									>
										{classData?.map((e, index) => (
											<MenuItem key={index} value={e.value}>
												{e.value}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</div>

							<div className="flex gap-5 justify-center">
								<TextField
									className="w-1/2"
									id="outlined-basic"
									label="Jurusan (Singkat)"
									helperText="Contoh AKL, BDP, OTKP, RPL"
									required
									rows={1}
									name="jurusan"
									// maxRows={4}
									variant="outlined"
									onChange={(e) => {
										setJurusan({
											...jurusan,
											name: e.target.value,
										});
									}}
									value={jurusan.name}
								/>

								<TextField
									className="w-1/2"
									inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
									id="outlined-basic"
									label="Kelas ke?"
									helperText="Contoh 1, 2 (AKL 1, AKL 2) | Boleh Kosong"
									rows={1}
									name="banyak"
									variant="outlined"
									onChange={(e) => {
										setJurusan({
											...jurusan,
											many: e.target.value,
										});
									}}
									value={jurusan.many}
								/>
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

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import dayjs from "dayjs";
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

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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

export default function ModalUpdateAbsensi({ datas, title, label }) {
	const dispatch = useDispatch();

	let now = new dayjs();
	let formatDate = (data) => {
		new dayjs(data).format("DD-MM-YYYY");
	};
	const [tanggal, setTanggal] = useState(now);

	const [request, setRequest] = useState({
		tanggal: "",
		H: false,
		I: false,
		S: false,
		A: false,
		T: false,
	});

	useEffect(() => {
		setRequest({
			...request,
			H: datas.H,
			I: datas.I,
			S: datas.S,
			A: datas.A,
			T: datas.T,
		});
	}, [datas]);

	const [open, setOpen] = useState(false);

	const handleOpen = (datas) => {
		// if (datas?.jenis !== null) {
		setOpen(true);
		// } else if (datas?.jenis === null) {
		// 	setOpen(false);
		// }
	};
	const handleClose = () => {
		setRequest({
			...request,
			H: false,
			I: false,
			S: false,
			A: false,
			T: false,
		});
		setOpen(false);
	};

	let loopingData = (data) => {
		if (data.H) {
			return "H";
		} else if (data.I) {
			return "I";
		} else if (data.S) {
			return "S";
		} else if (data.A) {
			return "A";
		} else if (data.T) {
			return "T";
		}
	};

	const handleChange = (e) => {
		setRequest({
			...request,
			[e.target.name]: e.target.value,
		});
	};

	const handleDelete = async (e) => {
		e.preventDefault();

		// await dispatch(deletePelanggars(e));
		// dispatch(getPelanggars());
		setOpen(false);
	};

	const handleSave = async (e) => {
		e.preventDefault();
		// await dispatch(updatePelanggars(request));
		// dispatch(getPelanggars());
		setOpen(false);
	};
	console.log(datas);
	console.log(request);

	return (
		<>
			<div className={`w-full cursor-pointer`} onClick={handleOpen}>
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
								<FormControl required className="w-[50%]">
									<InputLabel id="select-label">Kehadiran</InputLabel>
									<Select
										labelId="select-label"
										id="select"
										value={loopingData(request)}
										label="Kehadiran"
										name="kehadiran"
										onChange={handleChange}
										MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
									>
										{["H", "I", "S", "A", "T"].map((e, index) => (
											<MenuItem key={index} value={e}>
												{e}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</div>

							<div className="flex gap-5 justify-center">
								<LocalizationProvider
									className="w-[80%]"
									dateAdapter={AdapterDayjs}
								>
									<DatePicker
										disableFuture
										readOnly
										label="Tanggal"
										inputFormat="DD-MM-YYYY"
										value={tanggal}
										onChange={(newValue) => {
											setTanggal(newValue);
										}}
										renderInput={(params) => <TextField {...params} />}
									/>
								</LocalizationProvider>
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

import { useState } from "react";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
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

import {
	deletePelanggars,
	getPelanggars,
	updatePelanggars,
} from "../lib/stateManager/reducers/pelanggarSlice";
import {
	deletePrestasis,
	getPrestasis,
	updatePrestasis,
} from "../lib/stateManager/reducers/prestasiSlice";

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

export default function ModalUpdateDeletePointSiswa({
	datas,
	listDatas,
	title,
	label,
	type,
	siswa_id,
}) {
	const dispatch = useDispatch();
	const [tanggal, setTanggal] = useState(dayjs(datas.tanggal, "D-M-YYYY"));

	const [request, setRequest] = useState({
		siswa_id: siswa_id,
		[type]: datas.jenis,
		tanggal: tanggal,
		// desc: datas.desc,
		// point: datas.point,
	});

	const [open, setOpen] = useState(false);
	const handleOpen = (datas) => {
		if (datas?.jenis !== null) {
			setOpen(true);
		} else if (datas?.jenis === null) {
			setOpen(false);
		}
	};
	const handleClose = () => {
		setTanggal(dayjs(datas.tanggal, "D-M-YYYY"));
		setRequest({
			...request,
			siswa_id: siswa_id,
			[type]: datas?.jenis,
			tanggal: tanggal,
			// desc: datas?.desc,
			// point: datas?.point,
		});
		setOpen(false);
	};

	const handleChange = (e) => {
		setRequest({
			...request,
			[e.target.name]: e.target.value,
		});
	};

	const handleDelete = async (e) => {
		e.preventDefault();
		console.log(e);
		// if (type === "list_pelanggaran_id") {
		// 	await dispatch(deletePelanggars(e));
		// 	dispatch(getPelanggars());
		// } else if (type === "list_penghargaan_id") {
		// 	await dispatch(deletePrestasis(request));
		// 	dispatch(getPrestasis());
		// }
		setOpen(false);
	};

	const handleSave = async (e) => {
		e.preventDefault();
		console.log(request);
		if (type === "list_pelanggaran_id") {
			await dispatch(updatePelanggars(request));
			dispatch(getPelanggars());
		} else if (type === "list_penghargaan_id") {
			await dispatch(updatePrestasis(request));
			dispatch(getPrestasis());
		}
		setOpen(false);
	};
	console.log(datas);
	console.log(request);
	console.log(listDatas);

	return (
		<>
			<div
				className={`w-full ${datas.jenis !== null && "cursor-pointer"}`}
				onClick={handleOpen}
			>
				{label}
			</div>

			{datas.jenis !== null && (
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
								<LocalizationProvider
									className="w-[80%]"
									dateAdapter={AdapterDayjs}
								>
									<DatePicker
										disableFuture
										label="Tanggal"
										inputFormat="D-M-YYYY"
										value={tanggal}
										onChange={(newValue) => {
											setTanggal(newValue);
										}}
										renderInput={(params) => <TextField {...params} />}
									/>
								</LocalizationProvider>
								<div className="flex justify-around">
									<FormControl required className="w-[40%]">
										<InputLabel id="select-label">Jenis</InputLabel>
										<Select
											labelId="select-label"
											id="select"
											value={request?.[type]}
											label="Jenis"
											name={type}
											onChange={handleChange}
											MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
										>
											{listDatas?.map((e, index) => (
												<MenuItem key={index} value={e.id}>
													{e.id}
												</MenuItem>
											))}
										</Select>
									</FormControl>
									<TextField
										className="w-[40%]"
										id="outlined-basic"
										readOnly
										label="Point"
										variant="outlined"
										value={listDatas[request?.[type]]?.point}
									/>
								</div>

								<TextField
									className="w-full"
									id="outlined-basic"
									readOnly
									label="Keterangan"
									multiline
									rows={3}
									// maxRows={4}
									variant="outlined"
									value={
										listDatas[request?.[type]]?.penghargaan ||
										listDatas[request?.[type]]?.pelanggaran
									}
								/>
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
			)}
		</>
	);
}

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import {
	getPelanggars,
	newPelanggars,
} from "../lib/stateManager/reducers/pelanggarSlice";

import {
	getPrestasis,
	newPrestasis,
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

export default function ModalAddPointSiswa({
	listDatas,
	title,
	type,
	siswa_id,
}) {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const [tanggal, setTanggal] = useState(new dayjs().format("D-M-YYYY"));

	const [request, setRequest] = useState({
		siswa_id: siswa_id,
		[type]: 1,
		tanggal: tanggal,
		desc: "",
		point: "",
	});
	const handleClose = () => {
		setTanggal(dayjs(new dayjs().format("D-M-YYYY")));
		setRequest({
			...request,
			siswa_id: siswa_id,
			[type]: 1,
			tanggal: tanggal,
			desc: "",
			point: "",
		});
		setOpen(false);
	};
	const handleSave = async (e) => {
		e.preventDefault();
		console.log(request);
		if (type === "list_pelanggaran_id") {
			await dispatch(newPelanggars(request));
			dispatch(getPelanggars());
		} else if (type === "list_penghargaan_id") {
			await dispatch(newPrestasis(request));
			dispatch(getPrestasis());
		}
		setOpen(false);
	};

	const handleOpen = () => setOpen(true);

	const handleChange = (e) => {
		setRequest({
			...request,
			[e.target.name]: e.target.value,
		});
	};

	console.log(request);
	console.log(listDatas);
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
									onChange={handleChange}
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
								onChange={handleChange}
								value={
									listDatas[request?.[type]]?.penghargaan ||
									listDatas[request?.[type]]?.pelanggaran
								}
							/>
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

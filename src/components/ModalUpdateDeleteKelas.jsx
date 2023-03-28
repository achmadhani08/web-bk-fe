import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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

import { classData } from "../data/fixData";

import {
	deletePelanggars,
	getPelanggars,
	updatePelanggars,
} from "../lib/stateManager/reducers/pelanggarSlice";

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

export default function ModalUpdateDeleteKelas({ datas, title, label }) {
	const dispatch = useDispatch();

	const [request, setRequest] = useState({
		kelas: datas.kelas,
		jurusan: datas.jurusan,
	});
	const [jurusan, setJurusan] = useState({
		name: datas.jurusan,
		many: "",
	});

	function containsNumbers(str) {
		return /[0-9]/.test(str);
	}
	useEffect(() => {
		if (containsNumbers(datas.jurusan)) {
			let name = datas?.jurusan.slice(0, -1);
			let many = datas?.jurusan.slice(
				datas?.jurusan.length - 1,
				datas?.jurusan.length - 0
			);
			setJurusan({
				...jurusan,
				name: name,
				many: many,
			});
		} else console.log(datas.jurusan);
	}, [datas]);

	useEffect(() => {
		setRequest({
			...request,
			jurusan: `${jurusan.name}${jurusan.many}`,
		});
	}, [jurusan]);

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
			kelas: datas.kelas,
			jurusan: datas.jurusan,
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
			<div
				className={`w-full ${datas.jenis !== null && "cursor-pointer"}`}
				onClick={handleOpen}
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
									name="many"
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

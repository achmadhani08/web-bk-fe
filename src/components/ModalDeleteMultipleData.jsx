import { IconButton, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";

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

export default function ModalDeleteMultipleData({ datas, destroy, title }) {
	const [open, setOpen] = useState(false);

	const handleClose = () => setOpen(false);
	const handleOpen = () => setOpen(true);

	const handleDestroy = () => {
		destroy();

		console.log(datas, "destroy");
		handleClose();
	};

	return (
		<>
			<div className="absolute top-2 right-20 cursor-pointer indicator">
				{datas?.length > 0 && (
					<span
						onClick={handleOpen}
						className="indicator-item badge bg-white text-red-600 border-gray-500"
					>
						{datas?.length}
					</span>
				)}
				<div
					className="p-2 bg-color4 rounded-2xl text-red-500"
					onClick={handleOpen}
				>
					<BsFillTrashFill />
				</div>
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
						Apakah Anda Yakin Menghapus {datas?.length} Data?
						<input
							type="checkbox"
							className="checkbox border-color3 z-10"
							onChange={(e) => console.log("Checking")}
						/>
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

						<IconButton
							color="error"
							aria-label="destroy"
							onClick={handleDestroy}
						>
							<BsFillTrashFill />
						</IconButton>
					</div>
				</Box>
			</Modal>
		</>
	);
}

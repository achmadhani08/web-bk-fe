export default function ToastNotification({ setToast, toast }) {
	return (
		<div className="toast">
			<div className={`alert ${toast.status}`}>
				<div>
					{toast?.icon}
					<span>{toast.message}</span>
				</div>
			</div>
		</div>
	);
}

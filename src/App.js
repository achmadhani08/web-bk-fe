import { createContext, useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Router from "./router";

export const UserContext = createContext();

export default function App() {
	const [loading, setLoading] = useState(false);
	const [authenticated, setAuthenticated] = useState({
		token: null,
		isLogin: false,
		data: null,
	});

	useEffect(() => {
		if (authenticated.isLogin) {
			console.log(authenticated, "Data Authenticated");
			window.history.back()
		} else {
			const dataLocalStorage = JSON.parse(localStorage.getItem('Authorization'));
			if (dataLocalStorage) {
				setAuthenticated(dataLocalStorage);
			} else console.log("Local Storage Empty")
		};
	}, [authenticated]);

	return (
		<UserContext.Provider value={{ authenticated, setAuthenticated, loading, setLoading }}>
			<Router />
			<ToastContainer
				position="bottom-right"
				autoClose={4000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</UserContext.Provider>
	);
}

import { createContext, useEffect, useState } from "react";
import "./App.css";
import Router from "./router";

export const UserContext = createContext({
	token: "",
	isLogin: false,
	// login: (idToken) => {},
});

export default function App() {
	const [authenticated, SetAuthenticated] = useState({
		name: null,
		email: null,
	});

	useEffect(() => {
		console.log(authenticated, "Data Authenticated");
	}, [authenticated]);

	console.log(authenticated, "Data Authenticated");

	return (
		<UserContext.Provider value={[authenticated, SetAuthenticated]}>
			<Router />
		</UserContext.Provider>
	);
}

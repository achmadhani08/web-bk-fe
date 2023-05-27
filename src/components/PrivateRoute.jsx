import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../App";

export default function PrivateRoute({ children }) {
	const { authenticated } = useContext(UserContext);

	return authenticated.isLogin ? <>{children}</> : <Navigate to="/login" />;
}

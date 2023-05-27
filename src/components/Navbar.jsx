import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";
import "../assets/css/navbar.css";

import logosmk10 from "../assets/image/logo-10.png";
import logobk from "../assets/image/logo-bk.png";
import admin from "../assets/image/admin.png";
import { UserContext } from "../App";
import { logout } from "../lib/stateManager/reducers/API/auth";

export default function Navbar() {
	const { authenticated, setAuthenticated } = useContext(UserContext);

	const handleLogout = async () => {
		logout(setAuthenticated);
		// // await axios.post("http://127.0.0.1:8000/api/logout", {
		// // 	headers: {
		// // 		Authorization: `Bearer ${cookies.get("Authorization")}`,
		// // 	},
		// // });

		// // cookies.remove("Authorization");
		// localStorage.removeItem("Authorization");
		// setAuthenticated({
		// 	token: null,
		// 	isLogin: false,
		// 	data: null,
		// });
		// window.href("dashboard");
	};

	return (
		<div className="navbar bg-color4 sticky top-0 z-20">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex="0" className="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h7"
							></path>
						</svg>
					</label>
					<ul
						tabIndex="0"
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-color1 text-gray-700 rounded-box w-52"
					>
						<li>
							<NavLink
								className="focus:bg-color3 focus:text-black"
								to="/dashboard"
							>
								Dashboard
							</NavLink>
						</li>
						<li>
							<NavLink
								className="focus:bg-color3 focus:text-black"
								to="/list-point"
							>
								List Point
							</NavLink>
						</li>
						<li>
							<NavLink
								className="focus:bg-color3 focus:text-black"
								to="/rekapan-absensi"
							>
								Rekapan Absensi
							</NavLink>
						</li>
						<li>
							<NavLink
								className="focus:bg-color3 focus:text-black"
								to="/rekapan-point"
							>
								Rekapan Point Pelanggaran
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
			<div className="navbar-center">
				<div className="flex select-none gap-10 justify-center">
					<a href="https://smkn10jakarta.sch.id/" target="_blank">
						<img src={logosmk10} alt="logo" style={{ width: "4rem" }} />
					</a>
					<a aria-current="page" href="/">
						<img src={logobk} alt="logo" style={{ width: "4.5rem" }} />
					</a>
				</div>
			</div>
			<div className="navbar-end">
				<div className="flex">
					<div className="dropdown dropdown-end">
						{!authenticated.isLogin ? (
							<label tabIndex="0" className="btn btn-ghost btn-circle">
								<IoSettingsSharp className="h-5 w-5 text-white" />
							</label>
						) : (
							<label tabIndex="0" className="btn btn-ghost btn-circle">
								{/* <IoSettingsSharp className="h-5 w-5 text-white" /> */}
								<img className="w-8 h-8 rounded-full" src={admin} alt="admin" />
							</label>
						)}
						<ul
							tabIndex="0"
							className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-color1 text-gray-700 rounded-box w-52"
						>
							{!authenticated.isLogin ? (
								<li>
									<NavLink
										className="focus:bg-color3 focus:text-black"
										to="/login"
									>
										Login
									</NavLink>
								</li>
							) : (
								<>
									<li>
										<NavLink
											className="focus:bg-color3 focus:text-black"
											to="/data-kelas"
										>
											Data Kelas
										</NavLink>
									</li>
									<li>
										<NavLink
											className="focus:bg-color3 focus:text-black"
											to="/data-siswa"
										>
											Data Siswa
										</NavLink>
									</li>
									<>
										<li>
											<NavLink
												className="focus:bg-color3 focus:text-black"
												to="/register"
											>
												Register Admin
											</NavLink>
										</li>
									</>
									<li onClick={handleLogout}>
										<p>Logout</p>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

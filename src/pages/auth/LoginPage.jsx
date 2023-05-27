import { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import image from "../../assets/image/img-login.png";
import logo10 from "../../assets/image/logo-10.png";
import logoBK from "../../assets/image/logo-bk.png";

import { UserContext } from "../../App";
import { login } from "../../lib/stateManager/reducers/API/auth";

export default function LoginPage() {
	let emailRef = useRef("");
	let passwordRef = useRef("");

	const { setAuthenticated } = useContext(UserContext);

	const handleLogin = async (e) => {
		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		login(email, password, setAuthenticated);

		// await axios
		// 	.get("http://127.0.0.1:8000/sanctum/csrf-cookie", {
		// 		withCredentials: true,
		// 	})
		// 	.then((response) => {
		// 		console.log(response);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});

		// axios
		// 	.post(
		// 		"http://127.0.0.1:8000/api/login",
		// 		{
		// 			email: email,
		// 			password: password,
		// 		},
		// 		{
		// 			withCredentials: true,
		// 		}
		// 	)
		// 	.then((response) => {
		// 		axios
		// 			.get("http://127.0.0.1:8000/api/get-user", {
		// 				headers: {
		// 					Authorization: `Bearer ${response.data.token}`,
		// 				},
		// 			})
		// 			.then((dataUser) => {
		// 				console.log(dataUser.data.user, "GetUser API");
		// 				setAuthenticated({
		// 					token: response.data.token,
		// 					isLogin: true,
		// 					data: {
		// 						name: dataUser.data.user.name,
		// 						email: dataUser.data.user.email,
		// 					},
		// 				});
		// 				localStorage.setItem(
		// 					"Authorization",
		// 					JSON.stringify({
		// 						token: response.data.token,
		// 						isLogin: true,
		// 						data: {
		// 							name: dataUser.data.user.name,
		// 							email: dataUser.data.user.email,
		// 						},
		// 					})
		// 				);
		// 			});
		// 	});
	};

	return (
		<>
			{/* Navigation */}
			<div className="dropdown absolute top-4 left-4">
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

			<div className="hero min-h-screen bg-color4">
				<div className="hero-content max-h-[95vh] max-w-[80vw] flex-col lg:flex-row rounded-md bg-white p-0">
					<div className="w-1/2 min-h-full text-center lg:text-left py-8 pl-8">
						<div className="flex justify-between px-6">
							<img src={logo10} width="10%" alt="logo-10" />
							<img src={logoBK} width="10%" alt="logo-bk" />
						</div>
						<div className="px-12 py-14">
							<h1 className="text-color4 font-semibold text-4xl mb-5">
								Hello, Welcome !
							</h1>

							<div className="form-control">
								<label className="label pb-2 p-0">
									<span className="label-text text-2xl text-semibold text-color4">
										Email
									</span>
								</label>
								<input
									type="email"
									ref={emailRef}
									placeholder="ruangbk@gmail.com"
									autoComplete=""
									className="input border-gray-400 text-gray-800 placeholder:text-gray-400 placeholder:text-semibold bg-white"
								/>
							</div>
							<div className="form-control mt-6">
								<label className="label pb-2 p-0">
									<span className="label-text text-semibold text-2xl text-color4">
										Password
									</span>
								</label>
								<input
									type="password"
									ref={passwordRef}
									placeholder="password"
									autoComplete=""
									className="input border-gray-400 text-gray-800 placeholder:text-gray-400 placeholder:text-semibold bg-white"
								/>
							</div>
							<div className="form-control mt-6">
								<button
									className="btn border-0 text-xl normal-case text-semibold text-white hover:text-gray-100 bg-color4 hover:bg-color3"
									onClick={handleLogin}
								>
									Sign In
								</button>
							</div>
							{/* <div className="flex justify-center mt-4">
								<label className="text-black text-xl pt-2 p-0">
									<span>
										Don't have account?{" "}
										<NavLink
											to="/register"
											className="link text-semibold no-underline text-color4 hover:text-color3"
										>
											Sign up here
										</NavLink>
									</span>
								</label>
							</div> */}
						</div>
					</div>
					<div className="w-1/2 p-5">
						<figure>
							<img
								src={image}
								className="max-h-[90vh] w-full blur-sm"
								alt="image"
							/>
						</figure>
					</div>
				</div>
			</div>
		</>
	);
}

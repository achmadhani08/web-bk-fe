import { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import image from "../../assets/image/rectangle.png";
import admin from "../../assets/image/admin.png";

// import image from "../../assets/image/img-login.png";
import logo10 from "../../assets/image/logo-10.png";
import logoBK from "../../assets/image/logo-bk.png";
import { logout, register } from "../../lib/stateManager/reducers/API/auth";
import { UserContext } from "../../App";

export default function RegisterPage() {
	const { setAuthenticated } = useContext(UserContext);
	const [show, setShow] = useState(false);
	const [match, setMatch] = useState({
		condition: false,
		borderColor: "border-red-500",
		colorMessage: "text-red-500",
		message: "Password & Confirm Password are Required",
	});

	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	useEffect(() => {
		if (form.password === form.confirmPassword && form.password.length >= 8) {
			setMatch({
				...match,
				condition: true,
				colorMessage: "text-color4",
				borderColor: "border-gray-400",
				message: "Password & Confirm Password are Match",
			});
		} else if (
			form.password.length === 0 ||
			form.confirmPassword.length === 0
		) {
			setMatch({
				...match,
				condition: false,
				colorMessage: "text-red-500",
				borderColor: "border-red-500",
				message: "Password & Confirm Password are Required",
			});
		} else if (form.password.length < 8 || form.confirmPassword.length < 8) {
			setMatch({
				...match,
				condition: false,
				colorMessage: "text-yellow-500",
				borderColor: "border-yellow-500",
				message: "Password & Confirm Password Min 8 Character",
			});
		} else if (
			form.password !== form.confirmPassword &&
			form.password.length > 7 &&
			form.confirmPassword.length > 7
		) {
			setMatch({
				...match,
				condition: false,
				colorMessage: "text-red-500",
				borderColor: "border-red-500",
				message: "Password & Confirm Password Not Match",
			});
		}
	}, [form]);

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleRegister = (e) => {
		e.preventDefault();

		if (match.condition) {
			register(form);
			console.log(form, "form");
		} else console.log(form, "not match");
		// setMatch(fasle);
	};

	const handleLogout = async () => {
		logout(setAuthenticated);
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

			<div className="dropdown dropdown-end absolute top-4 right-4">
				<label tabIndex="0" className="btn btn-ghost btn-circle">
					{/* <IoSettingsSharp className="h-5 w-5 text-white" /> */}
					<img className="w-8 h-8 rounded-full" src={admin} alt="admin" />
				</label>

				<ul
					tabIndex="0"
					className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-color1 text-gray-700 rounded-box w-52"
				>
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
				</ul>
			</div>

			<div className="hero min-h-screen bg-color4">
				<div className="hero-content max-h-[95vh] max-w-[80vw] flex-col lg:flex-row rounded-md bg-white p-0">
					<div className="w-1/2 min-h-full text-center lg:text-left py-8 pl-8">
						<div className="flex justify-between px-6">
							<img src={logo10} width="10%" alt="logo-10" />
							<img src={logoBK} width="10%" alt="logo-bk" />
						</div>
						<div className="px-12 pt-14">
							<h1 className="text-color4 font-semibold text-4xl mb-3">
								Create an Account
							</h1>

							<form onSubmit={handleRegister}>
								<div className="form-control">
									<input
										type="text"
										autoFocus
										minLength={3}
										maxLength={150}
										required
										name="name"
										value={form.name}
										onChange={handleChange}
										placeholder="Fullname"
										className="input border-gray-400 text-color4 placeholder:text-gray-400 placeholder:text-semibold bg-white invalid:border-red-500 invalid:text-red-500
      focus:invalid:border-red-500 focus:invalid:ring-red-500 in-range:border-color4 out-of-range:border-red-500"
									/>
								</div>
								<div className="form-control mt-3">
									<input
										type="email"
										required
										minLength={7}
										maxLength={120}
										name="email"
										value={form.email}
										onChange={handleChange}
										placeholder="bksmkn10jkt@mail.sch.id"
										className="input border-gray-400 text-color4 placeholder:text-gray-400 placeholder:text-semibold bg-white invalid:border-red-500 invalid:text-red-500
      focus:invalid:border-red-500 focus:invalid:ring-red-500 in-range:border-color4 out-of-range:border-red-500"
									/>
								</div>
								<div className="form-control mt-3">
									<div className="input-group">
										<input
											name="password"
											value={form.password}
											onChange={handleChange}
											required
											// minLength={8}
											// maxLength={20}
											autoComplete=""
											type={show ? "text" : "password"}
											placeholder="Password (min 8 char)"
											className={`w-[90%] input ${match.colorMessage} ${match.borderColor} placeholder:text-gray-400 placeholder:text-semibold bg-white in-range:border-color4 out-of-range:border-red-500`}
										/>
										<button
											type="button"
											onClick={() => setShow(!show)}
											className="btn focus-visible:outline-none focus-visible:text-white focus-visible:bg-color4 btn-square bg-slate-300 text-gray-500 hover:text-white hover:bg-color4 border-gray-400 hover:border-gray-400 w-[10%]"
										>
											{show ? (
												<AiOutlineEye className="h-6 w-6" />
											) : (
												<AiOutlineEyeInvisible className="h-6 w-6" />
											)}
										</button>
									</div>
								</div>
								<div className="form-control mt-3">
									<div className="input-group">
										<input
											required
											// minLength={8}
											// maxLength={20}
											name="confirmPassword"
											value={form.confirmPassword}
											onChange={handleChange}
											autoComplete=""
											type={show ? "text" : "password"}
											placeholder="Confirm Password (min 8 char)"
											className={`w-[90%] input ${match.colorMessage} ${match.borderColor} placeholder:text-gray-400 placeholder:text-semibold bg-white in-range:border-color4 out-of-range:border-red-500`}
										/>
										<button
											type="button"
											onClick={() => setShow(!show)}
											className="btn focus-visible:outline-none focus-visible:text-white focus-visible:bg-color4 btn-square bg-slate-300 text-gray-500 hover:text-white hover:bg-color4 border-gray-400 hover:border-gray-400 w-[10%]"
										>
											{show ? (
												<AiOutlineEye className="h-6 w-6" />
											) : (
												<AiOutlineEyeInvisible className="h-6 w-6" />
											)}
										</button>
									</div>
								</div>
								{match.condition ? null : (
									<p className="label p-0 mt-2">
										<span
											className={`label-text ${match.colorMessage} bg-transparent`}
										>
											{match.message}
										</span>
									</p>
								)}
								<div className={`form-control ${match ? "mt-6" : "mt-2"}`}>
									<button
										disabled={!match.condition}
										className="btn focus-visible:outline-none border-0 text-xl normal-case text-semibold text-white bg-color4 hover:bg-color3 disabled:text-gray-500 disabled:bg-slate-300"
										// onClick={handleRegister}
										type="submit"
									>
										Sign Up
									</button>
								</div>
							</form>
							{/* <div className="flex justify-center mt-4">
								<label className="text-black text-xl pt-2 p-0">
									<span>
										Have an account?{" "}
										<NavLink
											to="/login"
											className="link no-underline text-semibold text-color4 hover:text-color3"
										>
											Sign in here
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

import { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

import image from "../../assets/image/img-login.png";
import logo10 from "../../assets/image/logo-10.png";
import logoBK from "../../assets/image/logo-bk.png";
import { UserContext } from "../../App";
import Navbar from "../../components/Navbar";

export default function LoginPage() {
	let emailRef = useRef("");
	let passwordRef = useRef("");
	const cookies = new Cookies();

	const [authenticated, setAuthenticated] = useContext(UserContext);

	const handleLogin = async () => {
		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		await axios
			.get("http://127.0.0.1:8000/sanctum/csrf-cookie", {
				withCredentials: true,
			})
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});

		axios
			.post(
				"http://127.0.0.1:8000/api/login",
				{
					email: email,
					password: password,
				},
				{
					withCredentials: true,
				}
			)
			.then((response) => {
				cookies.set("Authorization", decodeURIComponent(response.data.token));
				console.log(decodeURIComponent(response.data.token));
				axios.get("http://127.0.0.1:8000/api/get-user").then((dataUser) => {
					console.log(dataUser.data.user, "GetUser API");
					setAuthenticated({
						name: dataUser.data.user.name,
						email: dataUser.data.user.email,
					});
				});
			});
	};

	return (
		<>
			<Navbar />
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
									type="text"
									ref={emailRef}
									placeholder="ruangbk@gmail.com"
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
							<div className="flex justify-center mt-4">
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
							</div>
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

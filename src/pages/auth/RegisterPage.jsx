import { useRef } from "react";
import { NavLink } from "react-router-dom";

import image from "../../assets/image/rectangle.png";
import logoBlue from "../../assets/image/logo-blue.png";

export default function RegisterPage() {
	return (
		<div className="hero min-h-screen bg-color2">
			<div className="hero-content max-h-[95vh] flex-col lg:flex-row bg-white p-0">
				<div className="w-1/2 min-h-full text-center lg:text-left py-8 pl-8">
					<img src={logoBlue} width="50%" alt="logo" />
					<div className="px-12 py-14">
						<h1 className="text-color2 font-semibold text-4xl mb-3">
							Register
						</h1>
						<div className="form-control">
							<input
								type="text"
								placeholder="Username"
								className="input border-gray-400 text-gray-800 placeholder:text-gray-400 placeholder:text-semibold bg-white"
							/>
						</div>
						<div className="form-control mt-3">
							<input
								type="text"
								placeholder="ruangbk@gmail.com"
								className="input border-gray-400 text-gray-800 placeholder:text-gray-400 placeholder:text-semibold bg-white"
							/>
						</div>
						<div className="form-control mt-3">
							<input
								type="text"
								placeholder="Phone Number"
								className="input border-gray-400 text-gray-800 placeholder:text-gray-400 placeholder:text-semibold bg-white"
							/>
						</div>
						<div className="form-control mt-3">
							<input
								type="text"
								placeholder="Password"
								className="input border-gray-400 text-gray-800 placeholder:text-gray-400 placeholder:text-semibold bg-white"
							/>
						</div>
						<div className="form-control mt-3">
							<input
								type="text"
								placeholder="Confirm Password"
								className="input border-gray-400 text-gray-800 placeholder:text-gray-400 placeholder:text-semibold bg-white"
							/>
						</div>
						<div className="form-control mt-6">
							<button className="btn border-0 text-xl normal-case text-semibold text-white bg-color1 hover:bg-color2">
								Sign Up
							</button>
						</div>
						<div className="flex justify-center mt-4">
							<label className="text-black text-xl pt-2 p-0">
								<span>
									Have an account?{" "}
									<NavLink
										to="/login"
										className="link text-color1 no-underline text-semibold"
									>
										Sign in here
									</NavLink>
								</span>
							</label>
						</div>
					</div>
				</div>
				<div className="w-1/2 p-5">
					<figure>
						<img src={image} className="max-h-[95vh]" alt="rectangle" />
					</figure>
				</div>
			</div>
		</div>
	);
}

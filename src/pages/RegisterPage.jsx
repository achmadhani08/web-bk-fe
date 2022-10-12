import React from "react";

import image from "../assets/rectangle.png";
import logoBlue from "../assets/logo-blue.png";

function RegisterPage() {
	return (
		<div className="hero min-h-screen bg-blueBg">
			<div
				className="hero-content flex-col lg:flex-row bg-white p-0"
				style={{ maxHeight: "95vh" }}
			>
				<div className="w-1/2 min-h-full text-center lg:text-left py-8 pl-8">
					<img src={logoBlue} width="50%" alt="logo" />
					<div className="px-12 py-14">
						<h1 className="text-slate-700 font-semibold text-4xl mb-3">
							Register
						</h1>
						<div className="form-control">
							<input
								type="text"
								placeholder="Username"
								className="input border-gray-400 text-gray-800 placeholder:text-gray-400 bg-white"
							/>
						</div>
                        <div className="form-control mt-3">
							<input
								type="text"
								placeholder="ruangbk@gmail.com"
								className="input border-gray-400 text-gray-800 placeholder:text-gray-400 bg-white"
							/>
						</div>
                        <div className="form-control mt-3">
							<input
								type="text"
								placeholder="Phone Number"
								className="input border-gray-400 text-gray-800 placeholder:text-gray-400 bg-white"
							/>
						</div>
						<div className="form-control mt-3">
							<input
								type="text"
								placeholder="Password"
								className="input border-gray-400 text-gray-800 placeholder:text-gray-400 bg-white"
							/>
						</div>
                        <div className="form-control mt-3">
							<input
								type="text"
								placeholder="Confirm Password"
								className="input border-gray-400 text-gray-800 placeholder:text-gray-400 bg-white"
							/>
						</div>
						<div className="form-control mt-6">
							<button className="btn border-0 text-xl normal-case text-semibold text-white bg-blueBtn hover:bg-blue-900">
								Sign Up
							</button>
						</div>
						<div className="flex justify-center mt-4">
							<label className="text-black text-xl pt-2 p-0">
								<span>
									Have an account?{" "}
									<a
										href="#"
										className="link text-semibold hover:text-gray-800"
									>
										Sign in here
									</a>
								</span>
							</label>
						</div>
					</div>
				</div>
				<div className="w-1/2 p-5">
					<figure>
						<img src={image} style={{ maxHeight: "95vh" }} alt="rectangle" />
					</figure>
				</div>
			</div>
		</div>
	);
}

export default RegisterPage;

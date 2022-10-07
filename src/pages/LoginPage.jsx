import React from "react";

import image from "../assets/rectangle.png";
import logoBlue from "../assets/logo-blue.png";

function LoginPage() {
	return (
		<div className="hero min-h-screen bg-blueBg">
			<div
				className="hero-content flex-col lg:flex-row bg-white p-0"
				style={{ maxHeight: "95vh" }}
			>
				<div className="w-1/2 min-h-full text-center lg:text-left py-8 pl-8">
					<img src={logoBlue} width="50%" alt="logo" />
					<div className="px-12 py-14">
						<h1 className="text-slate-700 font-semibold text-4xl mb-5">
							Hello, Welcome !
						</h1>
						<div className="form-control">
							<label className="label pb-2 p-0">
								<span className="label-text text-2xl text-black">Email</span>
							</label>
							<input
								type="text"
								placeholder="ruangbk@gmail.com"
								className="input border-gray-400 text-gray-800 placeholder:text-gray-400 bg-white"
							/>
						</div>
						<div className="form-control mt-6">
							<label className="label pb-2 p-0">
								<span className="label-text text-2xl text-black">Password</span>
							</label>
							<input
								type="text"
								placeholder="password"
								className="input border-gray-400 text-gray-800 placeholder:text-gray-400 bg-white"
							/>
						</div>
						<div className="form-control mt-4">
							<label className="text-black hover:text-gray-800 pt-2 p-0">
								<a href="#" className="link text-xl">
									Forgot password?
								</a>
							</label>
						</div>
						<div className="form-control mt-6">
							<button className="btn border-0 text-xl normal-case text-semibold text-white bg-blueBtn hover:bg-blue-900">
								Sign In
							</button>
						</div>
						<div className="flex justify-center mt-4">
							<label className="text-black text-xl pt-2 p-0">
								<span>
									Don't have account?{" "}
									<a
										href="#"
										className="link text-semibold hover:text-gray-800"
									>
										Sign up here
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

export default LoginPage;

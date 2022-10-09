import React from "react";

import logoWhite from "../assets/image/logo-white.png";

export default function NavbarSearch() {
	return (
		<div className="navbar bg-blueBg">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost btn-circle">
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
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-gray-700 rounded-box w-52"
					>
						<li>
							<a href="/">Dashboard</a>
						</li>
						<li>
							<a href="/list-point">List Point</a>
						</li>
						<li>
							<a href="/rekapan-absensi">Rekapan Absensi</a>
						</li>
						<li>
							<a href="/rekapan-point-pelanggaran">Rekapan Point Pelanggaran</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="navbar-center">
				{/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
				<a href="/">
					<img src={logoWhite} alt="logo" width="65%" />
				</a>
			</div>
			<div className="navbar-end">
				<div className="flex items-center gap-3">
					<div className="form-control">
						<input
							type="text"
							placeholder="Search"
							className="input input-bordered w-56 h-8 text-base px-3 py-2 rounded-3xl placeholder:text-black text-black bg-white"
						/>
					</div>
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full">
								<img src="https://placeimg.com/80/80/people" />
							</div>
						</label>
						<ul
							tabIndex={0}
							className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white text-gray-700 rounded-box w-52"
						>
							<li>
								<a href="/profile">
									Profile
									{/* <span className="badge">New</span> */}
								</a>
							</li>
							<li>
								<p>Logout</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

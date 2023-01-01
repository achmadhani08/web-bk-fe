import { NavLink } from "react-router-dom";

import logosmk10 from "../assets/image/logo-10.png";
import logobk from "../assets/image/logo-bk.png";

export default function Navbar() {
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
								className="font-semibold active:bg-gray-300 text-black bg-gray-200"
								to="/"
							>
								Dashboard
							</NavLink>
							{/* <a aria-current="page"></a> */}
						</li>
						<li>
							<NavLink className="" to="/list-point">
								List Point
							</NavLink>
							{/* <a className="" href="/list-point">
								List Point
							</a> */}
						</li>
						<li>
							<NavLink className="" to="/rekapan-absensi">
								Rekapan Absensi
							</NavLink>
							{/* <a className="" href="/rekapan-absensi"></a> */}
						</li>
						<li>
							<NavLink className="" to="/rekapan-point">
								Rekapan Point Pelanggaran
							</NavLink>
							{/* <a
								aria-current="page"
								className="font-semibold active:bg-gray-300 text-black bg-gray-200"
								href="/rekapan-point"
							>
								Rekapan
							</a> */}
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
					{/* <NavLink to="https://smkn10jakarta.sch.id/" target="_blank">
						<img src={logosmk10} alt="logo" style="width: 4rem" />
					</NavLink>
					<NavLink to="/">
						<img src={logobk} alt="logo" style="width: 4.5rem" />
					</NavLink> */}
				</div>
			</div>
			<div className="navbar-end">
				<div className="flex">
					<div className="dropdown dropdown-end">
						<label tabIndex="0" className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full">
								<img src="https://placeimg.com/80/80/people" alt="avatar" />
							</div>
						</label>
						<ul
							tabIndex="0"
							className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white text-gray-700 rounded-box w-52"
						>
							<li>
								<a href="/profile">Profile</a>
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

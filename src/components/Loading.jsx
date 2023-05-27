import React from "react";

export default function Loading() {
	return (
		<div className="hero min-h-screen bg-color2">
			<div className="hero-content text-center">
				<div className="max-w-md">
					<h2 className="text-color4 text-2xl">Loading</h2>
					<progress className="progress indeterminate:after:bg-color4 w-56"></progress>
				</div>
			</div>
		</div>
	);
}

import Title from "../Title.jsx";
import React from "react";

export function Details({unitDetails}) {
	return (
		<>
			<div className="flex flex-col md:flex-row justify-center my-16 p-3">
				<div className="w-full md:w-7/12">
					<Title>Unit Details</Title>
					<p className="text-x max-w-xl">
						{unitDetails}
						<br />
					</p>
				</div>
			</div>
		</>
	)
}

export  default  Details;
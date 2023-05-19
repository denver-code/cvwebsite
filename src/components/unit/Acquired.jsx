import Title from "../Title.jsx";
import React from "react";

export function Acquired({acquired}) {
	return (
		<>
			<div className="flex flex-col md:flex-row justify-center my-16 p-3">
				<div className="w-full md:w-7/12">
					<Title>Acquired</Title>
					<ol className="list-disc ml-5">
						{acquired.map(acquired => (
							<li className="text-x max-w-xl">
								{acquired}
								<br />
							</li>
						))}
					</ol>
				</div>
			</div>
		</>
	)
}

export default Acquired;
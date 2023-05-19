import React from "react";

export function UnitIntro({unitTitle, unitSubtitle, unitNumber}) {
	return (
		<>
			<div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
				<h1 className="text-3xl md:text-5xl dark:text-white mb-1 md:mb-3 font-bold">{unitTitle}</h1>

				<div className="flex flex-row justify-center ">
								   <span className="inline-block px-2 py-1 mb-3 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
									Unit {unitNumber}
								   </span>

					<p className="py-1 mb-3 ml-2 italic text-gray-700">
						{unitSubtitle}
					</p>
				</div>

			</div>
		</>
	)
}

export default UnitIntro;
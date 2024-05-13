import React from "react";
const Sponser = () => {
	return (
		<>
			<h1 className="text-center text-[3rem] mb-[0rem]">Past Event Partners</h1>
			<section className="flex flex-wrap gap-[2rem] justify-center">
				{[
					"/svg/spykar.svg",
					"/svg/Westside.svg",
					"/svg/gfg.svg",
					"/images/sponserimage/uber.png",
					"/images/sponserimage/hp.png",
					"/images/sponserimage/codingblock.png",
				].map((item, index) => {
					return (
						<div key={index} className="bg-[#ffffff57] sponsor-card rounded-xl w-fit p-4">
							<img
								className="w-[200px] h-[200px] object-contain aspect-sqaure"
								src={process.env.PUBLIC_URL + item}
								alt="not found"
							/>
						</div>
					);
				})}
			</section>
		</>
	);
};
export default Sponser;

import React from "react";
import Button from "../Button";

const Services = () => {
	return (
		<div id="services" className="max-w-6xl px-8 py-24 mx-auto">
			{/* <div className="relative"> */}
			{/* </div> */}
			<div className="text-white flex flex-col md:flex-row md:items-center justify-center">
				<div className="flex flex-col items-center md:items-start md:pr-16 md:py-10 pt-4 border-b-2 md:border-b-0 md:border-r-2 border-primary">
					<div className="flex flex-col items-center md:items-start font-semibold uppercase">
						<h1 className="text-secondary-light text-6.5xl font-bold inline uppercase absolute transform -translate-y-10.5">
							Services
						</h1>
						<h1 className="text-white text-3xl inline relative tracking-wider">
							Services
						</h1>
					</div>
					<p className="text-center md:text-left my-8 max-w-md">
						You can count on me to provide well-designed and quality content to
						make your projects look unique and creative.
					</p>
					<a
						className=" hidden md:block"
						href="https://www.behance.net/parulchouhan"
						target="_blank"
						rel="noreferrer"
					>
						<Button>SEE MY WORK</Button>
					</a>
				</div>
				<ul className="text-center md:text-left text-xl my-8 md:m-0 md:pl-12">
					<li className="my-4">Graphic Design</li>
					<li className="my-4">Brand Design</li>
					<li className="my-4">UI/UX Design</li>
					<li className="my-4">Video Editing</li>
					<li className="my-4">Motion Graphics</li>
					<li className="my-4">2D Animation</li>
				</ul>
				<a
					className="md:hidden mx-auto"
					href="https://www.behance.net/parulchouhan"
					target="_blank"
					rel="noreferrer"
				>
					<Button>SEE MY WORK</Button>
				</a>
			</div>
		</div>
	);
};

export default Services;

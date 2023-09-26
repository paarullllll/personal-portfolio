import React from "react";
import Form from "../Form";
import Behance from "../../assets/behance.svg";
// import Instagram from "../../assets/instagram.svg";
import Linkedin from "../../assets/linkedin.svg";
import Twitter from "../../assets/twitter.svg";

const Contact = () => {
	return (
		<div className="bg-halftone-pattern bg-left-bottom bg-no-repeat max-w-screen-2xl mx-auto">
			<div id="contact" className="max-w-6xl px-8 py-24 mx-auto">
				{/* Container */}
				<div className="md:flex gap-8 justify-between items-center">
					<div className="max-w-md mb-12 md:mb-0">
						<div className="flex flex-col items-center md:items-start font-semibold">
							<h1 className="text-secondary-light text-6.5xl font-bold inline uppercase absolute transform -translate-y-10.5">
								Hello!
							</h1>
							<h1 className="text-white text-3xl inline relative tracking-wider">
								Let's talk...
							</h1>
						</div>
						<p className="text-white mb-4 mt-8">
							I'm always open to discuss your project and talk about new things,
							so feel free to drop me a line at
						</p>
						<a
							href="mailto:parulchouhan1711@gmail.com"
							className="text-primary"
						>
							parulchouhan1711@gmail.com
						</a>
						{/* Icons */}
						<div className=" hidden md:flex mt-10">
							<a
								className="mr-4"
								href="https://www.behance.net/parulchouhan"
								target="_blank"
								rel="noreferrer"
							>
								<img className="w-7" src={Behance} alt="Behance" />
							</a>
							{/* <a
								className="mr-4"
								href="https://www.instagram.com/paarullllll/"
								target="_blank"
								rel="noreferrer"
							>
								<img className="w-7" src={Instagram} alt="Instagram" />
							</a> */}
							<a
								className="mr-4"
								href="https://www.linkedin.com/in/paarullllll/"
								target="_blank"
								rel="noreferrer"
							>
								<img className="w-7" src={Linkedin} alt="LinkedIn" />
							</a>
							<a
								className="mr-4"
								href="https://twitter.com/paarullllll"
								target="_blank"
								rel="noreferrer"
							>
								<img className="w-7" src={Twitter} alt="Twitter" />
							</a>
						</div>
					</div>
					<Form />
				</div>
			</div>
		</div>
	);
};

export default Contact;

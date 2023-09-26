import React from "react";
import Behance from "../../assets/behance.svg";
// import Instagram from "../../assets/instagram.svg";
import Linkedin from "../../assets/linkedin.svg";
import Twitter from "../../assets/twitter.svg";

const Footer = () => {
	return (
		<div className="bg-black">
			<div
				id="services"
				className="max-w-6xl px-8 py-11 mx-auto text-white flex flex-col md:flex-row items-center justify-between"
			>
				<p className="text-center">
					Crafted with ❤️ by{" "}
					<a className="text-primary" href="#home">
						Parul Chouhan
					</a>{" "}
					& Developed by{" "}
					<a
						className="text-primary"
						href="https://iyashsharma.com"
						target="_blank"
						rel="noreferrer"
					>
						Yash Sharma
					</a>
				</p>
				{/* Icons */}
				<div className="flex mt-8 md:mt-0">
					<a
						className="mx-2"
						href="https://www.behance.net/parulchouhan"
						target="_blank"
						rel="noreferrer"
					>
						<img className="w-5" src={Behance} alt="Behance" />
					</a>
					{/* <a
						className="mx-2"
						href="https://www.instagram.com/paarullllll/"
						target="_blank"
						rel="noreferrer"
					>
						<img className="w-5" src={Instagram} alt="Instagram" />
					</a> */}
					<a
						className="mx-2"
						href="https://www.linkedin.com/in/paarullllll/"
						target="_blank"
						rel="noreferrer"
					>
						<img className="w-5" src={Linkedin} alt="LinkedIn" />
					</a>
					<a
						className="mx-2"
						href="https://twitter.com/paarullllll"
						target="_blank"
						rel="noreferrer"
					>
						<img className="w-5" src={Twitter} alt="Twitter" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;

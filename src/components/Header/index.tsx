import { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Slant as Burger } from "hamburger-react";

const Header = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const [navbar, setNavbar] = useState(false);

	const changeBackground = () => {
		if (window.scrollY > 180) setNavbar(true);
		else setNavbar(false);
	};

	useEffect(() => {
		changeBackground();
		window.addEventListener("scroll", changeBackground);
	});

	useEffect(
		() => () => window.removeEventListener("scroll", changeBackground),
		[]
	);

	interface NavItemProps {
		label: string;
		linkTo: string;
	}

	const NavItem = (props: NavItemProps) => {
		const { label, linkTo } = props;
		return (
			<li
				className="my-5 md:my-0 md:ml-8 md:font-semibold tracking-widest text-white hover:text-primary"
				onClick={() => setNavbarOpen(!navbarOpen)}
			>
				<a className="block md:inline py-4 md:p-0" href={`#${linkTo}`}>
					{label}
				</a>
			</li>
		);
	};

	return (
		<nav
			className={`${
				navbar || navbarOpen ? "bg-secondary-mid shadow-md" : "bg-transparent"
			}  text-white  w-full py-3 fixed z-50`}
		>
			<div className="max-w-6xl mx-auto px-8 flex md:items-center flex-col md:flex-row">
				<a href="https://parulchouhan.com">
					<Logo className="w-6" />
				</a>
				<div
					className={`md:flex items-center md:ml-auto ${
						navbarOpen ? " block" : " hidden"
					}`}
				>
					<ul className="text-white flex flex-col justify-center h-screen text-xl font-semibold md:text-base -mt-14 md:mt-0 md:h-auto md:static md:flex-row md:ml-auto text-center">
						<NavItem label="HOME" linkTo="home" />
						<NavItem label="ABOUT" linkTo="about" />
						<NavItem label="SERVICES" linkTo="services" />
						<NavItem label="SKILLS" linkTo="skills" />
						<NavItem label="CONTACT" linkTo="contact" />
					</ul>
				</div>
				<div
					onClick={() => setNavbarOpen(!navbarOpen)}
					className="cursor-pointer z-50 block md:hidden absolute right-6 top-1"
				>
					<Burger
						color="#fff"
						toggle={setNavbarOpen}
						toggled={navbarOpen}
						rounded
					/>
				</div>
			</div>
		</nav>
	);
};

export default Header;

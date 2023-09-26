import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Skills from "./components/Skills";
import close from "./assets/close-1.png";

const CloseButton = (props: any) => (
	<img
		src={close}
		alt="Close icon"
		onClick={props.closeToast}
		className="h-3 w-3"
	/>
);

const App = () => {
	return (
		<div className="bg-secondary">
			<Header />
			<HeroSection />
			<div className="bg-waves-mobile bg-cover md:bg-waves-desktop max-w-screen-2xl mx-auto bg-no-repeat">
				<About />
				<Services />
				<Skills />
				<Contact />
			</div>
			<Footer />
			<ToastContainer
				limit={1}
				closeButton={CloseButton}
				toastStyle={{
					backgroundColor: "#131313",
					color: "#ffffff",
					boxShadow: "0px 0px 10px 2px #1de8ff24",
				}}
				progressStyle={{ backgroundColor: "#1DE8FF" }}
			/>
		</div>
	);
};

export default App;

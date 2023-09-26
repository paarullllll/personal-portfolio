import LottieAnimation from "../LottieAnimation";
import Button from "../Button";
import scroll from "../../animation/scrollDown.json";
import bg from "../../animation/gradientBg.json";

const HeroSection = () => {
	return (
		<div id="home" className="h-screen text-white bg-secondary-dark">
			<div className="h-full max-w-6xl px-8 mx-auto flex flex-col items-center justify-center uppercase text-lg">
				<LottieAnimation
					classes="absolute opacity-50 md:w-6/12"
					lottie={bg}
					height="10"
					width="10"
				/>
				<div className="z-1 flex flex-col items-center">
					<h3>Hello! I'm parul 👋</h3>
					<h1 className="uppercase text-4xl md:text-6xl text-center font-bold mt-4 mb-6">
						I Design & Animate stuff
					</h1>
					<a href="mailto:parulchouhan1711@gmail.com">
						<Button>GET IN TOUCH</Button>
					</a>
					<a href="#about" className="w-6 absolute bottom-8">
						<LottieAnimation lottie={scroll} height="110" width="110" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;

import Typewriter from "typewriter-effect";
import ParulAvatar from "../../assets/parul-avatar.svg";
import Button from "../Button";

const About = () => {
	return (
		<div id="about" className="max-w-6xl px-8 py-24 mx-auto">
			<div className="flex flex-col items-center md:items-start font-semibold uppercase">
				<h1 className="text-secondary-light text-6.5xl font-bold inline uppercase absolute transform -translate-y-10.5">
					About me
				</h1>
				<h1 className="text-white text-3xl inline relative tracking-wider">
					About Me
				</h1>
			</div>
			<div className="mt-12 md:mt-0 flex flex-col items-center md:flex-row-reverse md:justify-between gap-8">
				<img src={ParulAvatar} className="h-48 md:h-64" alt="Parul Chouhan" />
				<div className="flex flex-col items-center md:items-start md:max-w-xl">
					<h2 className="text-primary text-center md:text-left text-xl font-semibold mt-9 mb-4">
						<Typewriter
							options={{
								strings: [
									"Hey! I am Parul Chouhan",
									"Graphic Designer",
									"2D Animator",
									"UI/UX Designer",
								],
								autoStart: true,
								loop: true,
								delay: "natural",
								deleteSpeed: 20,
							}}
						/>
					</h2>
					<p className="text-white text-base text-center md:text-left mb-8">
						Hey there! I'm an individual, playing sarcasm with design. As a
						freelance designer I love to craft my innovative ideas into designs
						to make it look more appealing and user friendly. In my spare time I
						like to travel places, photograph things and explore with a touch of
						Spotify.
					</p>
					<a href="https://drive.google.com/uc?export=download&id=1Fm_muKxmPp-4Ep6_9t8ntdtaKaT1Kg9Q">
						<Button>MY RESUME</Button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default About;

import React from "react";
import AfterEffects from "../../assets/after-effects.svg";
import Animate from "../../assets/animate.svg";
import Illustrator from "../../assets/illustrator.svg";
import Indesign from "../../assets/indesign.svg";
import Lightroom from "../../assets/lightroom.svg";
import Photoshop from "../../assets/photoshop.svg";
import PremierePro from "../../assets/premiere-pro.svg";
import Xd from "../../assets/xd.svg";
import Audition from "../../assets/audition.svg";
import Figma from "../../assets/figma.svg";
import Lunacy from "../../assets/lunacy.svg";
import Maya from "../../assets/maya.svg";

const Skills = () => {
	return (
		<div id="skills" className="max-w-6xl px-8 py-32 mx-auto">
			<div className="flex flex-col items-center font-semibold uppercase">
				<h1 className="text-secondary-light text-6.5xl font-bold inline uppercase absolute transform -translate-y-10.5">
					Skills
				</h1>
				<h1 className="text-white text-3xl inline relative tracking-wider">
					Skills
				</h1>
			</div>
			<div className="flex justify-center flex-wrap gap-4 md:gap-8 w-32 md:w-auto md:max-w-lg mt-12 mx-auto">
				<img
					className="w-12 md:w-14"
					src={Illustrator}
					alt="Adobe Illustrator"
				/>
				<img className="w-12 md:w-14" src={Photoshop} alt="Adobe Photoshop" />
				<img className="w-12 md:w-14" src={Xd} alt="Adobe XD" />
				<img className="w-12 md:w-14" src={Animate} alt="Adobe Animate" />
				<img
					className="w-12 md:w-14"
					src={AfterEffects}
					alt="Adobe After Effects"
				/>
				<img className="w-12 md:w-14" src={Lightroom} alt="Adobe Lightroom" />
				<img
					className="w-12 md:w-14"
					src={PremierePro}
					alt="Adobe Premiere Pro"
				/>
				<img className="w-12 md:w-14" src={Audition} alt="Adobe Audition" />
				<img className="w-12 md:w-14" src={Indesign} alt="Adobe Indesign" />
				<img className="w-12 md:w-14" src={Maya} alt="Maya" />
				<img className="w-12 h-12 md:w-14 md:h-14" src={Figma} alt="Figma" />
				<img className="w-12 md:w-14" src={Lunacy} alt="Lunacy" />
			</div>
		</div>
	);
};

export default Skills;

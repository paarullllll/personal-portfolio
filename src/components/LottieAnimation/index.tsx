import React from "react";
import Lottie from "react-lottie";

interface lottieProps {
	lottie: any;
	width: string | number | undefined;
	height: string | number | undefined;
	classes?: string;
}

export default function LottieAnimation(props: lottieProps) {
	const { lottie, width, height, classes } = props;
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: lottie,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div className={`z-0 ${classes}`}>
			<Lottie
				options={defaultOptions}
				height={height}
				width={width}
				isClickToPauseDisabled
			/>
		</div>
	);
}

import React, { ReactNode } from "react";
import Loader from "../Loader";

interface ButtonProps {
	children: string | ReactNode;
	classes?: string;
	onClick?: React.MouseEventHandler<HTMLElement> | undefined;
	type?: "button" | "submit" | "reset" | undefined;
	disabled?: boolean;
	isLoading?: boolean;
}

const Button = (props: ButtonProps) => {
	const { children, classes, onClick, type, disabled, isLoading } = props;
	return (
		<button
			onClick={onClick}
			className={`bg-primary hover:bg-primary-hover text-secondary text-base font-semibold px-10 py-3 rounded-md flex items-center justify-center ${
				disabled || isLoading ? "cursor-not-allowed opacity-50" : ""
			} ${classes}`}
			type={type}
			disabled={disabled}
		>
			{isLoading ? <Loader bg="#000" color="#000" /> : null}
			{children}
		</button>
	);
};

export default Button;

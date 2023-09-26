import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../Button";
import { toast } from "react-toastify";

const Form = () => {
	const [isBtnLoading, setIsBtnLoading] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);
	const [name, setName] = useState("");
	const [contactNo, setContactNo] = useState("");
	const [message, setMessage] = useState("");

	const form: any = useRef(null);

	const sendEmail = (e: any) => {
		setIsBtnLoading(true);
		setIsDisabled(true);
		e.preventDefault();
		emailjs
			.sendForm(
				"service_u51uofi",
				"template_4m88ufd",
				form.current,
				"user_0jcZ74t0aQ77Yegb7f5Nw"
			)
			.then(
				(result: any) => {
					console.log(result.text);
					toast.success("Thanks for reaching me out! Will get back to you!", {
						icon: "🚀",
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: false,
						draggable: true,
						progress: undefined,
					});
					setIsDisabled(false);
					setIsBtnLoading(false);
					setName("");
					setContactNo("");
					setMessage("");
				},
				(error: any) => {
					console.log(error.text);
					toast.success("Something went wrong", {
						icon: "🛑",
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: false,
						draggable: true,
						progress: undefined,
					});
					setIsBtnLoading(false);
					setIsDisabled(false);
					setName("");
					setContactNo("");
					setMessage("");
				}
			);
	};
	return (
		<form ref={form} onSubmit={sendEmail} className="flex flex-col md:w-96">
			<div className="flex flex-col mb-4">
				<span className="uppercase text-white mb-2">Name</span>
				<input
					className="bg-secondary-light p-4 text-white focus:outline-none rounded-md"
					type="text"
					placeholder="Enter your Name"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
			</div>
			<div className="flex flex-col mb-4">
				<span className="uppercase text-white mb-2">contact no.</span>
				<input
					className="bg-secondary-light p-4 text-white focus:outline-none rounded-md"
					type="text"
					placeholder="Enter your Contact no."
					name="contact_no"
					value={contactNo}
					onChange={(e) => setContactNo(e.target.value)}
					required
				/>
			</div>
			<div className="flex flex-col mb-6">
				<span className="uppercase text-white mb-2">Message</span>
				<textarea
					className="bg-secondary-light p-4 text-white focus:outline-none rounded-md resize-none"
					placeholder="Your message here..."
					rows={5}
					name="message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					required
				/>
			</div>
			<Button type="submit" isLoading={isBtnLoading} disabled={isDisabled}>
				SEND MESSAGE
			</Button>
		</form>
	);
};

export default Form;

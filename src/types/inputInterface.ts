export interface InputProps {
	inputTitleLeft?: string; // Optional label text displayed on the left above
	inputTitleRight?: string; //optional Label text displayed on the right above
	placeholder: string; // Placeholder text for the input field.
	type: "email" | "password" | "text"; // Input type, restricted to "email" or "password" or "text".
	className?: string;
}

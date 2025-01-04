import { cn } from "../../lib/utils";
import { Input } from "../ui/input";

interface InputProps {
	inputTitleLeft?: string; // Optional label text displayed on the left above
	inputTitleRight?: string; //optional Label text displayed on the right above
	placeholder: string; // Placeholder text for the input field.
	type: "email" | "password" | "text"; // Input type, restricted to "email" or "password" or "text".
}

// InputComponent: A reusable component for rendering input fields with optional titles.
export const InputComponent = ({
	inputTitleLeft,
	inputTitleRight,
	placeholder,
	type,
}: InputProps) => {
	return (
		<div className={cn("my-5")}>
			{inputTitleLeft && (
				<p
					className={cn(
						"flex justify-between my-2 font-medium text-grey-700"
					)}>
					<span>{inputTitleLeft}</span>
					<span>{inputTitleRight}</span>
				</p>
			)}
			{/* Input field with custom placeholder and type */}
			<Input
				placeholder={placeholder}
				type={type}
				className={cn(
					"bg-grey-50 font-medium py-5 w-full text-grey-500"
				)}
			/>
		</div>
	);
};

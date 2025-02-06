import { cn } from "../../lib/utils";
import { InputProps } from "../../types/inputInterface";
import { Input } from "../ui/input";

// InputComponent: A reusable component for rendering input fields with optional titles.
export const InputComponent = ({
	inputTitleLeft,
	inputTitleRight,
	placeholder,
	type,
	className,
}: InputProps) => {
	return (
		<div className={cn("my-5")}>
			{inputTitleLeft && (
				<p
					className={cn(
						"flex justify-between my-2 font-medium text-grey-700 text-sm opacity-80"
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
					"bg-grey-50 font-medium py-5 w-full text-grey-500 placeholder:opacity-50 text-sm my-4",
					className
				)}
			/>
		</div>
	);
};

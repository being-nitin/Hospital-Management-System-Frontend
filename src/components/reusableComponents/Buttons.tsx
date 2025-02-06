import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { ReactElement } from "react";
import { FlexibleButtonProps } from "../../types/buttonInterface";

// styling classes for different button variants and default styles.
const styleObj = {
	primary: "bg-primary text-white",
	secondary: "border-primary bg-secondary text-primary hover:bg-secondary",
	default: "text-white rounded-md py-5 flex justify-center items-center",
};

// FlexibleButton component for rendering customizable buttons with optional icons.
export const FlexibleButton = ({
	text,
	variant,
	icon,
	className,
	onClick,
}: FlexibleButtonProps) => {
	return (
		<Button
			className={cn(
				styleObj.default,
				variant === "primary" ? styleObj.primary : styleObj.secondary,
				className
			)}
			onClick={onClick}>
			{icon && <span>{icon}</span>}
			<span>{text}</span>
		</Button>
	);
};

// CircularIconButton component for rendering circular buttons with an icon.
export const CircularIconButton = ({ icon }: { icon: ReactElement }) => {
	return (
		<Button className={cn("bg-primary w-10 h-10 text-white rounded-full")}>
			{icon}
		</Button>
	);
};

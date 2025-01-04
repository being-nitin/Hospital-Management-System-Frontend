import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { ReactElement } from "react";

interface FlexibleButtonProps {
	text: string; //text to be displayed inside the button.
	variant: "primary" | "secondary"; //variant of the button, determines its styling.
	icon?: ReactElement; //optional icon to display inside the button.
	onClick?: () => void; //optional onClick handler for button actions.
}

// styling classes for different button variants and default styles.
const styleObj = {
	primary: "bg-primary text-white",
	secondary: "border-primary bg-secondary text-primary hover:bg-secondary",
	default: "text-white rounded-md w-full py-5",
};

// FlexibleButton component for rendering customizable buttons with optional icons.
export const FlexibleButton = ({
	text,
	variant,
	icon,
}: FlexibleButtonProps) => {
	return (
		<Button
			className={cn(
				styleObj.default,
				variant === "primary" ? styleObj.primary : styleObj.secondary
			)}>
			{icon ? icon : null}
			{text}
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

import { ReactElement } from "react";

export interface FlexibleButtonProps {
	text: string; //text to be displayed inside the button.
	variant: "primary" | "secondary"; //variant of the button, determines its styling.
	icon?: ReactElement; //optional icon to display inside the button.
	onClick?: () => void; //optional onClick handler for button actions.
	className?: string;
}

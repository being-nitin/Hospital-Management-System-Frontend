import { Button } from "../../components/ui/button";
import { cn } from "../../lib/utils";
import { ReactElement } from "react";

interface FlexibleButtonProps {
	text: string;
	variant: "primary" | "secondary";
	icon?: ReactElement;
	onClick?: () => void;
}

const styleObj = {
	primary: "bg-primary text-white",
	secondary: "border-primary bg-secondary text-primary hover:bg-secondary",
	default: "text-white rounded-xl min-w-32 py-5",
};

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

export const CircularIconButton = ({ icon }: { icon: ReactElement }) => {
	return (
		<Button className={cn("bg-primary w-10 h-10 text-white rounded-full")}>
			{icon}
		</Button>
	);
};

import { cn } from "../../lib/utils";
import { MyCardHeaderProps } from "../../types/cardInterface";
import { CardDescription, CardHeader, CardTitle } from "../ui/card";

// Component for rendering the header of a card.
export const MyCardHeader = ({
	cardTitle,
	cardDescription,
}: MyCardHeaderProps) => {
	return (
		<CardHeader className={cn("pt-4 text-center")}>
			<CardTitle className={cn("text-xl")}>{cardTitle}</CardTitle>
			<CardDescription
				className={cn("opacity-80 text-[#202224] pt-4 font-medium")}>
				{cardDescription}
			</CardDescription>
		</CardHeader>
	);
};

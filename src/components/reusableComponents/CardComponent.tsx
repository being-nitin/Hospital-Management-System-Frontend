import { cn } from "../../lib/utils";
import { CardDescription, CardHeader, CardTitle } from "../ui/card";

interface MyCardHeaderProps {
	cardTitle: string; //title of the card,
	cardDescription: string; //description for the card, displayed below the title.
}

// Component for rendering the header of a card.
export const MyCardHeader = ({
	cardTitle,
	cardDescription,
}: MyCardHeaderProps) => {
	return (
		<CardHeader className={cn("pt-4")}>
			<CardTitle className={cn("text-xl")}>{cardTitle}</CardTitle>
			<CardDescription
				className={cn("opacity-80 text-[#202224] font-medium")}>
				{cardDescription}
			</CardDescription>
		</CardHeader>
	);
};

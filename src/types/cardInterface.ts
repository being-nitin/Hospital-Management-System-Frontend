import { ReactElement } from "react";

export interface MyCardHeaderProps {
	cardTitle: string; //title of the card,
	cardDescription: string; //description for the card, displayed below the title.
}

export interface DashboardCardDataProps {
	dashboardData: {
		icon: ReactElement;
		title: string;
		totalCount: number;
		percent: number;
	};
	type: "patient" | "staff" | "appointments" | "expenses";
}

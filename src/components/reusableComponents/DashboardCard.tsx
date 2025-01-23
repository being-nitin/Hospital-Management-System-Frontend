import { ReactElement } from "react";
import { Card, CardHeader } from "../ui/card";
import { cn } from "../../lib/utils"; // Utility function for conditional classNames.

// Define the props interface for DashboardCard
interface DashboardCardDataProps {
	dashboardData: {
		icon: ReactElement;
		title: string;
		totalCount: number;
		percent: number;
	};
	type: "patient" | "staff" | "appointments" | "expenses";
}

// Object containing variant-specific styles for different card types.
const variantStyle = {
	patient: "bg-[#DFFCFF] border-[#00BBFF]",
	staff: "bg-[#FFE4FC] border-[#FF67EE]",
	appointments: "bg-[#DAFFD9] border-[#4AFF45]",
	expenses: "bg-[#FFFDC4] border-[#FEF60E]",
};

export function DashboardCard({ dashboardData, type }: DashboardCardDataProps) {
	// Destructure data from the dashboardData prop
	const { icon, percent, title, totalCount } = dashboardData;
	return (
		<Card
			className={cn(
				"border text-[#0A1B39] p-6 flex flex-col gap-y-4 w-64 flex-1 shadow-md",
				variantStyle[type]
			)}>
			<CardHeader className="flex-row items-center justify-between p-0 py-2 gap-1">
				<span>{icon}</span>
				<span
					className={cn(
						"text-[#62D4A0]",
						type === "appointments" ? "text-[#D62525]" : ""
					)}>
					+{percent}%
				</span>
			</CardHeader>
			<div className="text-left flex flex-col gap-y-1">
				<p className="font-normal">{title}</p>
				<p className="font-medium text-3xl">{totalCount}</p>
			</div>
		</Card>
	);
}

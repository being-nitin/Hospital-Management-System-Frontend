import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Dot } from "lucide-react";

//status can be closed, pending, or scheduled
interface statusBadgeProps {
	status: "closed" | "pending" | "scheduled";
}

// Component for rendering a status badge with dynamic styling and text.
export const StatusBadge = ({ status }: statusBadgeProps) => {
	const badgeColor =
		status === "closed"
			? "bg-[#FBCECF] text-[#FF6565]" // Styling for "closed" status: red theme.
			: status === "pending"
			? "bg-[#FFF6E7] text-[#F9BF44]" // Styling for "pending" status: yellow theme.
			: "bg-[#E1F0EF] text-[#49736F]"; // Styling for "scheduled" status: green theme.

	// Determine the text to display based on the status.
	const text =
		status === "closed"
			? "Closed"
			: status === "pending"
			? "Pending"
			: "Scheduled";

	return (
		<Badge
			className={cn(
				"rounded-md px-3 py-2 text-sm font-medium flex max-w-28 justify-center items-center",
				badgeColor
			)}
			variant="outline">
			<span className="flex items-center justify-center">
				<Dot strokeWidth={10} size={16} />
				<span>{text}</span>
			</span>
		</Badge>
	);
};

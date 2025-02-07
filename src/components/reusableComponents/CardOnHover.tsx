import { Ellipsis } from "lucide-react";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "../ui/hover-card";
import { CircularIconButton, FlexibleButton } from "./Buttons";
import { PencilIcon } from "../../assets/icons/PencilIcon";
import { PatientIcon } from "../../assets/icons/PatientIcon";
import { TrashIcon } from "../../assets/icons/TrashIcon";

export default function CardOnHover() {
	return (
		<HoverCard>
			<HoverCardTrigger>
				<CircularIconButton icon={<Ellipsis />} />
			</HoverCardTrigger>
			<HoverCardContent align="center" className="w-fit p-2.5 space-y-2">
				<FlexibleButton
					text="Edit"
					variant="secondary"
					className="border-0 w-full justify-start"
					iconColor="primary"
					icon={<PencilIcon />}
				/>
				<FlexibleButton
					text="Profile"
					variant="secondary"
					className="border-0 w-full justify-start"
					icon={<PatientIcon />}
				/>
				<FlexibleButton
					text="Delete"
					variant="secondary"
					className="border-0 w-full justify-start bg-[#E71D36] bg-opacity-5 text-[#E71D36]"
					icon={<TrashIcon />}
				/>
			</HoverCardContent>
		</HoverCard>
	);
}

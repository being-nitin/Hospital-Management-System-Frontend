import { CalenderIcon } from "../assets/icons/CalenderIcon";
import { DashboardIcon } from "../assets/icons/DashboardIcon";
import { ListUsersIcon } from "../assets/icons/ListUsersIcon";
import { MedicineIcon } from "../assets/icons/MedicineIcon";
import { PatientIcon } from "../assets/icons/PatientIcon";

export const homeMenuItems = [
	{
		title: "Dashboard",
		url: "#",
		icon: DashboardIcon(),
	},
	{
		title: "Calender",
		url: "#",
		icon: CalenderIcon(),
	},
	{
		title: "List Users",
		url: "#",
		icon: ListUsersIcon(),
	},
];

export const moduleMenuItems = [
	{ title: "Appointments", url: "#", icon: ListUsersIcon() },
	{ title: "Patient", url: "#", icon: PatientIcon() },
	{ title: "Medicine", url: "#", icon: MedicineIcon() },
];

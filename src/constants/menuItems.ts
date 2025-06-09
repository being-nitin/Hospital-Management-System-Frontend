import { CalenderIcon } from "../assets/icons/CalenderIcon";
import { DashboardIcon } from "../assets/icons/DashboardIcon";
import { ListUsersIcon } from "../assets/icons/ListUsersIcon";
import { MedicineIcon } from "../assets/icons/MedicineIcon";
import { PatientIcon } from "../assets/icons/PatientIcon";

export const homeMenuItems = [
	{
		title: "Dashboard",
		url: "/",
		icon: DashboardIcon(),
	},
	{
		title: "Calender",
		url: "/calendar",
		icon: CalenderIcon(),
	},
	{
		title: "List Users",
		url: "#",
		icon: ListUsersIcon(),
	},
];

export const moduleMenuItems = [
	{ title: "Appointments", url: "/Appointments", icon: ListUsersIcon() },
	{ title: "Patient", url: "/patients", icon: PatientIcon() },
	{ title: "Medicine", url: "/medicines", icon: MedicineIcon() },
];

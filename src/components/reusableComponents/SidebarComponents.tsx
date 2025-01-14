import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SidebarFooter, SidebarHeader } from "../ui/sidebar";
import { FlexibleButton } from "./Buttons";
import { LogoIcon } from "../../assets/icons/logoIcon";
import { cn } from "../../lib/utils";
import { LogoutIcon } from "../../assets/icons/LogoutIcon";
import { CustomerServiceIcon } from "../../assets/icons/CustomerServiceIcon";
import { DashboardIcon } from "../../assets/icons/DashboardIcon";
import { CalenderIcon } from "../../assets/icons/CalenderIcon";
import { ListUsersIcon } from "../../assets/icons/ListUsersIcon";
import { ReactElement } from "react";
import { url } from "inspector";
import { PatientIcon } from "../../assets/icons/PatientIcon";
import { MedicineIcon } from "../../assets/icons/MedicineIcon";

// Menu items.
const homeMenuItems = [
	{
		title: "Dashboard",
		url: "#",
		icon: <DashboardIcon />,
	},
	{
		title: "Calender",
		url: "#",
		icon: <CalenderIcon />,
	},
	{
		title: "List Users",
		url: "#",
		icon: <ListUsersIcon />,
	},
];

const moduleMenuItems = [
	{ title: "Appointments", url: "#", icon: <ListUsersIcon /> },
	{ title: "Patient", url: "#", icon: <PatientIcon /> },
	{ title: "Medicine", url: "#", icon: <MedicineIcon /> },
];

function AppSidebarHeader() {
	return (
		<div className="flex font-extrabold text-lg justify-center items-center">
			<LogoIcon />
			<div>
				<span className="text-primary">Mad</span>
				<span>Manage</span>
			</div>
		</div>
	);
}

function AppSidebarFooter() {
	return (
		<div>
			<div className="p-3 flex flex-col items-center gap-2">
				<h6 className="font-medium text-grey-900 text-center">
					<CustomerServiceIcon />
				</h6>
				<p className="text-xs text-grey-500 text-left">
					contact with one of our experts to get supports
				</p>
				<FlexibleButton
					text="Contact Us"
					variant="secondary"
					className="rounded-xl w-full bg-white border-black text-grey-900 font-medium"
				/>
			</div>
			<FlexibleButton
				text="Logout"
				variant="primary"
				className="rounded-xl w-full bg-[#FF5555] hover:bg-red-400 hover:border-none"
				icon={<LogoutIcon />}
			/>
		</div>
	);
}

interface MenuItem {
	title: string;
	url: string;
	icon: ReactElement;
}
function AppSidebarGroupContent({
	groupLabelHeading,
	menuList,
}: {
	groupLabelHeading: string;
	menuList: MenuItem[];
}) {
	return (
		<SidebarGroup className="gap-1">
			<SidebarGroupLabel className="text-sm w-full pl-4 py-1">
				{groupLabelHeading}
			</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					{menuList.map(({ icon, title, url }) => (
						<SidebarMenuItem key={title}>
							<SidebarMenuButton
								asChild
								className="pl-4 py-1 font-semibold text-sm gap-y-0 text-[#0A1B39]">
								<a href={url}>
									<span>{icon && icon}</span>
									<span>{title}</span>
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}

export function AppSidebar() {
	return (
		<Sidebar>
			{/* Sidebar Header */}
			<SidebarHeader className={cn("pt-6 px-5 border-b pb-10")}>
				<AppSidebarHeader />
			</SidebarHeader>

			<SidebarContent className="px-5 pt-14">
				<AppSidebarGroupContent
					groupLabelHeading="Home"
					menuList={homeMenuItems}
				/>
				<AppSidebarGroupContent
					groupLabelHeading="Modules"
					menuList={moduleMenuItems}
				/>
			</SidebarContent>

			<SidebarFooter className="px-10 pb-4">
				<AppSidebarFooter />
			</SidebarFooter>
		</Sidebar>
	);
}

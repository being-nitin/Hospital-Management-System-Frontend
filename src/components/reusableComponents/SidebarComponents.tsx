import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "../../components/ui/sidebar";
import { SidebarFooter, SidebarHeader } from "../ui/sidebar";
import { FlexibleButton } from "./Buttons";
import { LogoIcon } from "../../assets/icons/LogoIcon";
import { cn } from "../../lib/utils";
import { LogoutIcon } from "../../assets/icons/LogoutIcon";
import { CustomerServiceIcon } from "../../assets/icons/CustomerServiceIcon";
import { ReactElement } from "react";
import { homeMenuItems, moduleMenuItems } from "../../constants/menuItems";
import { useLocation } from "react-router-dom";

// Component: Header of the sidebar
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

// Component: Footer of the sidebar
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
					className="rounded-lg w-full bg-white border-[#DFE1E7] text-grey-900 font-medium"
				/>
			</div>
			<FlexibleButton
				text="Logout"
				variant="primary"
				className="rounded-xl w-full bg-[#FF2A26] hover:bg-red-600 border-none mt-3"
				icon={<LogoutIcon />}
			/>
		</div>
	);
}

// Interface: Defines the structure of a single menu item
interface MenuItem {
	title: string;
	url: string;
	icon: ReactElement;
	isActive?: boolean;
}

function isActive(url: string, pathname: string) {
	return url == pathname;
}
// Component: Renders a single menu item in the sidebar
function AppSidebarMenuItem({ title, url, icon, isActive }: MenuItem) {
	return (
		<SidebarMenuItem>
			<SidebarMenuButton
				asChild
				className={cn(
					"pl-4 py-3 font-semibold text-sm gap-y-0 ",
					isActive
						? "text-primary bg-secondary border border-primary hover:bg-secondary hover:text-primary"
						: "text-[#0A1B39] border-0"
				)}>
				<a href={url}>
					<span>{icon}</span>
					<span>{title}</span>
				</a>
			</SidebarMenuButton>
		</SidebarMenuItem>
	);
}

// Interface: Props for a group of menu items
interface GroupContentProps {
	groupLabelHeading: string;
	menuList: MenuItem[];
}

// Component: Renders a group of menu items with a heading
function AppSidebarGroupContent({
	groupLabelHeading,
	menuList,
}: GroupContentProps) {
	const { pathname } = useLocation();

	return (
		<SidebarGroup className="gap-1">
			<SidebarGroupLabel className="text-sm w-full pl-4 py-1 text-[#83899F]">
				{groupLabelHeading}
			</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					{menuList.map(({ icon, title, url }) => (
						<AppSidebarMenuItem
							key={title}
							title={title}
							icon={icon}
							url={url}
							isActive={isActive(url, pathname)}
						/>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}

// Main Sidebar Component
export function AppSidebar() {
	return (
		<Sidebar>
			{/* Sidebar Header */}
			<SidebarHeader
				className={cn("px-5 border-b flex justify-center h-24")}>
				<AppSidebarHeader />
			</SidebarHeader>

			{/* Sidebar Content */}
			<SidebarContent className="px-5 pt-10">
				{/* Home Menu list */}
				<AppSidebarGroupContent
					groupLabelHeading="Home"
					menuList={homeMenuItems}
				/>
				{/* Modules Menu List */}
				<AppSidebarGroupContent
					groupLabelHeading="Modules"
					menuList={moduleMenuItems}
				/>
			</SidebarContent>

			{/* Sidebar Footer */}
			<SidebarFooter className="px-10 pb-4">
				<AppSidebarFooter />
			</SidebarFooter>
		</Sidebar>
	);
}

import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { MessageIcon } from "../../assets/icons/MessageIcon";
import { BellIcon } from "../../assets/icons/BellIcon";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "../ui/hover-card";
import { ChevronDown, Search } from "lucide-react";
import { SidebarTrigger, useSidebar } from "../ui/sidebar";
import { cn } from "../../lib/utils";
import { ManageAccountIcon } from "../../assets/icons/ManageAccountIcon";
import { ReactElement } from "react";
import { ChangePasswordIcon } from "../../assets/icons/ChangePasswordIcon";
import { ColoredLogoutIcon } from "../../assets/icons/LogoutIcon";
import { ActivityLogIcon } from "../../assets/icons/ActivityLogIcon";

// Props interface for SubMenuItem
interface SubMenuItemProps {
	menuIcon: ReactElement;
	menuLabel: string;
}

// Component: SubMenuItem
// Renders an individual menu item with an icon and label
function SubMenuItem({ menuIcon, menuLabel }: SubMenuItemProps) {
	return (
		<div className="gap-x-2.5 flex pl-5 items-center hover:cursor-pointer py-4 border-b rounded-sm ">
			<span>{menuIcon}</span>
			<span className="text-sm text-grey-800">{menuLabel}</span>
		</div>
	);
}

// Component: CardOnHover
// Renders a hoverable dropdown menu for user profile options
function CardOnHover() {
	return (
		<HoverCard>
			<HoverCardTrigger className="hover:underline hover:text-black hover:cursor-pointer flex items-center text-[#161E54] text-sm">
				Admin
				<span className="text-[#737898]">
					<ChevronDown />
				</span>
			</HoverCardTrigger>
			<HoverCardContent align="end" className="rounded-xl p-0">
				<SubMenuItem
					menuIcon={<ManageAccountIcon />}
					menuLabel="Manage Account"
				/>
				<SubMenuItem
					menuIcon={<ChangePasswordIcon />}
					menuLabel="Change Password"
				/>
				<SubMenuItem
					menuIcon={<ActivityLogIcon />}
					menuLabel="Activity Log"
				/>
				<SubMenuItem
					menuIcon={<ColoredLogoutIcon />}
					menuLabel="Log out"
				/>
			</HoverCardContent>
		</HoverCard>
	);
}

// Component: Menubar
// Renders the top navigation bar with a search bar, notifications, messages, and user profile
export function Menubar() {
	const { isMobile, open, openMobile } = useSidebar();

	console.log(isMobile, open, openMobile);
	return (
		<div
			className={cn(
				"border-b fixed bg-sidebar top-0 z-40 md:left-[18rem] flex h-24 items-center justify-between ",
				!open ? "w-full !left-0" : "w-10/12 ",
				isMobile ? "w-full !left-0" : ""
			)}>
			{/* Left section: Welcome message and sidebar toggle */}
			<p className="text-sm md:text-2xl font-medium pl-4 text-left flex items-center gap-2 md:w-2/5">
				<SidebarTrigger
					variant="secondary"
					className={cn(
						"bg-white hover:bg-white border-none shadow-none"
					)}
				/>
				Welcome Back
			</p>

			{/*Middle section: Search Bar in the Header */}
			<div className="relative hidden md:block md:w-1/4">
				<Input
					placeholder="Search"
					className="md:min-w-full md:max-w-96 px-4 py-2 placeholder:font-normal"
				/>
				<Search className="absolute right-0 top-0 m-2.5 h-4 w-4 text-muted-foreground" />
			</div>

			{/* Right section: Notifications, messages, and user profile */}
			<div className="py-6 md:pr-12 pr-3 gap-3 md:gap-6 sm:flex items-center hidden">
				<BellIcon />
				<MessageIcon />
				<div className="gap-3 flex items-center">
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<CardOnHover />
				</div>
			</div>
		</div>
	);
}

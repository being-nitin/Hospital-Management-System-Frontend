import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { MessageIcon } from "../../assets/icons/MessageIcon";
import { BellIcon } from "../../assets/icons/BellIcon";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "../ui/hover-card";
import { ChevronDown, Search, UserRoundPen } from "lucide-react";
import { SidebarTrigger, useSidebar } from "../ui/sidebar";
import { cn } from "../../lib/utils";

function CardOnHover() {
	return (
		<HoverCard>
			<HoverCardTrigger className="hover:underline hover:text-black hover:cursor-pointer flex items-center text-[#161E54]">
				Admin
				<span className="text-[#737898]">
					<ChevronDown />
				</span>
			</HoverCardTrigger>
			<HoverCardContent align="end" className="rounded-xl">
				<div className="w-full flex gap-2.5 justify-center py-3 text-sm">
					<UserRoundPen /> Manage Account
				</div>
			</HoverCardContent>
		</HoverCard>
	);
}

export function Menubar() {
	const { isMobile, open, openMobile } = useSidebar();

	console.log(isMobile, open, openMobile);
	return (
		<div
			className={cn(
				"border-b fixed bg-sidebar top-0 z-40 md:left-[18rem] flex h-24 items-center justify-between ",
				!open ? "w-full !left-0" : "w-10/12 "
			)}>
			<p className="text-3xl font-medium pl-4 w-96 text-left flex items-center gap-4">
				<SidebarTrigger variant="secondary" />
				Welcome Back
			</p>

			{/* Search Bar in the Header */}
			<div className="relative">
				<Input
					placeholder="Search"
					className="min-w-96 px-4 py-3 placeholder:font-normal"
				/>
				<Search className="absolute right-0 top-0 m-2.5 h-4 w-4 text-muted-foreground" />
			</div>

			<div className="py-6 pr-12 gap-8 flex items-center">
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

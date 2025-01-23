import { SidebarProvider } from "../components/ui/sidebar";
import { AppSidebar } from "../components/reusableComponents/SidebarComponents";
import { Menubar } from "../components/reusableComponents/Menubar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider>
			<Menubar />
			<div className="flex w-screen">
				<AppSidebar />
				<main className="flex-grow mt-24 px-6 py-3">{children}</main>
			</div>
		</SidebarProvider>
	);
}

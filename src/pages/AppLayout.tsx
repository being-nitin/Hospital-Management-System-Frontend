import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/reusableComponents/SidebarComponents";
import { Menubar } from "../components/reusableComponents/Menubar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider>
			<Menubar />
			<AppSidebar />
			<main className="mt-24 px-6 py-4">{children}</main>
		</SidebarProvider>
	);
}

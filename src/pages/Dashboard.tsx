import { DashboardCard } from "../components/reusableComponents/DashboardCard";
import React from "react";
import { PatientHeart } from "../assets/icons/PatientHeart";
import { StaffIcon } from "../assets/icons/StaffIcon";
import { AppointmentIcon } from "../assets/icons/AppointmentsIcon";
import { ExpenseIcon } from "../assets/icons/ExpenseIcon";

const data = [
	{
		icon: PatientHeart(),
		percent: 50,
		title: "Total Patients",
		totalCount: 150,
	},
	{
		icon: StaffIcon(),
		percent: 70,
		title: "Present Workforce/Staff",
		totalCount: 150,
	},
	{
		icon: AppointmentIcon(),
		percent: 25,
		title: "Appointments",
		totalCount: 150,
	},
	{
		icon: ExpenseIcon(),
		percent: 50,
		title: "Appointments",
		totalCount: 12000,
	},
];
const Dashboard = () => {
	return (
		<React.Fragment>
			<h3 className="pb-3 text-2xl text-primary font-medium">
				Dashboard
			</h3>
			{/* Dashboard Cards */}
			<div className="flex w-full gap-6 flex-wrap">
				<DashboardCard dashboardData={data[0]} type="patient" />
				<DashboardCard dashboardData={data[1]} type="staff" />
				<DashboardCard dashboardData={data[2]} type="appointments" />
				<DashboardCard dashboardData={data[3]} type="expenses" />
			</div>
		</React.Fragment>
	);
};

export default Dashboard;

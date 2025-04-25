import { ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import { CardHeader } from "../ui/card";

const appointments = [
	{
		day: "Sat",
		date: "15",
		doctor: "Dr. Ashton Cleve",
		time: "10:00am - 10:30am",
	},
	{
		day: "Sun",
		date: "16",
		doctor: "Dr. Emily Carter",
		time: "11:00am - 11:30am",
	},
	{
		day: "Mon",
		date: "17",
		doctor: "Dr. John Doe",
		time: "09:30am - 10:00am",
	},
	{
		day: "Mon",
		date: "17",
		doctor: "Dr. John Doe",
		time: "09:30am - 10:00am",
	},
];

interface AppoinmentCardProps {
	day: string;
	date: string;
	doctor: string;
	time: string;
}

const AppointmentCard = ({ day, date, doctor, time }: AppoinmentCardProps) => {
	return (
		<div className="group flex items-center bg-white rounded-lg p-3 transition hover:bg-[#FFEBEB] ">
			{/* Date Box */}
			<div className="flex flex-col items-center justify-center bg-[#EEF5DF] text-[#1E1E1E] font-semibold rounded-lg w-16 h-16 p-2 group-hover:bg-white">
				<span className="text-xs">{day}</span>
				<span className="text-xl">{date}</span>
			</div>

			{/* Appointment Details */}
			<div className="flex-1 ml-4">
				<h3 className="text-md font-semibold text-gray-800">
					{doctor}
				</h3>
				<p className="text-[#878787] text-sm">{time}</p>
			</div>

			{/* Arrow Icon */}
			<ChevronRight className="w-5 h-5 text-[#1E1E1E]" />
		</div>
	);
};

const UpcomingAppointments = () => {
	return (
		<div className="px-3 border rounded-lg shadow-lg bg-white w-full h-full">
			<CardHeader className="flex-row items-center justify-between p-0 px-4 py-3">
				<h2 className="text-lg text-[#484848] font-semibold">
					Upcoming Appointments
				</h2>
				<p className="text-primary font-bold text-xs flex items-center">
					View All <ChevronRight size={14} />
				</p>
			</CardHeader>

			<div className="flex items-center bg-[#F6F6F6] rounded-lg p-2 transition my-2">
				<div className="flex gap-2 flex-1 items-center px-3 font-medium">
					<span>June</span>
					<span>2023</span>
					<ChevronLeft className="text-[#1E1E1E]" />
					<ChevronRight className="text-[#1E1E1E]" />
				</div>
				<ChevronUp className="w-5 h-5 text-[#1E1E1E]" />
			</div>

			<div className="w-full max-w-md mx-auto space-y-3">
				{appointments.map((appt, index) => (
					<AppointmentCard key={index} {...appt} />
				))}
			</div>
		</div>
	);
};

export default UpcomingAppointments;

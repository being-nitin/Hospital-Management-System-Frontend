import { ChevronRight } from "lucide-react";
import { CardHeader } from "../ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";

const PatientTableHeader = () => {
	return (
		<TableHeader>
			<TableRow>
				<TableHead className="text-[#1E1E1E] px-0">
					Patient name
				</TableHead>
				<TableHead className="text-[#1E1E1E]">Date In</TableHead>
				<TableHead className="text-[#1E1E1E]">Symptoms</TableHead>
				<TableHead className="text-[#1E1E1E]">Status</TableHead>
				<TableHead className="text-[#1E1E1E]">Action</TableHead>
			</TableRow>
		</TableHeader>
	);
};

const patientsData = [
	{
		name: "Jenny Wilson",
		dateIn: "Dec 18, 2024",
		Symptoms: "Geriatrician",
		status: "Confirmed",
	},
	{
		name: "Jenny Wilson",
		dateIn: "Dec 18, 2024",
		Symptoms: "Geriatrician",
		status: "Confirmed",
	},
];

const PatientTableBody = () => {
	return (
		<TableBody className="w-full">
			<TableRow className="border-b-0">
				<TableCell className="px-0 flex items-center flex-wrap">
					<img className="w-8 h-8 bg-cyan-50 mr-2"></img>
					Jenny Wilson
				</TableCell>
				<TableCell>Dec 18, 2024</TableCell>
				<TableCell>Geriatrician</TableCell>
				<TableCell>Confirmed</TableCell>
				<TableCell>$250.00</TableCell>
			</TableRow>
			<TableRow className="border-b-0">
				<TableCell className="px-0 flex items-center flex-wrap">
					<img className="w-8 h-8 bg-cyan-50 mr-2"></img>
					Jenny Wilson
				</TableCell>
				<TableCell>Dec 18, 2024</TableCell>
				<TableCell>Geriatrician</TableCell>
				<TableCell>Confirmed</TableCell>
				<TableCell>$250.00</TableCell>
			</TableRow>
			<TableRow className="border-b-0">
				<TableCell className="px-0 flex items-center flex-wrap">
					<img className="w-8 h-8 bg-cyan-50 mr-2"></img>
					Jenny Wilson
				</TableCell>
				<TableCell>Dec 18, 2024</TableCell>
				<TableCell>Geriatrician</TableCell>
				<TableCell>Confirmed</TableCell>
				<TableCell>$250.00</TableCell>
			</TableRow>
		</TableBody>
	);
};
const PatientData = () => {
	return (
		<div className="px-3 border rounded-lg shadow-lg bg-white w-full">
			<CardHeader className="flex-row items-center justify-between p-0 px-4 py-3">
				<h2 className="text-lg text-[#484848] font-semibold">
					Patient Data
				</h2>
				<p className="text-primary font-bold text-xs flex items-center">
					View All <ChevronRight size={14} />
				</p>
			</CardHeader>
			<Table className="">
				<PatientTableHeader />
				<PatientTableBody />
			</Table>
		</div>
	);
};

export default PatientData;

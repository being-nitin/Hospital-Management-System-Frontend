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
import { PencilIcon } from "../../assets/icons/PencilIcon";
import { TrashIcon } from "../../assets/icons/TrashIcon";
import { cn } from "../../lib/utils";
import { PatientsDataProps } from "../../types/patientDataInterrface";
import { patientsData } from "../../constants/patientData";

// Header Component
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

// Table Row Component
const PatientDataRow = ({ patient }: { patient: PatientsDataProps }) => {
	return (
		<TableRow className="border-b-0">
			<TableCell className="px-0 flex items-center flex-wrap">
				<img className="w-8 h-8 bg-cyan-50 mr-2" alt="Patient" />
				{patient.name}
			</TableCell>
			<TableCell>{patient.dateIn}</TableCell>
			<TableCell>{patient.symptoms}</TableCell>
			<TableCell
				className={cn(
					patient.status === "Confirmed"
						? "text-[#4CB269]"
						: patient.status === "Incoming"
						? "text-[#FF8E26]"
						: "text-[#F62E2E]"
				)}>
				{patient.status}
			</TableCell>
			<TableCell className="flex gap-4">
				<PencilIcon />
				<TrashIcon />
			</TableCell>
		</TableRow>
	);
};

// Table Body Component
const PatientTableBody = ({ patients }: { patients: PatientsDataProps[] }) => {
	return (
		<TableBody className="w-full h-fit overflow-hidden">
			{patients.map((patient, index) => (
				<PatientDataRow key={index} patient={patient} />
			))}
		</TableBody>
	);
};

// Main Table Component
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
			<Table>
				<PatientTableHeader />
				<PatientTableBody patients={patientsData} />
			</Table>
		</div>
	);
};

export default PatientData;

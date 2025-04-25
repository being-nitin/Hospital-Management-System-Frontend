import React from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { FlexibleButton } from "../components/reusableComponents/Buttons";
import {
	ChevronDown,
	Filter,
	PlusCircleIcon,
	Search,
	Undo2,
} from "lucide-react";
import { MyTable } from "../components/reusableComponents/TableComponent";
import {
	Patient,
	patientDatakeys,
	patientList,
	patientTableColumns,
} from "../constants/patientslist";
import { Input } from "../components/ui/input";
import Pagination from "../components/reusableComponents/Pagination";
import { useNavigate } from "react-router-dom";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "../components/ui/hover-card";

const PatientListPage = () => {
	const navigate = useNavigate();
	const columns: (keyof Patient)[] = patientDatakeys;
	return (
		<React.Fragment>
			<div className="flex w-full justify-between">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink
								href="/patient"
								className="text-2xl text-primary font-medium">
								Patient
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator className="text-primary text-center [&>svg]:w-4 [&>svg]:h-4 " />
						<BreadcrumbItem>
							<BreadcrumbPage className="text-primary text-lg font-medium">
								List of Patients
							</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
				<div className="flex gap-2">
					<FlexibleButton
						text="Print Details"
						variant="primary"
						className="rounded-full"
					/>
					<FlexibleButton
						icon={<PlusCircleIcon />}
						text="Patient"
						variant="primary"
						onClick={() => navigate("/add-patient")}
						className="rounded-full"
					/>
				</div>
			</div>

			{/* Table of List of Patients */}
			<div className="px-6 py-4 rounded-t-2xl bg-[#E7F0FF] border-b-0 border border-[#B6C1CAD1] mt-3 flex justify-between items-center">
				{/* Search Field*/}
				<div className="relative hidden md:block md:w-1/4 bg-white rounded-xl">
					<Search className="absolute left-0 top-0 m-2.5 h-4 w-4 text-primary" />
					<Input
						placeholder="Search Patient..."
						className="px-14 py-2 placeholder:text-primary text-primary rounded-xl"
					/>
				</div>

				{/* Filters */}
				<div className="bg-white px-5 rounded- border [&>span]:border-[#B6C1CAD1] border-[#B6C1CAD1] flex items-center  rounded-full">
					<span className="border-r py-2 pr-5 font-bold">
						<Filter />
					</span>
					<span className="border-r py-2 px-5 font-medium flex items-center justify-between gap-3">
						Filter By
					</span>
					<HoverCard>
						<HoverCardTrigger className="hover:cursor-pointer text-black hover:text-black">
							<span className="border-r py-2 px-5 font-medium flex items-center justify-between gap-3">
								Reg. Date
								<ChevronDown />
							</span>
						</HoverCardTrigger>
						<HoverCardContent align="end">
							<p className="bg-gray-100 p-1 m-1 rounded">
								18 Dec
							</p>
							<p className="bg-gray-100 p-1 m-1 rounded">
								18 Dec
							</p>
							<p className="bg-gray-100 p-1 m-1 rounded">
								18 Dec
							</p>
						</HoverCardContent>
					</HoverCard>
					<HoverCard>
						<HoverCardTrigger className="hover:cursor-pointer text-black hover:text-black">
							<span className="border-r py-2 px-5 font-medium flex items-center justify-between gap-4">
								Status <ChevronDown />
							</span>
						</HoverCardTrigger>
						<HoverCardContent align="end">
							<p className="bg-gray-100 p-1 m-1 rounded">
								Incoming
							</p>
							<p className="bg-gray-100 p-1 m-1 rounded">
								Incoming
							</p>
							<p className="bg-gray-100 p-1 m-1 rounded">
								Incoming
							</p>
						</HoverCardContent>
					</HoverCard>
					<span className="py-2 pl-5 font-medium flex items-center justify-between gap-3 text-[#EA0234]">
						<Undo2 /> Reset Filters
					</span>
				</div>
			</div>
			{/* List of all the Patients */}
			<MyTable
				tableColumns={patientTableColumns}
				rowsData={patientList}
				columns={columns}
			/>
			<div className="bg-white mt-4 px-4 py-1 border rounded-2xl flex justify-end">
				<Pagination
					currentPage={2}
					totalPages={100}
					onPageChange={() => {
						console.log("clicked");
					}}
				/>
			</div>
		</React.Fragment>
	);
};

export default PatientListPage;

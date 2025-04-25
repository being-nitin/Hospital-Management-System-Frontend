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
import { Input } from "../components/ui/input";
import {
	Medicine,
	medicineDatakeys,
	medicinesData,
	medicineTableColumns,
} from "../constants/medicines";
import Pagination from "../components/reusableComponents/Pagination";
import { useNavigate } from "react-router-dom";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "../components/ui/hover-card";

const MedicineList = () => {
	const navigate = useNavigate();
	const columns: (keyof Medicine)[] = medicineDatakeys;
	return (
		<React.Fragment>
			<div className="flex w-full justify-between">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink
								href="/medicines"
								className="text-2xl text-primary font-medium">
								Medicine
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator className="text-primary text-center [&>svg]:w-4 [&>svg]:h-4 " />
						<BreadcrumbItem>
							<BreadcrumbPage className="text-primary text-lg font-medium">
								List of Medicine
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
						text="Medicine"
						variant="primary"
						className="rounded-full"
						onClick={() => navigate("/add-medicine")}
					/>
				</div>
			</div>

			{/* Table of List of Medicines */}
			<div className="px-6 py-4 rounded-t-2xl bg-[#E7F0FF] border-b-0 border border-[#B6C1CAD1] mt-3 flex justify-between items-center">
				{/* Search Field*/}
				<div className="relative hidden md:block md:w-1/4 bg-white rounded-xl ">
					<Search className="absolute left-0 top-0 m-2.5 h-4 w-4 text-primary space" />
					<Input
						placeholder="Search Medicines..."
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
						<HoverCardTrigger className="text-black hover:text-black">
							<span className="border-r py-2 px-5 font-medium flex items-center justify-between gap-3">
								Bar Code
								<ChevronDown />
							</span>
						</HoverCardTrigger>
						<HoverCardContent align="end">
							<p className="bg-gray-100 p-1 m-1 rounded">
								Bar Code
							</p>
							<p className="bg-gray-100 p-1 m-1 rounded">
								Bar Code
							</p>
							<p className="bg-gray-100 p-1 m-1 rounded">
								Bar Code
							</p>
						</HoverCardContent>
					</HoverCard>
					<HoverCard>
						<HoverCardTrigger className="text-black hover:text-black">
							<span className="border-r py-2 px-5 font-medium flex items-center justify-between gap-4">
								Vendor <ChevronDown />
							</span>
						</HoverCardTrigger>
						<HoverCardContent align="end">
							<p className="bg-gray-100 p-1 m-1 rounded">
								Pharma
							</p>
							<p className="bg-gray-100 p-1 m-1 rounded">
								Pharma
							</p>
							<p className="bg-gray-100 p-1 m-1 rounded">
								Pharma
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
				tableColumns={medicineTableColumns}
				rowsData={medicinesData}
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

export default MedicineList;

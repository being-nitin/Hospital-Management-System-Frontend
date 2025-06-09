import React, { useState } from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { FlexibleButton } from "../components/reusableComponents/Buttons";
import { CalendarIcon, PlusCircleIcon } from "lucide-react";
import { Card } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../components/ui/select";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "../components/ui/popover";
import { Button } from "../components/ui/button";
import { Calendar } from "../components/ui/calendar";
import { Textarea } from "../components/ui/textarea";
import Pagination from "../components/reusableComponents/Pagination";

const AddMedicine = () => {
	const [date, setDate] = useState<Date | undefined>(new Date());

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
							<BreadcrumbLink
								href="/medicines"
								className="text-primary text-lg font-medium">
								List of Medicines
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator className="text-primary text-center [&>svg]:w-4 [&>svg]:h-4 " />
						<BreadcrumbItem>
							<BreadcrumbPage className="text-primary font-medium">
								Add Medicine
							</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
				<div className="flex gap-2">
					<FlexibleButton
						icon={<PlusCircleIcon />}
						text="Medicine"
						variant="secondary"
						className="rounded-full"
					/>
				</div>
			</div>
			<Card className="bg-white p-7 mt-3">
				<h2 className="text-lg font-semibold mb-4">
					Add Patient Details
				</h2>

				<div className="grid grid-cols-6 [&>div]:col-span-2 gap-4">
					{/* Name */}
					<div>
						<Label>Name</Label>
						<Input placeholder="Name" />
					</div>
					{/* Generic Name */}
					<div>
						<Label>Generic Name</Label>
						<Input placeholder="Paracetamol" />
					</div>
					{/* Batch code */}
					<div>
						<Label>Batch Code</Label>
						<Input placeholder="Enter" type="" />
					</div>
					{/* Bar code */}
					<div>
						<Label>Bar Code</Label>
						<Input placeholder="Enter" type="" />
					</div>
					{/* Quantity */}
					<div>
						<Label>Quantity</Label>
						<Input placeholder="7" type="number" />
					</div>
					{/* Unit Weight */}
					<div>
						<Label>Unit Weight</Label>
						<Input placeholder="2" type="number" />
					</div>
					{/* Cost */}
					<div>
						<Label>Cost</Label>
						<Input placeholder="₹2000" type="number" />
					</div>
					{/* Type */}
					<div>
						<Label>Type</Label>
						<Select>
							<SelectTrigger>
								<SelectValue placeholder="Select Type" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="Analgesics">
									Analgesics
								</SelectItem>
								<SelectItem value="Opioids">Opioids</SelectItem>
							</SelectContent>
						</Select>
					</div>
					{/* Vendor */}
					<div>
						<Label>Vendor</Label>
						<Select>
							<SelectTrigger>
								<SelectValue placeholder="Select Vendor" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="PCD">PCD Pharma</SelectItem>
								<SelectItem value="pharma">Pharma</SelectItem>
							</SelectContent>
						</Select>
					</div>
					{/* Retail Cost */}
					<div>
						<Label>Retail Cost</Label>
						<Input placeholder="₹1700" />
					</div>
					{/* Manufacture Date */}
					<div>
						<Label>Manufacture</Label>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant="outline"
									className="w-full justify-start">
									{date?.toLocaleDateString() ||
										"Select Date"}
									<CalendarIcon className="ml-auto" />
								</Button>
							</PopoverTrigger>
							<PopoverContent align="start">
								<Calendar
									mode="single"
									selected={date}
									onSelect={setDate}
								/>
							</PopoverContent>
						</Popover>
					</div>
					{/* Date of Expiry */}
					<div>
						<Label>Expiry</Label>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant="outline"
									className="w-full justify-start">
									{date?.toLocaleDateString() ||
										"Select Date"}
									<CalendarIcon className="ml-auto" />
								</Button>
							</PopoverTrigger>
							<PopoverContent align="start">
								<Calendar
									mode="single"
									selected={date}
									onSelect={setDate}
								/>
							</PopoverContent>
						</Popover>
					</div>
					{/* Description */}
					<div className="!col-span-3">
						<Label>Description</Label>
						<Textarea placeholder="Write Description" />
					</div>
					{/* Address */}
					<div className="!col-span-3">
						<Label>Effects</Label>
						<Textarea placeholder="Nausea" />
					</div>
				</div>
			</Card>
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

export default AddMedicine;

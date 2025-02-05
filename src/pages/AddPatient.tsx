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
import { Textarea } from "../components/ui/textarea";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "../components/ui/popover";
import { Button } from "../components/ui/button";
import { Calendar } from "../components/ui/calendar";

const AddPatient = () => {
	const [date, setDate] = useState<Date | undefined>(new Date());
	return (
		<React.Fragment>
			<div className="flex w-full justify-between">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink
								href="/patients"
								className="text-2xl text-primary font-medium">
								Patient
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator className="text-primary text-center [&>svg]:w-4 [&>svg]:h-4 " />
						<BreadcrumbItem>
							<BreadcrumbLink
								href="/patients"
								className="text-primary text-lg font-medium">
								List of Patients
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator className="text-primary text-center [&>svg]:w-4 [&>svg]:h-4 " />
						<BreadcrumbItem>
							<BreadcrumbPage className="text-primary font-medium">
								Add Patient
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
						className="rounded-full"
					/>
				</div>
			</div>

			<Card className="bg-white p-7 mt-3">
				<h2 className="text-lg font-semibold mb-4">
					Add Patient Details
				</h2>
				<div className="grid grid-cols-2 gap-4">
					{/* First Name */}
					<div>
						<Label>First Name</Label>
						<Input placeholder="Name" />
					</div>
					{/* Last Name */}
					<div>
						<Label>Last Name</Label>
						<Input placeholder="Name" />
					</div>
					{/* Doctor */}
					<div>
						<Label>Doctor</Label>
						<Select>
							<SelectTrigger>
								<SelectValue placeholder="Select Doctor" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="dr1">Dr. Smith</SelectItem>
								<SelectItem value="dr2">Dr. Johnson</SelectItem>
							</SelectContent>
						</Select>
					</div>
					{/* Patient Number */}
					<div>
						<Label>Patient Number</Label>
						<Input placeholder="000000" />
					</div>
					{/* Registration Date */}
					<div>
						<Label>Registration Date</Label>
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
					{/* Date of Birth */}
					<div>
						<Label>Date of Birth</Label>
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
					{/* Phone Number */}
					<div>
						<Label>Phone No.</Label>
						<Input placeholder="xxxxxxxxxx" />
					</div>
					{/* Gender */}
					<div>
						<Label>Gender</Label>
						<Select>
							<SelectTrigger>
								<SelectValue placeholder="Regular" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="male">Male</SelectItem>
								<SelectItem value="female">Female</SelectItem>
							</SelectContent>
						</Select>
					</div>
					{/* Symptoms */}
					<div className="col-span-1">
						<Label>Symptoms</Label>
						<Textarea placeholder="Desc" />
					</div>
					{/* Address */}
					<div className="col-span-1">
						<Label>Address</Label>
						<Textarea placeholder="Desc" />
					</div>
				</div>
				<div className="mt-4 flex gap-2">
					<Button className="bg-primary text-white">Save</Button>
					<Button variant="outline">Cancel</Button>
				</div>
			</Card>
		</React.Fragment>
	);
};

export default AddPatient;

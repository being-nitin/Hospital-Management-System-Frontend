export const patientList: Patient[] = [
	{
		id: 1,
		patient: "Aditya",
		phone: "7428695948",
		doctor: "John",
		regDate: "18 Dec, 2024",
		gender: "male",
	},
	{
		id: 1,
		patient: "Aditya",
		phone: "7428695948",
		doctor: "John",
		regDate: "18 Dec, 2024",
		gender: "male",
	},
	{
		id: 1,
		patient: "Aditya",
		phone: "7428695948",
		doctor: "John",
		regDate: "18 Dec, 2024",
		gender: "male",
	},
	{
		id: 1,
		patient: "Aditya",
		phone: "7428695948",
		doctor: "John",
		regDate: "18 Dec, 2024",
		gender: "male",
	},
	{
		id: 1,
		patient: "Aditya",
		phone: "7428695948",
		doctor: "John",
		regDate: "18 Dec, 2024",
		gender: "male",
	},
];

export interface Patient {
	id: number;
	patient: string;
	phone: string;
	doctor: string;
	regDate: string;
	gender: string;
}

export const patientDatakeys: (keyof Patient)[] = [
	"id",
	"patient",
	"phone",
	"doctor",
	"regDate",
	"gender",
];
export const patientTableColumns = [
	"No.",
	"Patient",
	"Phone No.",
	"Doctor",
	"Reg. Date",
	"Gender",
	"Actions",
];

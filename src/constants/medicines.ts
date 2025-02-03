export interface Medicine {
	name: string;
	genericName: string;
	batchNo: string;
	barCode: string;
	quantity: string;
	type: string;
	mfdDate: string;
	expiryDate: string;
	cost: string;
	vendor: string;
	actions: string;
}
export const medicinesData = [
	{
		name: "patient",
		genericName: "patient",
		batchNo: "patient",
		barCode: "patient",
		quantity: "patient",
		type: "patient",
		mfdDate: "patient",
		expiryDate: "patient",
		cost: "patient",
		vendor: "patient",
		actions: "patient",
	},
	{
		name: "patient",
		genericName: "patient",
		batchNo: "patient",
		barCode: "patient",
		quantity: "patient",
		type: "patient",
		mfdDate: "patient",
		expiryDate: "patient",
		cost: "patient",
		vendor: "patient",
		actions: "patient",
	},
	{
		name: "patient",
		genericName: "patient",
		batchNo: "patient",
		barCode: "patient",
		quantity: "patient",
		type: "patient",
		mfdDate: "patient",
		expiryDate: "patient",
		cost: "patient",
		vendor: "patient",
		actions: "patient",
	},
	{
		name: "patient",
		genericName: "patient",
		batchNo: "patient",
		barCode: "patient",
		quantity: "patient",
		type: "patient",
		mfdDate: "patient",
		expiryDate: "patient",
		cost: "patient",
		vendor: "patient",
		actions: "patient",
	},
	{
		name: "patient",
		genericName: "patient",
		batchNo: "patient",
		barCode: "patient",
		quantity: "patient",
		type: "patient",
		mfdDate: "patient",
		expiryDate: "patient",
		cost: "patient",
		vendor: "patient",
		actions: "patient",
	},
	{
		name: "patient",
		genericName: "patient",
		batchNo: "patient",
		barCode: "patient",
		quantity: "patient",
		type: "patient",
		mfdDate: "patient",
		expiryDate: "patient",
		cost: "patient",
		vendor: "patient",
		actions: "patient",
	},
	{
		name: "patient",
		genericName: "patient",
		batchNo: "patient",
		barCode: "patient",
		quantity: "patient",
		type: "patient",
		mfdDate: "patient",
		expiryDate: "patient",
		cost: "patient",
		vendor: "patient",
		actions: "patient",
	},
	{
		name: "patient",
		genericName: "patient",
		batchNo: "patient",
		barCode: "patient",
		quantity: "patient",
		type: "patient",
		mfdDate: "patient",
		expiryDate: "patient",
		cost: "patient",
		vendor: "patient",
		actions: "patient",
	},
];

export const medicineDatakeys: (keyof Medicine)[] = [
	"name",
	"genericName",
	"batchNo",
	"barCode",
	"quantity",
	"type",
	"mfdDate",
	"expiryDate",
	"cost",
	"vendor",
	"actions",
];

export const medicineTableColumns = [
	"Name",
	"Generic Name",
	"Batch No.",
	"Bar Code",
	"Quantity",
	"Type",
	"Mfd Date",
	"Expiry Date",
	"Cost",
	"Vendor",
	"Actions",
];

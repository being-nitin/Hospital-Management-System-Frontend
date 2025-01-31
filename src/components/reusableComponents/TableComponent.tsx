import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";

// Columns of the table
export function MyTableHeader({ columns }: { columns: string[] }) {
	return (
		<TableHeader>
			<TableRow className="border-[#B6C1CAD1]">
				{columns.map((column) => {
					return (
						<TableHead className="text-primary text-sm px-6 py-3">
							{column}
						</TableHead>
					);
				})}
			</TableRow>
		</TableHeader>
	);
}

export function MyTableBody<T>({
	rowsData,
	columns,
}: {
	rowsData: T[];
	columns: (keyof T)[];
}) {
	return (
		<TableBody>
			{rowsData.map((row, index) => (
				<TableRow
					key={index}
					className="[&>td]:px-6 [&>td]:py-3 border-[#B6C1CAD1]">
					{columns.map((colKey) => (
						<TableCell key={String(colKey)}>
							{String(row[colKey])}
						</TableCell>
					))}
				</TableRow>
			))}
		</TableBody>
	);
}

export function MyTable<T>({
	tableColumns,
	rowsData,
	columns,
}: {
	tableColumns: string[];
	rowsData: T[];
	columns: (keyof T)[];
}) {
	return (
		<Table className="border border-[#B6C1CAD1] border-t-0 rounded-b-2xl bg-white shadow-md">
			<MyTableHeader columns={tableColumns} />
			<MyTableBody rowsData={rowsData} columns={columns} />
		</Table>
	);
}

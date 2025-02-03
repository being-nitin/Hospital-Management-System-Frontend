import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
	SelectItem,
	Select,
	SelectValue,
	SelectTrigger,
	SelectContent,
} from "../ui/select";

// Define the props interface for the Pagination component
interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	onPageChange,
}) => {
	return (
		<div className="flex items-center justify-center space-x-4">
			{/* Prev Button */}
			<Button
				variant="outline"
				size="sm"
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className="px-4 py-2 text-[#616161]">
				Prev
			</Button>

			{/* Next Button */}
			<Button
				variant="outline"
				size="sm"
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className="px-4 py-2 text-white bg-primary">
				Next
			</Button>
			{/* Page Indicator */}
			<div className="text-sm text-gray-700 flex items-center gap-2">
				Page: <Input value={currentPage} type="text" />
				of{" "}
				<span className="font-medium text-primary">{totalPages}</span>
			</div>
			<Select>
				<SelectTrigger className="w-[20%]">
					<SelectValue placeholder="10" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="10">10</SelectItem>
					<SelectItem value="20">20</SelectItem>
					<SelectItem value="30">30</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
};

export default Pagination;

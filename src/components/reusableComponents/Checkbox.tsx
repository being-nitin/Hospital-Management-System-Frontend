import { Label } from "../../components/ui/label";
import { cn } from "../../lib/utils";
import { CheckboxProps } from "../../types/checkboxInterface";

export const CheckboxWithLabel = ({
	label,
	id,
	checked,
	handleChange,
}: CheckboxProps) => {
	return (
		<div>
			<div className="flex items-center space-x-2 ">
				<input
					id={id}
					type="checkbox"
					className="!bg-white w-4 h-4"
					checked={checked}
					onChange={handleChange}
				/>
				<Label htmlFor={id} className={cn("opacity-60")}>
					{label}
				</Label>
			</div>
		</div>
	);
};

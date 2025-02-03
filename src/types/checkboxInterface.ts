export interface CheckboxProps {
	label: string;
	id: string;
	checked?: boolean;
	handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

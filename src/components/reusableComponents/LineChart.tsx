import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
	ResponsiveContainer,
} from "recharts";
import { CardHeader } from "../ui/card";

const data = [
	{ name: "JAN", value: 15000 },
	{ name: "FEB", value: 10000 },
	{ name: "MAR", value: 20000 },
	{ name: "APR", value: 25000 },
	{ name: "MAY", value: 25200 },
	{ name: "JUN", value: 30000 },
	{ name: "JUL", value: 20000 },
];

const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
		return (
			<div className="bg-white border border-gray-300 p-2 rounded-md shadow">
				<p className="font-semibold">{`${label}`}</p>
				<p className="text-purple-500 font-bold">{`${payload[0].value}`}</p>
			</div>
		);
	}
	return null;
};

const LineGraph = () => {
	return (
		<div className="px-3 border rounded-lg shadow-lg bg-white w-full">
			<CardHeader className="flex-row items-center justify-between p-0 px-4 py-3">
				<h2 className="text-lg text-[#484848] font-semibold">
					Expense Overview
				</h2>
				<select className="border border-[#878787] p-2 rounded-full bg-white text-[#878787]">
					<option>Month</option>
					<option>Week</option>
					<option>Year</option>
				</select>
			</CardHeader>
			<ResponsiveContainer width="100%" height={200}>
				<LineChart data={data}>
					<CartesianGrid vertical={false} />
					<XAxis
						dataKey="name"
						tick={{ fontSize: 12, fill: "#A2A3A5" }}
						axisLine={false}
						tickLine={false}
					/>
					<YAxis
						tick={{ fontSize: 12, fill: "#A2A3A5" }}
						axisLine={false}
						tickLine={false}
					/>
					<Tooltip content={<CustomTooltip />} />
					<Line
						type="monotone"
						dataKey="value"
						stroke="#8884d8"
						strokeWidth={3}
						dot={{ r: 5 }}
						activeDot={{ r: 8, stroke: "#8884d8", strokeWidth: 2 }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default LineGraph;

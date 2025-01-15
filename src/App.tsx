import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";
import { StatusBadge } from "./components/reusableComponents/StatusBadge";
import {
	FlexibleButton,
	CircularIconButton,
} from "./components/reusableComponents/Buttons";
import { CirclePlus } from "lucide-react";
import { Ellipsis } from "lucide-react";
import { Login } from "./pages/Login";
import Layout from "./pages/AppLayout";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			{/* <Login /> */}
			<Layout>
				<p>Hello EveryOne</p>

				<div>
					<a href="https://vite.dev" target="_blank">
						<img src={viteLogo} className="logo" alt="Vite logo" />
					</a>
					<a href="https://react.dev" target="_blank">
						<img
							src={reactLogo}
							className="logo react"
							alt="React logo"
						/>
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className="card">
					<button
						className="bg-primary  text-tint-300 font-primary"
						onClick={() => setCount((count) => count + 1)}>
						count is {count}
					</button>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<div>
					<Button variant={"destructive"}>Click me</Button>
					<br />
					{/* Status cards */}
					<div>
						<StatusBadge status="closed" />

						<StatusBadge status="pending" />

						<StatusBadge status="scheduled" />
					</div>
					<br />
					<div className="gap-5 w-32">
						{/* Appointment Buttons  */}
						<FlexibleButton
							text="Appointment"
							variant="primary"
							icon={<CirclePlus strokeWidth={1.5} />}
						/>
						<br />
						<br />
						<FlexibleButton
							text="Appointment"
							variant="secondary"
							icon={<CirclePlus strokeWidth={1.5} />}
						/>
					</div>
					<br />
					<div className="gap-5 w-32">
						{/* button example */}
						<FlexibleButton
							text="Medicine"
							variant="secondary"
							icon={<CirclePlus strokeWidth={1.5} />}
						/>
						<br />
						<br />

						<FlexibleButton
							text="Medicine"
							variant="primary"
							icon={<CirclePlus strokeWidth={1.5} />}
						/>
					</div>
					<br />
					<div className="gap-5 w-32">
						{/* button example */}
						<FlexibleButton
							text="Print Details"
							variant="primary"
						/>
						<br />
						<br />
						<FlexibleButton
							text="Patient"
							variant="secondary"
							icon={<CirclePlus strokeWidth={1.5} />}
						/>
					</div>
					<br />
					<br />
					<div>
						<CircularIconButton icon={<Ellipsis />} />
					</div>
				</div>
			</Layout>
		</>
	);
}

export default App;

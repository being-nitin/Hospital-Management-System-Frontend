import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";
import { StatusBadge } from "./components/pages/StatusBadge";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
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
				<br />
				<StatusBadge status="closed" />
				<br />
				<br />
				<StatusBadge status="pending" />
				<br />
				<br />
				<StatusBadge status="scheduled" />
			</div>
		</>
	);
}

export default App;

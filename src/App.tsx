import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";

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
				<Button>Click me</Button>
				<p className="text-secondary text-20 font-regular bg-primary font-display font-primary">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Cupiditate voluptates exercitationem quam veniam! Eligendi
					consequuntur velit aperiam natus nam, eaque, officiis, omnis
					maiores magni excepturi sint voluptates? Consequatur, eum
					rem.
				</p>
			</div>
		</>
	);
}

export default App;

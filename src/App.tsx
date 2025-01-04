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
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./components/ui/card";
import { InputComponent } from "./components/reusableComponents/InputComponent";
import { MyCardHeader } from "./components/reusableComponents/CardComponent";
import { cn } from "./lib/utils";

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
					<FlexibleButton text="Print Details" variant="primary" />
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
				<br />
				<br />
				{/* Login Card */}
				<Card>
					<MyCardHeader
						cardTitle="Login to Account"
						cardDescription="Please enter your email and password to continue"
					/>
					<CardContent>
						<InputComponent
							inputTitleLeft="Email address:"
							placeholder="Email"
							type="email"
						/>
						<InputComponent
							inputTitleLeft="Password:"
							inputTitleRight="Forget Pasword?"
							placeholder="Password"
							type="password"
						/>
					</CardContent>
					<CardFooter>
						<FlexibleButton variant="primary" text="Sign In" />
						<p className="my-4">
							Don’t have an account?{" "}
							<a href="#" className="underline">
								Create Account
							</a>
						</p>
					</CardFooter>
				</Card>
				<br />
				<br />
				<br />
				{/* Logout Card */}
				<Card>
					<MyCardHeader
						cardTitle="Create an Account"
						cardDescription="create a account to continue"
					/>
					<CardContent>
						<InputComponent
							placeholder="Email"
							type="email"
							inputTitleLeft="Email address"
						/>
						<InputComponent
							placeholder="username"
							type="text"
							inputTitleLeft="Username"
						/>
						<InputComponent
							placeholder="password"
							type="password"
							inputTitleLeft="Password"
							inputTitleRight="Forget Password?"
						/>
					</CardContent>
					<CardFooter>
						<FlexibleButton text="Sign Up" variant="primary" />
						<p className="my-4">
							Already have an account?{" "}
							<a href="#" className="underline">
								Login
							</a>
						</p>
					</CardFooter>
				</Card>
			</div>
		</>
	);
}

export default App;

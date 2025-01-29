import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App";
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

import { Login } from "./pages/Login";

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route
						index
						element={
							<Suspense fallback="...loading">
								<Dashboard />
							</Suspense>
						}
					/>
				</Route>

				{/* Auth Routes */}
				<Route path="/login" element={<Login />} />

				{/* render component when the router is not found */}
				<Route path="*" element={<p>Page Not Found</p>} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;

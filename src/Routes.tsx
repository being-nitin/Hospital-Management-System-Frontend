import { BrowserRouter, Routes, Route } from "react-router";
import { Login } from "./pages/Login";
import App from "./App";
import Dashboard from "./pages/Dashboard";

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Dashboard />} />
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

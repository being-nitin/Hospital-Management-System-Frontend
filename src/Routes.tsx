import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App";
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const PatientListPage = React.lazy(() => import("./pages/Patients"));
const AddPatient = React.lazy(() => import("./pages/AddPatient"));

import { Login } from "./pages/Login";
import MedicineList from "./pages/Medicines";
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
					<Route
						path="/patients"
						element={
							<Suspense fallback="...loading">
								<PatientListPage />
							</Suspense>
						}
					/>
					<Route
						path="/add-patient"
						element={
							<Suspense fallback={"Loading..."}>
								<AddPatient />
							</Suspense>
						}
					/>
					<Route
						path="/medicines"
						element={
							<Suspense fallback="...loading">
								<MedicineList />
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

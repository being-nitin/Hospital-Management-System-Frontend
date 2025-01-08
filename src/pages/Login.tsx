import { FlexibleButton } from "../components/reusableComponents/Buttons";
import { MyCardHeader } from "../components/reusableComponents/CardComponent";
import { InputComponent } from "../components/reusableComponents/InputComponent";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { CheckboxWithLabel } from "../components/reusableComponents/Checkbox";
import { cn } from "../lib/utils";
import { VectorBackground } from "../assets/icons/vectorBg";

export const Login = () => {
	return (
		<div className="w-screen h-screen flex items-center justify-center bg-primary">
			<VectorBackground />
			<Card
				className={cn(
					"w-10/12 text-sm sm:w-96 md:w-[35rem] sm:text-lg py-10 md:px-14 m-4 text-[#202224] z-50"
				)}>
				<MyCardHeader
					cardTitle="Login to Account"
					cardDescription="Please enter your email and password to continue"
				/>
				<CardContent>
					<InputComponent
						inputTitleLeft="Email address:"
						placeholder="esteban_schiller@gmail.com"
						type="email"
					/>
					<InputComponent
						inputTitleLeft="Password:"
						inputTitleRight="Forget Pasword?"
						placeholder="Password"
						type="password"
					/>
					<CheckboxWithLabel
						label="Remember Password"
						id="loginTerms"
					/>
				</CardContent>
				<CardFooter className={cn("mt-8")}>
					<FlexibleButton
						variant="primary"
						text="Sign In"
						className="opacity-90 w-10/12"
					/>
					<p className="my-4 text-sm  font-medium flex flex-col gap-1 sm:flex-row">
						<span className="opacity-65">
							Don’t have an account?
						</span>

						<a href="#" className="underline opacity-100">
							Create Account
						</a>
					</p>
				</CardFooter>
			</Card>
		</div>
	);
};

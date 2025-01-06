import { FlexibleButton } from "../components/reusableComponents/Buttons";
import { MyCardHeader } from "../components/reusableComponents/CardComponent";
import { InputComponent } from "../components/reusableComponents/InputComponent";
import { Card, CardContent, CardFooter } from "../components/ui/card";

export const Login = () => {
	return (
		<div className="w-screen h-screen flex items-center justify-center bg-primary">
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
		</div>
	);
};

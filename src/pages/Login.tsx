import { useState } from "react";
import { LOGIN_BACKGROUND } from "../utils/constants";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

const Login: React.FunctionComponent = (): JSX.Element => {
  const [isSignInForm, setIsSignInForm] = useState<boolean>(true);

  const toggleSignIn = (): void => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url(${LOGIN_BACKGROUND})`,
          filter: "brightness(0.5)",
        }}
        className="h-screen"
      ></div>
      <div className="h-screen w-full bg-gradient-to-b from-black to-transparent absolute top-0 left-0 opacity-50"></div>
      <div className="h-screen w-full absolute top-0 left-0">
        <div className="container mx-auto py-4">
          <p className="font-bold text-4xl text-red-600 tracking-tighter">
            MoviesGPT
          </p>
          <div className="flex justify-around items-center mt-12 rounded-md">
            <div className="flex flex-col bg-black px-16 py-16 bg-opacity-65">
              <p className="text-3xl font-semibold text-white tracking-tight mb-8">
                {isSignInForm ? "Sign In" : "Sign Up"}
              </p>
              {isSignInForm ? <SignInForm /> : <SignUpForm />}
              <p className="text-gray-400 mt-20 text-md">
                {isSignInForm ? "New to MoviesGPT?" : "Already a user?"}
                <button
                  className="text-white font-medium pl-1"
                  onClick={toggleSignIn}
                >
                  {isSignInForm ? "Sign up now" : "Sign In to your account"}
                </button>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

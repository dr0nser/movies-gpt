import { LOGIN_BACKGROUND } from "../utils/constants"

const Login: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative">
      <div style={{ backgroundImage: `url(${LOGIN_BACKGROUND})`, filter: "brightness(0.5)" }} className="h-screen"></div>
      <div className="h-screen w-full bg-gradient-to-b from-black to-transparent absolute top-0 left-0 opacity-50"></div>
      <div className="h-screen w-full absolute top-0 left-0">
        <div className="container mx-auto py-4">
          <p className="font-bold text-4xl text-red-600 tracking-tighter">MoviesGPT</p>
          <div className="flex justify-around items-center mt-28 rounded-md">
            <div className="flex flex-col bg-black px-16 py-24">
              <p className="text-3xl font-semibold text-white tracking-tight mb-8">Sign In</p>
              <input className="w-[330px] my-2 p-3 text-lg bg-stone-800 text-gray-400 focus:outline-none rounded-md" type="text" placeholder="Email" />
              <input className="w-[330px] my-2 p-3 text-lg bg-stone-800 text-gray-400 focus:outline-none rounded-md" type="password" placeholder="Password" />
              <button className="w-[330px] mt-10 bg-red-700 hover:bg-red-800 text-gray-100 font-semibold text-lg py-3 rounded-md">Sign In</button>
              <p className="text-gray-400 mt-20">New to MoviesGPT? <button className="text-white font-medium">Sign up now</button>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
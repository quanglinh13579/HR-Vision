import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../core/data/redux/hooks";
import { loginFailure, loginStart, loginSuccess } from "../auth/authSlice";
import { loginApi } from "../../core/api/authApi";
import logo from "./image/logo.png";
import logo2 from "./image/hr-logo.png";

export default function Login() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { loading, error } = useAppSelector((state) => state.auth);
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!email || !password) {
			dispatch(loginFailure("Please fill in all fields"));
			return;
		}
		dispatch(loginStart());

		try {
			const user = await loginApi(email, password);
			dispatch(loginSuccess(user));
			setTimeout(() => {
				navigate("/dashboard");
			}, 500);
		} catch (err) {
			dispatch(loginFailure(String(err)));
		}
	};

	return (
		<div className="min-h-screen flex">
			<div
				className="hidden lg:flex lg:w-1/2 relative bg-cover bg-center flex-col justify-between pt-[80px] pl-[75px] pb-12 pr-12 text-white"
				style={{
					backgroundImage: `url(${logo})`,
				}}
			>
				<div className="absolute inset-0 bg-black/30"></div>
				<div className="relative z-10 flex items-center gap-2">
					<div className="flex items-center justify-center w-12 h-8 rounded-full border-2 border-white">
						<img
							src={logo2}
							alt="HR Vision"
							className="w-6 h-6 object-contain"
						/>
					</div>
					<span className="text-[28px] font-bold text-white">
						HR Vision
					</span>
				</div>
				<div className="relative z-10 text-center">
					<h2 className="text-[32px] font-bold text-center">
						<span className="block">Manage your people efficiently</span>
						<span className="block">All-in-one HR Dashboard</span>
					</h2>
				</div>
			</div>
			<div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 bg-white">
				<div className="w-full max-w-md space-y-8">
					<div className="lg:hidden flex items-center gap-2 mb-8">
						<div className="w-8 h-8 rounded-full border-2 border-gray-800 flex items-center justify-center">
							<div className="w-4 h-4 rounded-full border border-gray-800"></div>
						</div>
						<span className="text-2xl font-bold text-gray-800">HR Vision</span>
					</div>
					<div className="space-y-2">
						<h1 className="text-[40px] font-bold text-gray-900 w-[490px] h-[60px]">
							Welcome Back!
						</h1>
						<p className="font-inter text-[18px] font-normal leading-[140%] tracking-[0px] text-gray-600 w-[490px] h-[25px] opacity-100 ">
							Sign in to continue to your HR Dashboard.
						</p>
					</div>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="space-y-2">
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700">
								Email Address
							</label>
							<input
								id="email"
								type="email"
								placeholder="you@company.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
								required
							/>
						</div>
						<div className="space-y-2">
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700">
								Password
							</label>
							<div className="relative">
								<input
									id="password"
									type={showPassword ? "text" : "password"}
									placeholder="Enter your password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
									required
								/>
								<button
									type="button"
									onClick={() => setShowPassword(!showPassword)}
									className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
									{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
								</button>
							</div>
							<div className="flex justify-end pt-1">
								<a
									href="#"
									className="text-blue-600 hover:text-blue-700 text-sm font-medium">
									Forgot Password?
								</a>
							</div>
						</div>
						{error && (
							<div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
								{error}
							</div>
						)}
						<button
							type="submit"
							disabled={loading}
							className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white font-semibold py-2.5 px-4 rounded-lg transition duration-200">
							{loading ? "Logging in..." : "Log In"}
						</button>
					</form>
					<div className="pt-4 text-center">
						<div className="text-gray-600 text-sm">
							Don't have an account?{" "}
							<a
								href="#"
								className="text-blue-600 hover:text-blue-700 font-medium">
								Sign Up
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

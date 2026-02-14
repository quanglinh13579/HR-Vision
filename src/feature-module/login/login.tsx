import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../core/data/redux/hooks";
import { loginFailure, loginStart, loginSuccess } from "../auth/authSlice";
import { loginApi } from "../../core/api/authApi";
import logo from "./image/logo.png";
import logo2 from "./image/hr-logo.png";
import "./login.css";

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
		<div className="login-container">
			<div
				className="login-left"
				style={{
					backgroundImage: `url(${logo})`,
				}}
			>
				<div className="login-brand">
					<div className="brand-icon-wrapper">
						<img
							src={logo2}
							alt="HR Vision"
							className="brand-logo"
						/>
					</div>
					<span className="brand-text">
						HR Vision
					</span>
				</div>
				<div className="login-hero-text">
					<h2 className="hero-title">
						<span>Manage your people efficiently <br/> All-in-one HR Dashboard</span>
					</h2>
				</div>
			</div>
			<div className="login-right">
				<div className="login-form-wrapper">
					<div className="login-header-text">
						<h1 className="login-title">
							Welcome Back!
						</h1>
						<p className="login-subtitle">
							Sign in to continue to your HR Dashboard.
						</p>
					</div>
					<form onSubmit={handleSubmit} className="login-form">
						<div className="form-group">
							<label
								htmlFor="email"
								className="form-label">
								Email Address
							</label>
							<input
								id="email"
								type="email"
								placeholder="you@company.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="form-input"
								required
							/>
						</div>
						<div className="form-group">
							<label
								htmlFor="password"
								className="form-label">
								Password
							</label>
							<div className="password-wrapper">
								<input
									id="password"
									type={showPassword ? "text" : "password"}
									placeholder="Enter your password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className="form-input"
									required
								/>
								<button
									type="button"
									onClick={() => setShowPassword(!showPassword)}
									className="password-toggle">
									{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
								</button>
							</div>
						</div>
						<div className="forgot-password-wrapper">
								<a
									href="#"
									className="forgot-password-link">
									Forgot Password?
								</a>
							</div>
						{error && (
							<div className="error-message">
								{error}
							</div>
						)}
						<button
							type="submit"
							disabled={loading}
							className="btn-submit">
							{loading ? "Logging in..." : "Log In"}
						</button>
					</form>
					<div className="login-footer">
						<div className="footer-text">
							Don't have an account?{" "}
							<a
								href="#"
								className="footer-link">
								Sign Up
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

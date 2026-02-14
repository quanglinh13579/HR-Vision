import Layout from "../../components/layout";
import { useAppSelector } from "../../core/data/redux/hooks";

import {
	ChevronDown,
	Building,
	Calendar,
	MapPin,
	Users,
	LogOut,
	Filter,
	Smile,
	GraduationCap
} from "lucide-react";

export default function Dashboard() {
	const { user } = useAppSelector((state) => state.auth);

	return (
		<Layout>
			<div className="p-8 space-y-8 bg-gray-50 min-h-full font-sans">
				<div>
					<div className="flex justify-between items-start mb-6">
						<div>
							<h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
								Welcome, {user?.name || "Rami"}! <span className="text-3xl">👋</span>
							</h1>
							<p className="text-gray-500 mt-1">
								Here's what's happening with your team today
							</p>
						</div>
					</div>
					<div className="flex items-center gap-8 border-b border-gray-200">
						<button className="pb-3 border-b-2 border-blue-600 text-blue-600 font-semibold text-sm">
							HR Dashboard
						</button>
						<button className="pb-3 border-b-2 border-transparent text-gray-500 font-medium text-sm hover:text-gray-700">
							Recruitment Dashboard
						</button>
					</div>
				</div>
				<div className="bg-blue-600 rounded-xl p-6 text-white flex items-center justify-between shadow-lg relative overflow-hidden">
					<div className="flex items-center gap-6 relative z-10">
						<div>
							<h3 className="text-lg font-bold mb-1">AI Smart Suggestion</h3>
							<p className="text-blue-100 text-sm">
								Best time to hire Senior Developer: Start interviews this week (42% faster success rate)
							</p>
						</div>
					</div>
					<button className="bg-white text-blue-600 px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-50 transition relative z-10">
						Schedule Now
					</button>
					<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
					<div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3"></div>
				</div>
				<div className="flex items-center gap-4">
					<span className="text-blue-500 font-medium flex items-center gap-2">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
						Filters:
					</span>
					{["All Departments", "Last 6 Months", "Location"].map((filter) => (
						<button key={filter} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-600 font-medium flex items-center gap-2 hover:border-gray-300 transition">
							{filter === "All Departments" && <Building size={16} className="text-gray-400" />}
							{filter === "Last 6 Months" && <Calendar size={16} className="text-gray-400" />}
							{filter === "Location" && <MapPin size={16} className="text-gray-400" />}
							{filter}
							<ChevronDown size={14} className="text-gray-400" />
						</button>
					))}
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
					<div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
						<div className="flex items-start justify-between mb-4">
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
									<Users size={20} />
								</div>
								<span className="text-gray-600 font-medium text-sm">Total Employees</span>
							</div>
						</div>
						<div className="flex items-end justify-between">
							<div>
								<h4 className="text-3xl font-bold text-gray-900">134</h4>
								<p className="text-gray-400 text-xs mt-1 font-medium">- 0% from last month</p>
							</div>
							<div className="h-8 w-16">
								<svg viewBox="0 0 100 40" className="w-full h-full stroke-orange-400 fill-none stroke-2">
									<path d="M0 35 Q 25 35 50 20 T 100 15" />
								</svg>
							</div>
						</div>
					</div>
					<div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
						<div className="flex items-start justify-between mb-4">
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-600">
									<LogOut size={20} />
								</div>
								<span className="text-gray-600 font-medium text-sm">Turnover Rate</span>
							</div>
						</div>
						<div className="flex items-end justify-between">
							<div>
								<h4 className="text-3xl font-bold text-gray-900">3.2%</h4>
								<p className="text-red-500 text-xs mt-1 font-medium">↓ -0.2% from last month</p>
							</div>
							<div className="h-8 w-16">
								<svg viewBox="0 0 100 40" className="w-full h-full stroke-orange-400 fill-none stroke-2">
									<path d="M0 30 Q 20 35 40 20 T 80 30 T 100 25" />
								</svg>
							</div>
						</div>
					</div>
					<div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
						<div className="flex items-start justify-between mb-4">
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-600">
									<Filter size={20} />
								</div>
								<span className="text-gray-600 font-medium text-sm">Recruitment Pipeline</span>
							</div>
						</div>
						<div className="flex items-end justify-between">
							<div>
								<h4 className="text-3xl font-bold text-gray-900">47</h4>
								<p className="text-red-500 text-xs mt-1 font-medium">↓ -0.8% from last month</p>
							</div>
							<div className="h-8 w-16">
								<svg viewBox="0 0 100 40" className="w-full h-full stroke-red-400 fill-none stroke-2">
									<path d="M0 10 Q 25 40 50 25 T 100 30" />
								</svg>
							</div>
						</div>
					</div>
					<div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
						<div className="flex items-start justify-between mb-4">
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
									<Smile size={20} />
								</div>
								<span className="text-gray-600 font-medium text-sm">Employee Satisfaction</span>
							</div>
						</div>
						<div className="flex items-end justify-between">
							<div>
								<h4 className="text-3xl font-bold text-gray-900">4.6/5</h4>
								<p className="text-green-500 text-xs mt-1 font-medium">↑ +3.2% from last month</p>
							</div>
							<div className="h-8 w-16">
								<svg viewBox="0 0 100 40" className="w-full h-full stroke-blue-500 fill-none stroke-2">
									<path d="M0 35 Q 50 35 100 10" />
								</svg>
							</div>
						</div>
					</div>
					<div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
						<div className="flex items-start justify-between mb-4">
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
									<GraduationCap size={20} />
								</div>
								<span className="text-gray-600 font-medium text-sm">Training Completion</span>
							</div>
						</div>
						<div className="flex items-end justify-between">
							<div>
								<h4 className="text-3xl font-bold text-gray-900">87%</h4>
								<p className="text-green-500 text-xs mt-1 font-medium">↑ +3.2% from last month</p>
							</div>
							<div className="h-8 w-16">
								<svg viewBox="0 0 100 40" className="w-full h-full stroke-orange-400 fill-none stroke-2">
									<path d="M0 35 Q 30 30 50 20 T 100 10" />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

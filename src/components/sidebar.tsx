import { useState } from "react";
import { ChevronDown, LayoutDashboard, Users, CalendarDays, UserPlus, FileText, BarChart2, FileBarChart, Settings, HelpCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { logout } from "../feature-module/auth/authSlice";
import { useAppDispatch } from "../core/data/redux/hooks";
import { sidebarData, otherMenuData } from "../common/sidebarData";
import logo2 from "../feature-module/login/image/hr-logo.png";

const iconMap: { [key: string]: React.ReactNode } = {
  dashboard: <LayoutDashboard size={14} />,
  users: <Users size={14} />,
  calendar: <CalendarDays size={14} />,
  recruitment: <UserPlus size={14} />,
  payroll: <FileText size={14} />,
  performance: <BarChart2 size={14} />,
  reports: <FileBarChart size={14} />,
  settings: <Settings size={14} />,
  "help-circle": <HelpCircle size={14} />,
};

interface MenuItem {
  title: string;
  icon: string;
  link: string;
}

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [companyMenuOpen, setCompanyMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const isActive = (link: string) => location.pathname === link;

  const renderMenuItem = (item: MenuItem, index: number) => (
    <button
      key={index}
      onClick={() => navigate(item.link)}
      className={`w-[216px] h-[54px] flex items-center gap-[12px] px-[14px] py-[12px] rounded-[10px] text-sm transition my-[6px] ${isActive(item.link) ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
    >
      <span className={`w-5 h-5 flex items-center justify-center ${isActive(item.link) ? "text-blue-600" : "text-gray-400"}`}>
        {iconMap[item.icon]}
      </span>
      <span className="whitespace-nowrap">{item.title}</span>
    </button>
  );

  return (
    <aside className="w-[264px] h-[965.9951782226562px] bg-white flex flex-col gap-[16px] pb-[24px] border-r border-r-[1.03px] border-gray-200 opacity-100 font-sans">
      <div className="px-[24px] pt-[24px] pb-[14px]">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-12 h-8 flex items-center justify-center rounded-full border border-blue-600">
            <img src={logo2} alt="HR Vision" className="w-6 h-6 object-contain" />
          </div>
          <span className="text-lg font-bold text-gray-900">HR Vision</span>
        </div>
        <button onClick={() => setCompanyMenuOpen(!companyMenuOpen)} className="w-[216px] h-[56px] flex items-center justify-between px-[14px] py-[12px] mx-[24px] my-[14px]
  rounded-[10px]
  bg-gray-50
  text-gray-900
  transition
">
          <span className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-900 rounded-md flex items-center justify-center text-white text-sm font-medium">L</div>
            <span className="text-sm font-medium text-gray-700">Lead Inc.</span>
          </span>
          <ChevronDown size={16} className={`transition ${companyMenuOpen ? "rotate-180" : ""}`} />
        </button>
        {companyMenuOpen && (
          <div className="mt-2 w-[216px] bg-white border border-gray-200 rounded-lg shadow">
            <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition">
              Logout
            </button>
          </div>
        )}
      </div>
      <nav className="flex-1 overflow-y-auto px-[24px] py-[14px] space-y-[14px]">
        <div>
          <h3 className="w-[216px] px-[12px] py-[6px] flex items-center text-[11px] font-bold uppercase tracking-wider text-gray-400 my-[14px]">
            MAIN MENU
          </h3>
          <div>{sidebarData.map(renderMenuItem)}</div>
        </div>
        <div>
          <h3 className="w-[216px] px-[12px] py-[6px] flex items-center text-[11px] font-bold uppercase tracking-wider text-gray-400 my-[14px]">
            OTHER
          </h3>
          <div>{otherMenuData.map(renderMenuItem)}</div>
        </div>
      </nav>
    </aside>
  );
}

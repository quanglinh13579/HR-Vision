import { useState } from "react";
import { ChevronDown, Home, Users, CalendarDays, FileText, BarChart3, FileBarChart, Settings, HelpCircle, Crown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { logout } from "../feature-module/auth/authSlice";
import { useAppDispatch } from "../core/data/redux/hooks";
import { sidebarData, otherMenuData } from "../common/sidebarData";
import logo2 from "../feature-module/login/image/hr-logo2.png";
import "./sidebar.css";

const iconMap: { [key: string]: React.ReactNode } = {
  dashboard: <Home size={14} className="sidebar-icon" />,
  users: <Users size={14} className="sidebar-icon" />,
  calendar: <CalendarDays size={14} className="sidebar-icon" />,
  recruitment: <Users size={14} className="sidebar-icon" />,
  payroll: <FileText size={14} className="sidebar-icon" />,
  performance: <BarChart3 size={14} className="sidebar-icon" />,
  reports: <FileBarChart size={14} className="sidebar-icon" />,
  settings: <Settings size={14} className="sidebar-icon" />,
  "help-circle": <HelpCircle size={14} className="sidebar-icon" />,
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
      className={`menu-item ${isActive(item.link) ? "active" : ""}`}
    >
      <span className="menu-item-icon">
        {iconMap[item.icon]}
      </span>
      <span className="menu-item-text">{item.title}</span>
    </button>
  );

  return (
    <aside className="sidebar-container">
      <div className="sidebar-header">
        <div className="logo-wrapper">
          <div className="logo-icon-container">
            <img src={logo2} alt="HR Vision" className="logo-image" />
          </div>
          <span className="brand-name">HR Vision</span>
        </div>
        <div className="company-toggle-container">
          <button onClick={() => setCompanyMenuOpen(!companyMenuOpen)} className="company-toggle">
            <span className="company-info">
              <div className="company-avatar">L</div>
              <span className="company-name">Lead Inc.</span>
            </span>
            <ChevronDown size={16} style={{ transition: 'transform 0.2s', transform: companyMenuOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
          </button>
        </div>
        {companyMenuOpen && (
          <div className="dropdown-menu">
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        )}
      </div>
      <nav className="sidebar-nav">
        <div className="menu-group main-menu">
          <h3 className="menu-section-title">
            MAIN MENU
          </h3>
          <div>{sidebarData.map(renderMenuItem)}</div>
        </div>
        <div className="menu-group other-menu">
          <h3 className="menu-section-title">
            OTHER
          </h3>
          <div>{otherMenuData.map(renderMenuItem)}</div>
        </div>
      </nav>

      <div className="premium-card">
        <div className="premium-card-icon">
          <Crown size={30} color="#3B82F6" fill="#3B82F6" />
        </div>
        <h4 className="premium-card-title">Upgrade to Premium Plan</h4>
        <p className="premium-card-desc">
          Unlock advanced AI analytics, priority support, and exclusive HR tools.
        </p>
        <button className="premium-btn">
          <Crown size={12} fill="white" className="mr-2" />
          Upgrade to Premium
        </button>
      </div>
    </aside>
  );
}


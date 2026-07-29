import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router';
import {
  LayoutDashboard,
  Package,
  Shield,
  MessageSquare,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { getAdminSession, clearAdminSession } from './adminAuth';

const navLinks = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/admin/products', label: 'Products', icon: Package },
  { to: '/admin/warranties', label: 'Warranties', icon: Shield },
  { to: '/admin/messages', label: 'Messages', icon: MessageSquare },
];

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = getAdminSession();
    if (!session) {
      navigate('/admin/login', { replace: true });
      return;
    }
    setAuthenticated(true);
    setLoading(false);
  }, [navigate]);

  useEffect(() => {
    setSidebarOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleLogout = () => {
    clearAdminSession();
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
      </div>
    );
  }

  if (!authenticated) {
    return null;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-gray-900 text-white transition-transform duration-200 lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between px-6">
          <span className="text-xl font-bold tracking-tight">P2G Admin</span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-md p-1 text-gray-400 hover:text-white lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4">
          {navLinks.map(({ to, label, icon: Icon }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Icon className="h-5 w-5" />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-gray-800 p-3">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </aside>

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center gap-4 border-b bg-white px-6 shadow-sm lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100"
          >
            <Menu className="h-5 w-5" />
          </button>
          <span className="text-lg font-bold text-gray-900">P2G Admin</span>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
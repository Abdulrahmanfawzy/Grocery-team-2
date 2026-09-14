import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  User, 
  Wallet, 
  ShoppingBag, 
  ListOrdered, 
  MapPin, 
  ShieldCheck, 
  Award, 
  HelpCircle, 
  Settings 
} from 'lucide-react';

export function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { label: 'Dashboard', path: '/profile/dashboard', icon: LayoutDashboard },
    { label: 'Personal Info', path: '/profile', icon: User },
    { label: 'Payment & Wallet', path: '/profile/payment', icon: Wallet },
    { label: 'Order History', path: '/profile/orders', icon: ShoppingBag },
    { label: 'Smart Lists', path: '/profile/smart-lists', icon: ListOrdered },
    { label: 'Addresses', path: '/profile/addresses', icon: MapPin },
    { label: 'Security & Login', path: '/profile/security', icon: ShieldCheck },
    { label: 'Loyalty & Rewards', path: '/profile/loyalty', icon: Award },
    { label: 'Help & Support', path: '/profile/help', icon: HelpCircle },
    { label: 'Settings', path: '/profile/settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-sm h-fit">
      {/* User Header Section matching Figma */}
      <div className="flex items-center gap-3 pb-5 border-b border-gray-100 mb-4">
       
        <div className="relative w-14 h-14 shrink-0">
          <img
            src="/Picture.svg"
            alt="Sarah Avatar"
            className="w-full h-full rounded-full object-cover"
          />

          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full shadow-sm flex items-center justify-center">
            <img
              src=""
              alt="Gold Member"
              className="w-3 h-3 object-contain"
            />
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 text-base leading-tight">Sarah</h3>
          <p className="text-sm font-medium text-[#014162] pt-2">Gold Member</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            location.pathname === item.path ||
            (item.path === '/profile' && location.pathname === '/profile/personal-info');

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center bg-[#F7FCFF] gap-3  px-3.5 py-2.5 rounded-sm  text-sm font-medium transition-all ${
                isActive
                  ? 'bg-gradient-to-b from-[#014162]/50 via-[#014162]/80 to-[#014162] text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-gray-500'}`} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
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
import { useState } from 'react';

export function SidebarProfile() {
  const location = useLocation();
   const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Dashboard', path: '/profile/dashboard', icon: LayoutDashboard },
    { label: 'Personal Info', path: '/profile', icon: User },
    { label: 'Payment & Wallet', path: '/profile/payment', icon: Wallet },
    { label: 'Order History', path: '/profile/order-history', icon: ShoppingBag },
    { label: 'Smart Lists', path: '/profile/smart-lists', icon: ListOrdered },
    { label: 'Addresses', path: '/profile/addresses', icon: MapPin },
    { label: 'Security & Login', path: '/profile/security-login', icon: ShieldCheck },
    { label: 'Loyalty & Rewards', path: '/profile/loyalty-rewards', icon: Award },
    { label: 'Help & Support', path: '/profile/help-support', icon: HelpCircle },
    { label: 'Settings', path: '/profile/settings', icon: Settings },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-[10%] top-[25%] z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.18)] sm:hidden"
      >
        <span className="flex flex-col items-end gap-1">
          <span className="h-0.5 w-4.5 rounded-full bg-[#014162]" />
          <span className="h-0.5 w-4.5 rounded-full bg-[#014162]" />
          <span className="h-0.5 w-3 rounded-full bg-[#014162]" />
        </span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 sm:hidden"
        />
      )}

    
   
      <aside
  className={`fixed left-0 top-0 z-50 h-full w-72.5 bg-white p-5 shadow-lg transition-transform sm:static sm:block sm:h-fit sm:w-64 sm:rounded-xl sm:border sm:border-[#E5E7EB] sm:p-5 sm:shadow-sm ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  } sm:translate-x-0`}
>

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
            location.pathname === item.path;

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
    </>
  );
}
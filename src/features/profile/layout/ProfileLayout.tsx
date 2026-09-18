import { Outlet } from 'react-router-dom';
import { SidebarProfile } from '../components/Dashboard/SidebarProfile';


export default function ProfileLayout() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        <SidebarProfile />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}






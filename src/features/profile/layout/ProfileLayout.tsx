import { Outlet } from 'react-router-dom';
import { SidebarProfile } from '../components/Dashboard/SidebarProfile';


export default function ProfileLayout() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row gap-8 items-start">
        <div className="shrink-0 w-full sm:w-64">
          <SidebarProfile />
        </div>
        <main className="flex-1 min-w-0 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}






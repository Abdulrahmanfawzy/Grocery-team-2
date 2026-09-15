import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar'; 

export default function ProfileLayout() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        <Sidebar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}






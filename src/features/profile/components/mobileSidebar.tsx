// import { X } from "lucide-react";
// import SidebarMenu from "./SidebarMenu";
// import SidebarUser from "./SidebarUser";

// interface IProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const MobileSidebar = ({ isOpen, onClose }: IProps) => {
//   return (
//     <>
//       {/* Overlay */}
//       {isOpen && (
//         <div
//           onClick={onClose}
//           className="fixed inset-0 z-40 bg-black/40 sm:hidden"
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`fixed left-0 top-0 z-50 h-full w-[290px] bg-white p-5 shadow-xl transition-transform duration-300 sm:hidden ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* Header */}
//         <div className="mb-6 flex items-center justify-between">
//           <h2 className="text-lg font-semibold text-[#0A0A0A]">
//             Menu
//           </h2>

//           <button
//             type="button"
//             onClick={onClose}
//             className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         {/* User */}
//         <SidebarUser />

//         {/* Menu */}
//         <div className="mt-5">
//           <SidebarMenu />
//         </div>
//       </aside>
//     </>
//   );
// };

// export default MobileSidebar;
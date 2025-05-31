import { ChevronRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import FooterAside from "./FooterAside";
import { itemsSidebar } from "./itemsSidebar";
import NavItems from "./NavItems";
import HeaderAside from "./HeaderAside";

interface SidebarProps {
    isMenuOpen: boolean;
    rol: number;
    logout: (e: any) => void;
    setIsMenuOpen: (isOpen: boolean) => void;
};

function Sidebar({
    isMenuOpen,
    rol,
    logout,
    setIsMenuOpen
}: SidebarProps) {

    const location = useLocation();
    const Items = itemsSidebar({ rol: rol });

    return (
        <>
            <aside className={`h-full ${isMenuOpen ? 'w-64' : 'w-20'} transition-all duration-300 bg-white shadow-md flex flex-col py-4 fixed left-0 z-10`}>
                <HeaderAside isMenuOpen={isMenuOpen} />
                <div className="flex flex-col gap-1 mt-2 overflow-y-auto flex-1 px-3">
                    {Items.map((item: any, index: number) => (
                        <NavItems
                            key={index}
                            textColor={item.textColor}
                            bgColor={item.bgColor}
                            color={item.color}
                            icon={item.icon}
                            label={item.label}
                            to={item.to}
                            isOpen={isMenuOpen}
                            isActive={location.pathname === item.to}
                        />
                    ))}
                </div>
                <FooterAside
                    isMenuOpen={isMenuOpen}
                    logout={logout}
                />
            </aside>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`fixed z-20 transition-all duration-300 rounded-full shadow-md bg-white p-2 hover:bg-gray-50 ${isMenuOpen ? 'left-60' : 'left-16'} top-6 cursor-pointer`} >
                <ChevronRight className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''} text-gray-600`} size={20} />
            </button>
        </>
    )
};

export default Sidebar

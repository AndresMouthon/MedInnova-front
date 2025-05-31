import { ElementType } from "react";
import { NavLink } from "react-router-dom";

interface NavItemsProps {
    icon: ElementType;
    label: string;
    to: string;
    isOpen: boolean;
    isActive: boolean;
    textColor: string;
    bgColor: string;
    color: string;
}

function NavItems({
    icon: Icon,
    label,
    to,
    isOpen,
    isActive,
    textColor,
    bgColor,
    color,
}: NavItemsProps) {
    return (
        <NavLink to={to} className={`w-full flex items-center p-3 rounded-lg transition-all ${isActive ? `${textColor} ${bgColor} border-l-5 border-${color}-600` : `text-gray-500 hover:bg-gray-100 hover:${textColor}`}`} >
            <div className={`w-8 h-8 flex items-center ${textColor} justify-center ${isActive ? textColor : ''}`}>
                <Icon size={20} />
            </div>
            {isOpen && <span className={`ml-3 font-medium ${isActive ? '' : ''}`}>{label}</span>}
        </NavLink>
    )
}

export default NavItems

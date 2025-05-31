import { CircleUser, LogOut } from "lucide-react"
import { NavLink } from "react-router-dom"

interface FooterAsideProps {
    isMenuOpen: boolean;
    logout: (e: any) => void;
}

function FooterAside({
    isMenuOpen,
    logout
}: FooterAsideProps
) {
    return (
        <footer className="flex flex-col gap-1 px-3 border-t border-gray-200 mt-2 pt-2">
            <NavLink to="/perfil" className={`w-full flex items-center p-3 rounded-lg transition-all text-blue-500 hover:bg-blue-100 hover:text-blue-500 cursor-pointer`}>
                <section className="w-8 h-8 flex items-center justify-center">
                    <CircleUser size={20} />
                </section>
                {isMenuOpen && <span className="ml-3 font-medium">Mi Perfil</span>}
            </NavLink>
            <button className="w-full flex items-center p-3 rounded-lg transition-all text-red-500 hover:bg-red-100 hover:text-red-500 cursor-pointer" onClick={logout}>
                <div className="w-8 h-8 flex items-center justify-center">
                    <LogOut size={20} />
                </div>
                {isMenuOpen && <span className="ml-3 font-medium">Cerrar Sesión</span>}
            </button>
        </footer>
    )
}

export default FooterAside

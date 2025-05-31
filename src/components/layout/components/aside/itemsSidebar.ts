import { FaCalendar, FaClinicMedical, FaHome, FaUserInjured, FaUserTie } from 'react-icons/fa';
import { FaUserDoctor } from 'react-icons/fa6';

const ADMIN_ITEMS = [
    { label: "Inicio", icon: FaHome, to: "/inicio", color: "cyan", bgColor: "bg-cyan-50", textColor: "text-cyan-600" },
    { label: "Medicos", icon: FaUserDoctor, to: "/medicos", color: "orange", bgColor: "bg-orange-50", textColor: "text-orange-600" },
    { label: "Pacientes", icon: FaUserInjured, to: "/pacientes", color: "green", bgColor: "bg-green-50", textColor: "text-green-600" },
    { label: "Recepcionistas", icon: FaUserTie, to: "/recepcionistas", color: "red", bgColor: "bg-red-50", textColor: "text-red-600" },
    { label: "Consultorios", icon: FaClinicMedical, to: "/consultorios", color: "purple", bgColor: "bg-purple-50", textColor: "text-purple-600" },
    { label: "Horarios", icon: FaCalendar, to: "/horarios", color: "pink", bgColor: "bg-pink-50", textColor: "text-pink-600" },
]

export const itemsSidebar = ({ rol }: { rol: number }) => {

    switch (rol) {
        case 1:
            return ADMIN_ITEMS
        default:
            return []
    }
}

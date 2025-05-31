import { AlertCircle, CheckCircle, XCircle } from "lucide-react";

function CardConsultorioComponent() {
    const consultories = [
        {
            id: 1,
            name: "Dr. María Elena González Ruiz",
            specialty: "Cardiología Intervencionista",
            title: "Jefe de Servicio",
            status: "Disponible",
            consultoryNumber: "4A-201",
            building: "Torre Médica A",
            floor: "Piso 4",
            phone: "+52 55 1234-5678",
            ext: "4201",
            schedule: "08:00 - 16:00",
            nextAvailable: "14:30",
            experience: "18 años",
            certifications: ["FACC", "FSCAI"],
            patients: "2,847",
            avatar: "/placeholder.svg?height=80&width=80",
        },
        // ...tus demás médicos aquí...
    ];

    // Nueva card para consultorios sin médico asociado
    const consultoriesWithoutDoctor = [
        {
            id: 7,
            consultoryNumber: "7C-703",
            building: "Torre Médica C",
            floor: "Piso 7",
            status: "Sin médico asociado",
        },
        {
            id: 8,
            consultoryNumber: "8D-801",
            building: "Torre Médica D",
            floor: "Piso 8",
            status: "Sin médico asociado",
        },
    ];

    const getStatusConfig = (status: string) => {
        switch (status) {
            case "Disponible":
                return {
                    color: "text-emerald-700",
                    bg: "bg-emerald-50",
                    border: "border-emerald-200",
                    icon: CheckCircle,
                    dot: "bg-emerald-500",
                };
            case "En consulta":
                return {
                    color: "text-blue-700",
                    bg: "bg-blue-50",
                    border: "border-blue-200",
                    icon: AlertCircle,
                    dot: "bg-blue-500",
                };
            case "Ausente":
                return {
                    color: "text-gray-700",
                    bg: "bg-gray-50",
                    border: "border-gray-200",
                    icon: XCircle,
                    dot: "bg-gray-400",
                };
            case "Sin médico asociado":
                return {
                    color: "text-red-700",
                    bg: "bg-red-50",
                    border: "border-red-200",
                    icon: XCircle,
                    dot: "bg-red-500",
                };
            default:
                return {
                    color: "text-gray-700",
                    bg: "bg-gray-50",
                    border: "border-gray-200",
                    icon: XCircle,
                    dot: "bg-gray-400",
                };
        }
    };

    return (
        <div className="min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {consultories.map((doctor) => {
                    const statusConfig = getStatusConfig(doctor.status);
                    const StatusIcon = statusConfig.icon;

                    return (
                        <div
                            key={doctor.id}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 overflow-hidden"
                        >
                            {/* Header con estado */}
                            <div className={`px-6 py-4 ${statusConfig.bg} ${statusConfig.border} border-b`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <StatusIcon className={`w-4 h-4 ${statusConfig.color}`} />
                                        <span className={`text-sm font-medium ${statusConfig.color}`}>{doctor.status}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                {/* Información del médico */}
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                                        {doctor.name.split(" ")[1]?.charAt(0) || doctor.name.charAt(0)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg font-semibold text-gray-900 leading-tight">{doctor.name}</h3>
                                        <p className="text-blue-600 font-medium text-sm">{doctor.specialty}</p>
                                        <p className="text-gray-500 text-xs">Paciente: {doctor.patients}</p>
                                    </div>
                                </div>

                                {/* Consultorio */}
                                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Consultorio</span>
                                        <span className="text-lg font-bold text-gray-900">{doctor.consultoryNumber}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {consultoriesWithoutDoctor.map((consultory) => {
                    const statusConfig = getStatusConfig(consultory.status);
                    const StatusIcon = statusConfig.icon;

                    return (
                        <div
                            key={consultory.id}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 overflow-hidden"
                        >
                            <div className={`px-6 py-4 ${statusConfig.bg} ${statusConfig.border} border-b`}>
                                <div className="flex items-center gap-2">
                                    <StatusIcon className={`w-4 h-4 ${statusConfig.color}`} />
                                    <span className={`text-sm font-medium ${statusConfig.color}`}>{consultory.status}</span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-red-200 rounded-lg flex items-center justify-center text-red-700 font-bold text-lg">
                                        ?
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                                            Consultorio {consultory.consultoryNumber}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CardConsultorioComponent;

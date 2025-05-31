import { Badge } from "flowbite-react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MedicoColumnsProps } from "../models/IMedicoProps";



export default function MedicoColumns({
  capturarInformacionMedico,
  deleteMedico,
}: MedicoColumnsProps) {

  const color = (estado?: boolean) => {
    if (estado === true) return "success";
    if (estado === false) return "failure";
    return "gray";
  };

  return [
    {
      headerName: "🔢 N°",
      field: "index",
      width: 80,
      filter: false,
      valueGetter: (params: any) => (params.node ? params.node.rowIndex + 1 : ""),
    },
    {
      headerName: "🔧 Acciones",
      filter: false,
      cellClass: "flex items-center",
      flex: 1,
      cellRenderer: (params: any) => (
        <div className="flex">
          <button onClick={() => capturarInformacionMedico(params.data)} className="rounded-full w-9 h-9 bg-blue-transparent border text-blue-700 flex justify-center items-center hover:bg-blue-700 hover:text-white hover:border-blue-700 cursor-pointer transition-all" title="Editar Médico" >
            <FaEdit className="w-4 h-4" />
          </button>
          <button onClick={() => deleteMedico(params.data)} className="rounded-full w-9 h-9 bg-blue-transparent border text-red-700 flex justify-center items-center hover:bg-red-700 hover:text-white hover:border-red-700 cursor-pointer transition-all" title="Ver Médico" >
            <MdDelete className="w-4 h-4" />
          </button>
        </div>
      ),
    },
    {
      headerName: "👨‍⚕️ Especialidad",
      field: "especialidad",
      flex: 1,
      filter: "agTextColumnFilter",
    },
    {
      headerName: "🪪 N° Colegiatura",
      field: "numero_colegiatura",
      flex: 1,
      filter: "agTextColumnFilter",
    },
    {
      headerName: "📞 Teléfono",
      field: "telefono",
      flex: 1,
      filter: "agTextColumnFilter",
    },
    {
      headerName: "✅ Disponibilidad",
      field: "disponibilidad",
      flex: 1,
      cellRenderer: (params: any) => (
        <Badge color={color(params.data.disponibilidad)} className="text-xs font-semibold px-2.5 py-0.5 mt-2 rounded-full" >
          {params.data.disponibilidad ? "Disponible" : "No Disponible"}
        </Badge>
      ),
    },
    {
      headerName: "🕐 Horario de Atención",
      field: "horario_atencion",
      flex: 1,
      filter: "agTextColumnFilter",
    },
  ];
}

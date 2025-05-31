import { useAppMutation, useAppQuery, useAppQueryClient } from "../../../../utils/hooks/useStore";
import { createMedico, getMedicos, updateMedico } from "./medicoService";

export default function apiQueryMedico() {

    const queryClient = useAppQueryClient();

    //=========== CREAR ==============================
    const { mutate: createMedicoMutation, isPending: isCreating } = useAppMutation({
        mutationFn: createMedico,
        onSuccess: () => queryClient.refetchQueries({ queryKey: ['Medicos'] }),
    });

    //=========== OBTENER =============================
    const { data: medicos = [], isLoading, error } = useAppQuery({
        queryKey: ["medicos"],
        queryFn: getMedicos,
    });
    if (error) {
        console.log(`Error al cargar los medicos: ${error.message}`);
    };

    //=========== ACTUALIZAR ===========================
    const { mutate: actualizarMedicoMutation } = useAppMutation({
        mutationFn: updateMedico,
        onSuccess: () => queryClient.refetchQueries({ queryKey: ['Medicos'] }),
    });

    //============RETORNAR ===========================
    return {
        isCreating,
        medicos,
        isLoading,
        createMedicoMutation,
        actualizarMedicoMutation,
    }
}

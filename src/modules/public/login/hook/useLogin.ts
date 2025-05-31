import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { createAcceso, resetAcceso } from "../../../../redux/credencialesSlice";
import { createUser, resetUser } from "../../../../redux/userSlice";
import { alertError, alertWarning } from "../../../../utils/alerts/alertas.utility";
import { useAppDispatch } from "../../../../utils/hooks/useStore";
import { crearStorage, removerStorage } from "../../../../utils/localstorage/localstorage";
import { PrivateRoutes, PublicRoutes } from "../../../../utils/models/RoutesModel";
import useQueryLogin from "../apis/useQueryLogin";
import { IUsuarioLogin } from "../models/ILoginModelDB";

export default function useLogin() {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { isPending: loading, loginMutation } = useQueryLogin();

    const [usuario, setUsuario] = useState<IUsuarioLogin>({
        documento: "",
        password: ""
    });

    const handleChange = ({ target }: any) => {
        const { name, value } = target;
        setUsuario((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        loginMutation({ usuario: usuario }, {
            onSuccess: (data) => {
                if (!data.status) {
                    setUsuario({ documento: "", password: "" })
                    alertWarning({ text: data.errors[0] });
                } else {
                    crearStorage("@medinnova", data.token);
                    dispatch(createUser(data.usuario));
                    dispatch(createAcceso(data.credenciales));
                    navigate(PrivateRoutes.DASHBOARD, { replace: true });
                }
            },
            onError: (error) => { alertError({ text: error.message }); }
        });
    };

    const logout = useCallback((e: any) => {
        e.preventDefault();
        Swal.fire({
            title: '¿Quiere cerrar la sesión actual?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, salir!',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                removerStorage("@medinnova");
                dispatch(resetUser());
                dispatch(resetAcceso());
                navigate(PublicRoutes.LOGIN, { replace: true });
            }
        })
    }, []);

    return {
        loading,
        usuario,
        handleChange,
        handleSubmit,
        logout,
    };

}
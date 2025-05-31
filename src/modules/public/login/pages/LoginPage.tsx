import SecondaryFund from "../../../../components/layout/components/SecondaryFund";
import FormLogin from "../components/FormLogin";
import PresentationLogin from "../components/PresentationLogin";
import useLogin from "../hook/useLogin";

function LoginPage() {

    const { 
        usuario, 
        loading, 
        handleChange, 
        handleSubmit 
    } = useLogin();

    return (
        <SecondaryFund>
            <div className="flex items-center justify-center h-screen w-screen overflow-hidden">
                <PresentationLogin />
                <FormLogin
                    loading={loading}
                    usuario={usuario}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            </div>
        </SecondaryFund>
    )
}

export default LoginPage

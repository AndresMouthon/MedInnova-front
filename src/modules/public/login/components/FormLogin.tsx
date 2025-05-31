import { FaIdCardAlt, FaLock } from "react-icons/fa";
import { FaUserDoctor, FaUserInjured, FaUserTie } from "react-icons/fa6";
import SpinnerUtil from "../../../../utils/loadings/spinner/SpinnerUtil";
import { IFormLoginProps } from "../models/ILoginProps";

function FormLogin({
    loading,
    usuario,
    handleChange,
    handleSubmit
}: IFormLoginProps) {
    return (
        <div className="w-full md:w-1/2 flex items-center justify-center relative">
            <div className="w-3/4 bg-white flex flex-col items-center justify-center relative p-10 rounded-lg shadow-lg">

                <div className="w-full max-w-md relative z-10">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Bienvenido</h2>
                        <p className="text-gray-600">Ingrese sus credenciales para continuar</p>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <label htmlFor="documento" className="block text-sm font-medium text-gray-700">
                                    Documento de identidad
                                </label>
                            </div>
                            <div className="relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaIdCardAlt className="h-5 w-5 text-gray-400" />
                                </div>
                                <input type="number" id="documento" name="documento" className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 py-3" placeholder="Ej: 12345678" onChange={handleChange} value={usuario.documento} />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Contraseña
                                </label>
                            </div>
                            <div className="relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaLock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input type="password" id="password" name="password" className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 py-3" placeholder="••••••••" value={usuario.password} onChange={handleChange} />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-200 cursor-pointer" onClick={handleSubmit} disabled={loading}>
                                <span>
                                    {!loading ? 'Ingresar' : <SpinnerUtil size={5} />}
                                </span>
                            </button>
                        </div>
                    </form>

                    <div className="mt-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-gray-50 text-gray-500">Nuestros usuarios</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-3">
                            <div className="flex flex-col items-center justify-center border border-gray-300 rounded-md p-3 hover:bg-gray-100 transition-colors cursor-pointer">
                                <FaUserDoctor className="h-6 w-6 text-green-600" />
                                <span className="mt-1 text-xs font-medium text-gray-900">Médicos</span>
                            </div>
                            <div className="flex flex-col items-center justify-center border border-gray-300 rounded-md p-3 hover:bg-gray-100 transition-colors cursor-pointer">
                                <FaUserTie className="h-6 w-6 text-blue-600" />
                                <span className="mt-1 text-xs font-medium text-gray-900">Recepcionistas</span>
                            </div>
                            <div className="flex flex-col items-center justify-center border border-gray-300 rounded-md p-3 hover:bg-gray-100 transition-colors cursor-pointer">
                                <FaUserInjured className="h-6 w-6 text-purple-600" />
                                <span className="mt-1 text-xs font-medium text-gray-900">Pacientes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormLogin

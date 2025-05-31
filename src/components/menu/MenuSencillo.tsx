import { Plus, Search, X } from 'lucide-react';
import { ChangeEvent, useEffect, useState } from 'react';

interface MenuSencilloProps {
    busqueda: string;
    handleBusqueda: (event: ChangeEvent<HTMLInputElement>) => void;
    toggleModal: () => void;
    buscar?: boolean;
    crear?: boolean;
    placeholderText?: string;
    color: any;
}

const MenuSencillo = ({
    buscar = true,
    crear = true,
    placeholderText = "Buscar...",
    busqueda,
    color,
    handleBusqueda,
    toggleModal,
}: MenuSencilloProps) => {
    const [searchActive, setSearchActive] = useState(false);
    const [buttonHover, setButtonHover] = useState(false);

    const handleClearSearch = () => {
        const event = {
            target: { value: '' } as HTMLInputElement,
        } as ChangeEvent<HTMLInputElement>;
        handleBusqueda(event);
    };

    useEffect(() => {
        if (busqueda) {
            setSearchActive(true);
        }
    }, [busqueda]);

    return (
        <div className="relative w-full overflow-hidden rounded-2xl">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-2">
                {crear && (
                    <button onClick={toggleModal} onMouseEnter={() => setButtonHover(true)} onMouseLeave={() => setButtonHover(false)} className="group relative flex items-center justify-center w-full md:w-auto h-12 px-8 overflow-hidden rounded-lg shadow-lg transition-all duration-300 cursor-pointer" >
                        <div className={`absolute inset-0 bg-gradient-to-r from-white ${color.TO} hover:${color.FROM}`}></div>
                        <div className={`absolute inset-0 bg-gradient-to-r ${color.FROM} ${color.TO} transition-opacity duration-500 opacity-0 ${buttonHover ? 'opacity-100' : ''}`}></div>
                        <div className="relative z-10 flex items-center justify-center">
                            <Plus className={`w-5 h-5 ${color.TEXT} transition-all duration-300 mr-2 ${buttonHover ? 'text-white' : ''}`} />
                            <span className={`font-bold text-lg ${color.TEXT} transition-all duration-300 ${buttonHover ? 'text-white' : ''}`}>
                                Crear
                            </span>
                        </div>
                    </button>
                )}

                {buscar && (
                    <div className="relative w-full md:w-auto">
                        <div
                            className={`relative flex items-center w-full md:w-64 h-12 overflow-hidden transition-all duration-500 ${searchActive ? 'md:w-80 bg-white/90 backdrop-blur-md' : 'bg-white/70 backdrop-blur-sm'} shadow-lg border ${searchActive ? color.BORDER : 'border-gray-200'} rounded-xl px-2`}
                        >
                            <div className={`flex items-center justify-center w-12 transition-transform duration-300 ${searchActive ? 'scale-110' : 'scale-100'}`}>
                                <Search className={`w-5 h-5 transition-colors duration-300 ${searchActive ? color.TEXT : 'text-gray-400'}`} />
                            </div>

                            <input
                                type="text"
                                onChange={handleBusqueda}
                                value={busqueda}
                                placeholder={placeholderText}
                                onFocus={() => setSearchActive(true)}
                                onBlur={() => setSearchActive(busqueda ? true : false)}
                                className="w-full h-full bg-transparent text-gray-800 placeholder-gray-400 border-none focus:outline-none focus:ring-0 px-1"
                            />

                            {busqueda && (
                                <button
                                    onClick={handleClearSearch}
                                    className="flex items-center justify-center w-12 h-12 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                                    aria-label="Limpiar búsqueda"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            )}

                            {searchActive && (
                                <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white ${color.VIA} ${color.TO}`}>
                                    <div className="absolute top-0 left-0 h-full w-20 bg-white/80 animate-shimmer"></div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenuSencillo;
function PresentationLogin() {
    return (
        <div className="w-1/2 relative hidden md:flex sm:flex-col sm:items-center sm:justify-center ">
            <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dna-pattern" width="100" height="100" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                            <path d="M30,10 Q50,30 30,50 Q10,30 30,10 Z" fill="none" stroke="white" strokeWidth="1" />
                            <path d="M70,10 Q90,30 70,50 Q50,30 70,10 Z" fill="none" stroke="white" strokeWidth="1" />
                            <path d="M30,50 Q50,70 30,90 Q10,70 30,50 Z" fill="none" stroke="white" strokeWidth="1" />
                            <path d="M70,50 Q90,70 70,90 Q50,70 70,50 Z" fill="none" stroke="white" strokeWidth="1" />
                            <line x1="30" y1="30" x2="70" y2="30" stroke="white" strokeWidth="1" />
                            <line x1="30" y1="70" x2="70" y2="70" stroke="white" strokeWidth="1" />
                        </pattern>
                        <pattern id="health-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 20 40 M 0 20 L 40 20" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#health-grid)" />
                    <rect width="100%" height="100%" fill="url(#dna-pattern)" />
                </svg>
            </div>
            <div className="relative z-10 flex flex-col items-center text-white px-12">
                <div className="mb-6 relative">
                    <div className="absolute -inset-1 bg-white rounded-full opacity-20 blur-md"></div>
                    <div className="relative flex items-center justify-center bg-white bg-opacity-20 w-40 h-40 rounded-full border-4 border-white border-opacity-20">
                        <div className="relative">
                            <img src="https://img.freepik.com/vector-premium/plantilla-logotipo-medico_1283348-16845.jpg?semt=ais_hybrid&w=740" alt="Icono" className="h-28 w-28 text-white" />
                        </div>
                    </div>
                </div>
                <h1 className="text-4xl font-bold mb-2 tracking-tight">MediSoft</h1>
                <p className="text-xl font-light mb-6 opacity-90">Sistema Integral de Gestión Clínica</p>
                <div className="w-full mb-8 relative h-8 flex items-center">
                    <div className="absolute inset-0 flex items-center">
                        <div className="h-px w-full bg-white opacity-20"></div>
                    </div>
                    <div className="relative flex justify-center w-full">
                        <svg className="h-8 w-32 text-teal-200" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M0,10 L15,10 C17.5,10 17.5,2 20,2 C22.5,2 22.5,18 25,18 C27.5,18 27.5,10 30,10 L45,10 L48,3 L51,17 L54,10 L59,10 C61.5,10 61.5,6 64,6 C66.5,6 66.5,14 69,14 C71.5,14 71.5,10 74,10 L100,10" />
                        </svg>
                    </div>
                </div>

                <div className="text-center space-y-6 mb-12">
                    <div className="flex items-center space-x-3">
                        <svg className="h-6 w-6 text-teal-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                        <span className="text-lg">Historiales clínicos interconectados</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <svg className="h-6 w-6 text-teal-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span className="text-lg">Análisis de datos epidemiológicos</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <svg className="h-6 w-6 text-teal-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        </svg>
                        <span className="text-lg">Telemedicina integrada</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <svg className="h-6 w-6 text-teal-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-lg">Encriptación de nivel hospitalario</span>
                    </div>
                </div>

                <div className="w-full px-10">
                    <div className="flex justify-between items-center text-xs opacity-70 mb-2">
                        <span>Diagnóstico</span>
                        <span>Tratamiento</span>
                        <span>Seguimiento</span>
                    </div>
                    <div className="h-1 w-full bg-white bg-opacity-20 rounded-full overflow-hidden">
                        <div className="h-full bg-teal-200 rounded-full w-2/3 relative">
                            <div className="absolute right-0 w-4 h-4 bg-white rounded-full -top-1.5 border-2 border-teal-200 shadow-lg"></div>
                        </div>
                    </div>
                </div>
                <p className="text-sm opacity-70 mt-8">"Innovación médica al servicio de la salud integral"</p>
            </div>
        </div>
    )
}

export default PresentationLogin

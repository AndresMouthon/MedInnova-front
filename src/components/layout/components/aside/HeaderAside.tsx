interface HeaderAsideProps {
    isMenuOpen: boolean;
}

function HeaderAside({
    isMenuOpen
}: HeaderAsideProps
) {
    return (
        <main className={`flex items-center justify-center mb-2 ${isMenuOpen ? 'px-4' : 'px-2'}`}>
            <a href="#" className="flex items-center border-b border-gray-200">
                <img
                    src="https://img.freepik.com/vector-premium/plantilla-logotipo-medico_1283348-16845.jpg?semt=ais_hybrid&w=740"
                    className={`${isMenuOpen ? 'h-16 w-16' : 'h-12 w-12'}`}
                    alt="Logo"
                />
                {isMenuOpen && (
                    <span className="text-xl font-bold text-gray-800 ml-2">Medimnova</span>
                )}
            </a>
        </main>
    )
}

export default HeaderAside

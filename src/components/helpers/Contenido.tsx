interface ContenidoProps {
    children: React.ReactNode;
}

function Contenido(props: ContenidoProps) {
    return (
        <div className='mt-7'>
            {props.children}
        </div>
    )
}

export default Contenido

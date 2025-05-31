import { memo, ReactNode } from 'react';

function ContainerContenido(props: { children: ReactNode }) {
    return (
        <div className="animated-element">
            {props.children}
        </div>
    );
}

export default memo(ContainerContenido);
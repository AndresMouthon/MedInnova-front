import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'flowbite-react';
import React from 'react';
import SpinnerUtil from '../../utils/loadings/spinner/SpinnerUtil';

interface VentanaModalProps {
    titulo: string;
    size?: string;
    children: React.ReactNode;
    openModal: boolean;
    loading: boolean;
    cerrarModal: () => void;
    hanleSubmit: (e: any) => void;
}

function VentanaModal({
    titulo,
    size,
    children,
    openModal,
    loading,
    cerrarModal,
    hanleSubmit
}: VentanaModalProps) {

    return (
        <Modal dismissible size={size} show={openModal} onClose={cerrarModal}>
            <ModalHeader className='border-gray-300'>{titulo}</ModalHeader>
            <ModalBody>
                {children}
            </ModalBody>
            <ModalFooter>
                <Button color="green" className='cursor-pointer' onClick={hanleSubmit} disabled={loading}>
                    {loading ? <SpinnerUtil /> : 'Aceptar'}
                </Button>
                <Button color="red" className='cursor-pointer' onClick={cerrarModal} disabled={loading}>
                    Cancelar
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default VentanaModal;
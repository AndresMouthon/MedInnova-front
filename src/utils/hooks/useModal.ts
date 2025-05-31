import { useState } from 'react';

export default function useModal() {

    const [openModal, setOpenModal] = useState<boolean>(false);

    const toggleModal = () => setOpenModal(!openModal);

    return {
        openModal,
        toggleModal
    }
}

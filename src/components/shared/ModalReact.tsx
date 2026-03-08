import React, { useEffect, useState } from 'react';

import closeIcons from "@assets/images/close-icon.png";
import '@styles/components/modal.css';


type propsT = {
    idModal: string;
    classModal?: string;
    title?: string;
    titleClass?: string;
    headerClass?: string;
    isOpen: boolean;
    children: React.ReactNode;
    onCloseModal: () => void;
};


const ModalReact = (props: propsT) => {

    const { idModal, classModal = "", titleClass, headerClass, title, children, isOpen, onCloseModal } = props;

    const [setshowModal, setShowModal] = useState<boolean>(false);

    const closeModal = () => {
        setShowModal(false);
        onCloseModal();
    };

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    return (
        <>
            <section className={`modal-layer ${setshowModal ? 'modal-show' : 'modal-hide'}`} id={idModal}>
                <section className={`classModal modal-container `}>
                    <header className={`${headerClass} header-modal`}>
                        <p className={`${titleClass}`}>{title}</p>
                        <button
                            className={`header-modal__close`}
                            id="headerModalClose"
                            onClick={closeModal}
                        >
                            <img src={closeIcons.src} alt="cerrar modal" />
                        </button>
                    </header>
                    {children}
                </section>
            </section>
        </>
    );
};

export default ModalReact;




import React, { useState } from 'react';
import avatar from '../../Assets/Images/avatar.png';
import Modal from '../../Features/Modal/Modal';

const Logged = () => {
    const [shouldOpen, setShouldOpen] = useState(false);

    const handleModal = () => {
        setShouldOpen(true);
    }

    return (
        <>
        <div className="login-block" onClick={handleModal}>
            <img className="" src={avatar} alt="avatar" />
        </div>

        <Modal active={shouldOpen} setActive={setShouldOpen} >
        </Modal>
        </>
    );
};

export default Logged;
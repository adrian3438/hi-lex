import Modal from 'react-modal';
import '@/app/assets/modal.scss';
import React from "react";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: 'auto',
        height: 'auto',
        transform: 'translate(-50%, -50%)',
        padding: '30px 20px',
        border: 'none',
        backgroundColor: '#fff',
        borderRadius: '10px',
    },
};


interface CustomModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    contentLabel?: string;
}

const ContactVideoModal: React.FC<CustomModalProps> = ({ isOpen, onRequestClose, contentLabel }) => {
    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                style={customStyles}
                contentLabel={contentLabel}
            >
                <div className="modal-wrapper">
                    <div className="modal-header">
                        <h2>{contentLabel}</h2>
                        <button onClick={onRequestClose} className="modal-close-button">Close</button>
                    </div>
                    <div className="modal-content">
                        <div style={{padding: "56.25% 0 0 0", position: "relative"}} className="modal-video">
                            <iframe src="https://player.vimeo.com/video/782381466?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&muted=1&autoplay=1" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} title="Valmax BOG 재액화프로세스"></iframe>
                            {/*<iframe src="https://player.vimeo.com/video/682445691?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&muted=1&autoplay=1" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} title="Valmax BOG 재액화프로세스"></iframe>*/}
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default ContactVideoModal;

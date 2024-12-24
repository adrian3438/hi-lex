import Modal from 'react-modal';
import '@/app/assets/modal.scss';
import Image from "next/image";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '100%',
        maxWidth: "1538px",
        height: 'auto',
        transform: 'translate(-50%, -50%)',
        zIndex : '9999',
        padding: '30px 40px',
    },
};

interface Props {
    isOpen: boolean;
    onRequestClose: () => void;
    mapInfo: any
}

export default function MapInfo({isOpen, onRequestClose, mapInfo}: Props) {
    console.log('mapInfo : ', mapInfo);
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            shouldCloseOnEsc={false}
        >
            <div className="modal-wrapper">
                <div className="modal-header">
                    <button onClick={onRequestClose} className="modal-close-button">Close</button>
                </div>
                <div className="modal-content">
                    <div>
                    <div>
                        <h3>{mapInfo?.title}</h3>
                        <div className="address">
                            <p></p>
                            <address>{mapInfo?.address}</address>
                        </div>
                        <div className="contact">
                            <p className="tel"></p>
                            <p className="fax"></p>
                        </div>
                        <div className="etc-info">
                            <p>Established: </p>
                            <p>Net Sales:</p>
                            <p>Employee</p>
                        </div>
                    </div>
                    <div>
                        <Image src={mapInfo?.imgSrc} alt={mapInfo?.title} width={768} height={377}/>
                    </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

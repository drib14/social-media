// AddStoryCard.js
import React, { useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';
import { FaPlus, FaTextHeight, FaImage } from 'react-icons/fa';

const predefinedColors = [
    'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
    'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
    'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
    'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
    'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
    'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
    'linear-gradient(135deg, #ffdde1 0%, #ee9ca7 100%)',
    'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
    'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
    'linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)',
    'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
    'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
    'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
];

const AddStoryCard = () => {
    const [showModal, setShowModal] = useState(false);
    const [showTextArea, setShowTextArea] = useState(false);
    const [selectedColor, setSelectedColor] = useState(predefinedColors[0]);

    const handleAddStoryClick = () => {
        setShowModal(true);
    };

    const handleTextCardClick = () => {
        setShowTextArea(true);
    };

    const handleMediaCardClick = () => {
        setShowModal(false);
        // Prompt file explorer
        document.getElementById('mediaUpload').click();
    };

    const handleClose = () => {
        setShowModal(false);
        setShowTextArea(false);
    };

    return (
        <>
            <Card
                className="text-center d-flex align-items-center justify-content-center"
                style={{
                    width: '120px',
                    height: '180px',
                    cursor: 'pointer',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
                    marginRight: '10px'
                }}
                onClick={handleAddStoryClick}
            >
                <Card.Body className="d-flex flex-column align-items-center justify-content-center p-0">
                    <div className="mb-2">
                        <div
                            style={{
                                width: '80px',
                                height: '80px',
                                background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '2px solid #fff'
                            }}
                        >
                            <FaPlus size={40} color="#fff" />
                        </div>
                    </div>
                    <h6 style={{ color: "#fff" }}>Add Story</h6>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Body className="d-flex flex-column align-items-center">
                    {!showTextArea ? (
                        <div className="d-flex justify-content-around w-100">
                            <Card
                                className="text-center d-flex align-items-center justify-content-center"
                                style={{
                                    width: '45%',
                                    height: '120px',
                                    cursor: 'pointer',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
                                    marginBottom: '10px'
                                }}
                                onClick={handleTextCardClick}
                            >
                                <Card.Body className="d-flex flex-column align-items-center justify-content-center p-0">
                                    <FaTextHeight size={40} color="#fff" />
                                    <h6 style={{ color: "#fff", marginTop: '10px' }}>Text</h6>
                                </Card.Body>
                            </Card>

                            <Card
                                className="text-center d-flex align-items-center justify-content-center"
                                style={{
                                    width: '45%',
                                    height: '120px',
                                    cursor: 'pointer',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    background: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)'
                                }}
                                onClick={handleMediaCardClick}
                            >
                                <Card.Body className="d-flex flex-column align-items-center justify-content-center p-0">
                                    <FaImage size={40} color="#fff" />
                                    <h6 style={{ color: "#fff", marginTop: '10px' }}>Media</h6>
                                </Card.Body>
                            </Card>
                        </div>
                    ) : (
                        <div className="text-center w-100">
                            <textarea
                                style={{
                                    width: '100%',
                                    height: '150px',
                                    borderRadius: '12px',
                                    border: '1px solid #ddd',
                                    padding: '10px',
                                    background: selectedColor
                                }}
                                placeholder="Type your story here..."
                            ></textarea>
                            <div className="d-flex flex-wrap justify-content-center mt-2">
                                {predefinedColors.map((color, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            borderRadius: '50%',
                                            background: color,
                                            cursor: 'pointer',
                                            margin: '5px'
                                        }}
                                        onClick={() => setSelectedColor(color)}
                                    ></div>
                                ))}
                            </div>
                            <Button
                                style={{
                                    marginTop: '10px',
                                    backgroundColor: '#007bff',
                                    borderColor: '#007bff'
                                }}
                                onClick={handleClose}
                            >
                                Submit
                            </Button>
                        </div>
                    )}
                </Modal.Body>
            </Modal>

            <input type="file" id="mediaUpload" style={{ display: 'none' }} />
        </>
    );
};

export default AddStoryCard;

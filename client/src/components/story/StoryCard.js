// StoryCard.js
import React from 'react';
import { Card } from 'react-bootstrap';

const StoryCard = ({ user, onViewStory }) => {
    return (
        <Card
            className="position-relative text-center"
            style={{
                width: '120px',
                cursor: 'pointer',
                borderRadius: '12px',
                overflow: 'hidden',
                marginRight: '10px',
                backgroundColor: '#333' // Set a darker background color for better contrast
            }}
            onClick={() => onViewStory(user)}
        >
            <Card.Body className="p-0 position-relative">
                <div
                    className="position-absolute top-0 start-0 p-2"
                    style={{ width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1))' }}
                >
                    <img
                        src={user.avatar}
                        alt={user.name}
                        className="rounded-circle border border-light"
                        style={{ width: '50px', height: '50px', objectFit: 'cover', position: 'absolute', top: '8px', left: '8px', border: '2px solid white' }}
                    />
                </div>
                {user.stories.length > 0 && (
                    <Card.Img
                        src={user.stories[0]?.url}
                        alt="Story Preview"
                        className="img-fluid"
                        style={{ height: '120px', objectFit: 'cover', borderRadius: '12px' }}
                    />
                )}
                <Card.Body className="pt-2 pb-2 text-white">
                    <h6 className="text-white mb-0" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                        {user.name}
                    </h6>
                </Card.Body>
            </Card.Body>
        </Card>
    );
};

export default StoryCard;
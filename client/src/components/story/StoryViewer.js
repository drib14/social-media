import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import dayjs from 'dayjs';
import './StoryViewer.css';

const StoryViewer = ({ show, onHide, userStories }) => {
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
    const [currentUserIndex, setCurrentUserIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const storyRef = useRef(null);

    // Handle autoplay and story change
    useEffect(() => {
        if (isPlaying && userStories.length > 0) {
            const timer = setTimeout(() => {
                handleNextStory();
            }, 5000); // Adjust duration as needed

            return () => clearTimeout(timer);
        }
    }, [currentStoryIndex, isPlaying, userStories]);

    const handleNextStory = () => {
        if (!userStories || userStories.length === 0) return;

        const currentUserStories = userStories[currentUserIndex]?.stories || [];
        if (currentStoryIndex < currentUserStories.length - 1) {
            setCurrentStoryIndex(currentStoryIndex + 1);
        } else {
            // Move to next user if available
            if (currentUserIndex < userStories.length - 1) {
                setCurrentUserIndex(currentUserIndex + 1);
                setCurrentStoryIndex(0);
            } else {
                // Close viewer if no more stories
                onHide();
            }
        }
    };

    const handlePreviousStory = () => {
        if (currentStoryIndex > 0) {
            setCurrentStoryIndex(currentStoryIndex - 1);
        } else if (currentUserIndex > 0) {
            // Move to previous user if available
            setCurrentUserIndex(currentUserIndex - 1);
            const prevUserStories = userStories[currentUserIndex - 1]?.stories || [];
            setCurrentStoryIndex(prevUserStories.length - 1);
        }
    };

    const getTimeDifference = (timestamp) => {
        if (!timestamp) return '';
        const hoursAgo = dayjs().diff(dayjs(timestamp), 'hour');
        return `${hoursAgo} hours ago`;
    };

    if (!userStories || userStories.length === 0) {
        return null;
    }

    const currentUserStories = userStories[currentUserIndex]?.stories || [];
    const currentStory = currentUserStories[currentStoryIndex] || {};

    return (
        <Modal show={show} onHide={onHide} dialogClassName="story-viewer-modal" centered>
            <Modal.Body className="p-0">
                <div className="story-viewer">
                    <div className="story-header">
                        <img src={userStories[currentUserIndex]?.userAvatar} alt="User Avatar" className="user-avatar" />
                        <div className="user-info">
                            <span className="user-name">{userStories[currentUserIndex]?.userName}</span>
                            <span className="story-time">{getTimeDifference(currentStory.timestamp)}</span>
                        </div>
                    </div>
                    <div className="story-content">
                        <img
                            ref={storyRef}
                            src={currentStory.url}
                            alt="Story"
                            onClick={handleNextStory}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <button className="nav-button prev" onClick={handlePreviousStory}>
                        <FaChevronLeft size={30} />
                    </button>
                    <button className="nav-button next" onClick={handleNextStory}>
                        <FaChevronRight size={30} />
                    </button>
                </div>
            </Modal.Body>
            <Modal.Footer className="story-viewer-footer">
                <Button variant="secondary" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default StoryViewer;
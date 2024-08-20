import React, { useState } from 'react';
import StoryCard from './StoryCard';
import AddStoryCard from './AddStoryCard';
import StoryViewer from './StoryViewer';

const dummyUsers = [
    {
        id: 1,
        name: 'John Doe',
        avatar: 'https://picsum.photos/80/80?random=2',
        stories: [
            { url: 'https://picsum.photos/800/600?random=3', timestamp: '2024-08-05T10:00:00Z' },
            { url: 'https://picsum.photos/800/600?random=4', timestamp: '2024-08-05T12:00:00Z' }
        ]
    },
    {
        id: 2,
        name: 'Jane Smith',
        avatar: 'https://picsum.photos/80/80?random=5',
        stories: [
            { url: 'https://picsum.photos/800/600?random=6', timestamp: '2024-08-04T08:00:00Z' }
        ]
    }
];

const StoryFeature = () => {
    const [showStoryViewer, setShowStoryViewer] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleAddStory = () => {
        alert('Add a new story!');
    };

    const handleViewStory = (user) => {
        setSelectedUser(user);
        setShowStoryViewer(true);
    };

    const handleCloseStoryViewer = () => {
        setShowStoryViewer(false);
        setSelectedUser(null);
    };

    return (
        <div className="d-flex overflow-auto p-3">
            <AddStoryCard onAddStory={handleAddStory} />
            {dummyUsers.map(user => (
                <StoryCard key={user.id} user={user} onViewStory={handleViewStory} />
            ))}
            {selectedUser && (
                <StoryViewer
                    show={showStoryViewer}
                    onHide={handleCloseStoryViewer}
                    userStories={[{
                        userAvatar: selectedUser.avatar,
                        userName: selectedUser.name,
                        stories: selectedUser.stories
                    }]}
                />
            )}
        </div>
    );
};

export default StoryFeature;
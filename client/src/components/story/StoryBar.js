// StoryBar.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AddStoryCard from './AddStoryCard';
import StoryCard from './StoryCard';

const StoryBar = ({ users, onAddStory, onViewStory }) => {
    return (
        <Container className="my-3">
            <Row className="align-items-center">
                <Col xs={2} className="text-center">
                    <AddStoryCard onAddStory={onAddStory} />
                </Col>
                {users.map((user) => (
                    <Col xs={2} key={user.id} className="text-center">
                        <StoryCard user={user} onViewStory={onViewStory} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default StoryBar;
import axios from 'axios';

export const createStory = (content, media) => async dispatch => {
    try {
        const formData = new FormData();
        formData.append('content', content);
        media.forEach(file => formData.append('media', file));

        const { data } = await axios.post('/api/stories', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });

        dispatch({ type: 'CREATE_STORY_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'CREATE_STORY_FAIL', payload: error.response.data.msg });
    }
};

export const fetchStories = () => async dispatch => {
    try {
        const { data } = await axios.get('/api/stories');
        dispatch({ type: 'FETCH_STORIES_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'FETCH_STORIES_FAIL', payload: error.response.data.msg });
    }
};

export const deleteStory = (id) => async dispatch => {
    try {
        await axios.delete(`/api/stories/${id}`);
        dispatch({ type: 'DELETE_STORY_SUCCESS', payload: id });
    } catch (error) {
        dispatch({ type: 'DELETE_STORY_FAIL', payload: error.response.data.msg });
    }
};

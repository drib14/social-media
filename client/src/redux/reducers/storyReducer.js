const initialState = {
    stories: [],
    loading: false,
    error: null
};

const storyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_STORIES_SUCCESS':
            return { ...state, stories: action.payload, loading: false };
        case 'CREATE_STORY_SUCCESS':
            return { ...state, stories: [action.payload, ...state.stories], loading: false };
        case 'DELETE_STORY_SUCCESS':
            return { ...state, stories: state.stories.filter(story => story._id !== action.payload), loading: false };
        case 'FETCH_STORIES_FAIL':
        case 'CREATE_STORY_FAIL':
        case 'DELETE_STORY_FAIL':
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};

export default storyReducer;

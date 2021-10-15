const initialState = {
    articles: {},
    loading: false,
    error: false
}

function newsReducer(state = initialState, action){    
    switch (action.type){
        case "FETCH_DATA_FETCHING":
            return{
                ...state,
                loading: true,
                error: false
            }
        case "FETCH_DATA_SUCCESS":
            const { articles } = action.payload
            return {
                ...state,
                articles,
                loading: false,
                error: false
            };
        case "FETCH_DATA_ERROR":
            return {
                ...state,
                loading: false,
                error: true,
            };           
        default:
            return state
    }
}

export default newsReducer;
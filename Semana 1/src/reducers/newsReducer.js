const initialState = {
    articles: [],
    loading: false,
    error: false
}

function newsReducer(state = initialState, action){    
    switch (action.type){
        case "FETCH_DATA_REQUEST":
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
        case "DELETE_NEW":
            const indexToDelete = action.payload.index;
            const newList = state.articles.filter((news, index) => index !== indexToDelete)
            return{
                ...state,
                articles: newList,
                loading: false,
                error: false
            }
        default:
            return state
    }
}

export default newsReducer;
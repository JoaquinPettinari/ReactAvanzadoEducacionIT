import { FETCH_DATA_REQUEST ,FETCH_DATA_ERROR, FETCH_DATA_SUCCESS, DELETE_NEW} from "./actionType"

export function fetchDataRequest(){  
    return {
        type: FETCH_DATA_REQUEST,        
    }
}

export function fetchDataSuccess(data){    
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
}

export function fetchDataError(error) {
    return {
      type: FETCH_DATA_ERROR,
      payload: { error }
    };
}

export function deleteNews(index){
    return {
        type: DELETE_NEW,
        payload: {index: index}
    };
}
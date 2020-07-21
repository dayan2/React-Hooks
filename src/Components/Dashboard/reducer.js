import * as dashboardActions from "./actions"

const initialState = {
    listFetchLoading: false,
    list: [],
    error: ""
}

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case dashboardActions.FETCH_lIST_REQUEST:
            console.log("FETCH_lIST_REQUEST")
            return {
                ...state,
                listFetchLoading: true
            }
        case dashboardActions.FETCH_lIST_SUCCESS: {
            return {
                ...state,
                list: action.payload,
                listFetchLoading: false,
                error: ""
            }
        }
        case dashboardActions.FETCH_lIST_FAIL: {
            console.log("FETCH_lIST_FAIL")
            return {
                ...state,
                listFetchLoading: false,
                error: action.payload
            }
        }
        default:
            return state
    }
}

export default dashboardReducer

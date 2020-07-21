import * as appActions from "./actions"

const initialState = {
    appLoading: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case appActions.APP_LOADING_STARTED:
            return {
                ...state,
                appLoading: true
            }
        case appActions.APP_LOADING_COMPLETED: {
            return {
                ...state,
                appLoading: false
            }
        }
        default:
            return state
    }
}

export default appReducer

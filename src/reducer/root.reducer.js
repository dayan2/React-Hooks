import { combineReducers } from "redux"
import appReducer from "./index"
import dashboardReducer from "../Components/Dashboard/reducer"


const rootReducer = combineReducers({
    app: appReducer,
    dashboard: dashboardReducer
})

export default rootReducer

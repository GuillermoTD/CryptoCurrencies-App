import {createStore, combineReducers} from "redux"
import getDataApi from "../reducers/getDataApi"
const reducers = combineReducers({
    getDataApi
})
 
const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )


    
export default store;
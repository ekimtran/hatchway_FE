import { combineReducers } from "redux";
import studentsReducer from './students_reducer';


const rootReducer = combineReducers({
    studentsReducer
});

export default rootReducer;
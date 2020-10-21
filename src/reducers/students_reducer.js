import { ALL_STUDENTS } from '../actions/students_actions';

const studentsReducer = (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case ALL_STUDENTS:
            return Object.assign({}, state, action.students);
        default:
            return state;
    }

}

export default studentsReducer;
import { ALL_STUDENTS } from '../actions/students_actions';

const studentsReducer = (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        //to merge tags object to already made state;
        case ALL_STUDENTS:
            const data = {};
            const students = action.students.data.students;
            students.map((el, i) => data[i] = Object.assign(el, {tags: []}));
            return Object.assign({}, state, data);
        default:
            return state;
    }

}

export default studentsReducer;
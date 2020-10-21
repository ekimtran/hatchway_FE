import * as StudentsAPI from '../utils/students_util';

export const ALL_STUDENTS = 'ALL_STUDENTS';

const allStudents = (students) => ({
    type: ALL_STUDENTS,
    students,
});

export const fetchStudents = () => dispatch => (
    StudentsAPI.fetchAllStudents()
    .then(students => dispatch(allStudents(students)))
);


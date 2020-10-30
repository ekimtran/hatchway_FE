import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudents } from '../../actions/students_actions';
import './students.scss';

import Student from './student';

const Students = () => {
    const dispatch = useDispatch();
    const students = useSelector(state => Object.values(state.students));

    const [ displayGrades, setDisplayGrades ] = useState(false);
    const [ searchStudent, setSearchStudent ] = useState('');
    // const [ ]

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  const updateSearch = (e) => {
    setSearchStudent(e.target.value.substr(0,20));
  }

  const filteredStudents = students.filter(student => {
    const first = student.firstName.toLowerCase().indexOf(searchStudent) !== -1;
    const last = student.lastName.toLowerCase().indexOf(searchStudent) !== -1;
    const full = `${student.firstName.toLowerCase()} ${student.lastName.toLowerCase()}`
    const searchFull = full.indexOf(searchStudent) !== -1;
    return first || last || searchFull;
  })

  const addTagStudents = (studentTags, id) => {
    return Object.assign(students[id], {tags: studentTags })
  }

  return (
    <div className='students'>
        <div className='name-searchbar'>
          <input 
            onChange={updateSearch}
            type="text" 
            id='name-input' 
            placeholder='Search by name'/>
        </div>
        <ul>
          {filteredStudents.map((student, i) => (
              <li key={i}>
                  <Student 
                    student={student} 
                    displayGrades={displayGrades}
                    setDisplayGrades={setDisplayGrades}
                     />
              </li>
          ))}
        </ul>
    </div>
  );

};


export default Students;
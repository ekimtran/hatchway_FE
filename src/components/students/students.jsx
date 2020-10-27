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

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  const updateSearch = (e) => {
    setSearchStudent(e.target.value.substr(0,20));
  }

  return (
    <div className='students'>
        <div className='name-searchbar'>
          <input 
            onChange={updateSearch}
            type="text" 
            id='name-input' 
            placeholder='Search by name'/>
            {console.log(searchStudent)}
        </div>
        <ul>
          {students.map((student, i) => (
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
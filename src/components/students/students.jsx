import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudents } from '../../actions/students_actions';
import './students.scss';

import Student from './student';

const Students = () => {
    const dispatch = useDispatch();

    const students = useSelector(state => Object.values(state.students));

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  return (
    <div className='students'>
        <ul>
          {students.map((student, i) => (
              <li key={i}>
                  <Student student={student} />
              </li>
          ))}
        </ul>
    </div>
  );

};


export default Students;
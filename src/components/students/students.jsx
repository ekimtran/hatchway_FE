import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchStudents } from '../../actions/students_actions';

const Students = () => {
    const dispatch = useDispatch();

    const students = useSelector(state => Object.values(state.students));

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  return (
      <div>{console.log(students)}</div>
  )

};


export default Students;
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudents } from '../../actions/students_actions';
import './students.scss';

import Student from './student';

const Students = () => {
    const dispatch = useDispatch();
    const students = useSelector(state => Object.values(state.students));

    const [ studentsInfo, setStudentInfo ] = useState([]);
    const [ displayGrades, setDisplayGrades ] = useState(false);
    const [ searchStudent, setSearchStudent ] = useState('');

    const [ searchTags, setSearchTags ] = useState('');
    const [ allStudentsTags, setAllTags ] = useState({});

    const addInfo = () => { 
      const data = [];
      students.map((student) => {
        data.push(student);
      })
      console.log(data);
      setStudentInfo(data);
  }


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
    const lowerTags = student.tags.map(tag => tag.toLowerCase());
    const tags = student.tags.indexOf(searchTags) !== -1 ;
    return first || last || searchFull || tags;
  })

  const addTagStudents = (studentTags, id) => {
    const currentTags = Object.assign(allStudentsTags, students);
    console.log(currentTags)
    currentTags[id].tags.push(studentTags)
    setAllTags(currentTags);
  }

  const filteredTags = filteredStudents.filter(student => {
    const tags = student.tags.indexOf(searchTags) !== -1;
    return tags;
  })

  const updateTag = (e) => {
    setSearchTags(e.target.value)
  }

  return (
    <div className='students'>
      <div className='name-searchbar'>
        <input
          onChange={updateSearch}
          type='text'
          id='name-input'
          placeholder='Search by name'
        />
      </div>
      <div className='name-searchbar'>
        <input
          onChange={updateTag}
          type='text'
          id='name-input'
          placeholder='Search by tag'
        />
      </div>
      <ul>
        {filteredStudents.map((student, i) => (
          <li key={i}>
            <Student
              student={student}
              displayGrades={displayGrades}
              setDisplayGrades={setDisplayGrades}
              addTagStudents={addTagStudents}
            />
          </li>
        ))}
      </ul>
    </div>
  );

};


export default Students;
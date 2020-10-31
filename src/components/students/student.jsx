import React, { useState } from "react";
import { MinusIcons, PlusIcons } from "../icons";

const Student = ({ student, addTagStudents }) => {
  const [ displayGrades, setDisplayGrades ] = useState(false);
  const [ studentTags, setStudentTags ] = useState('');

  const { 
    firstName, 
    email, 
    company, 
    skill, 
    grades, 
    pic, 
    lastName,
    id,
    tags
   } = student;

  const avgGrades = () => {
    let sum = 0;
    grades.map((el) => (sum += parseInt(el)));
    return sum / grades.length;
  };

  const addTags = (e) => {
    setStudentTags(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    addTagStudents(studentTags, id-1);
  }


  return (
    <div className='student'>
      <div className='circle'>
        <img src={pic} alt='' />
      </div>
      <div className='student-info'>
        <h2>
          {firstName}&nbsp;{lastName}
        </h2>
        <div>Email: {email}</div>
        <div>Company: {company}</div>
        <div>Skill: {skill}</div>
        <div>Average: {avgGrades()}%</div>
        <div className='grade-list'>
          {displayGrades &&
            grades.map((grade, i) => (
              <div>
                Test {i + 1}: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{grade}%
              </div>
            ))}
        </div>
        <div>
          {tags && tags.map((tag, i) => <li key={i}>{tag}</li>)}
        </div>
        <div>
          {displayGrades && (
            <form onSubmit={handleSubmit}>
              <input onChange={addTags} placeholder='Hello' />
              <button type='submit'>Add Tag</button>
            </form>
          )}
        </div>
      </div>
      <div className='display-icons'>
        {!displayGrades ? (
          <PlusIcons
            displayGrades={displayGrades}
            setDisplayGrades={setDisplayGrades}
          />
        ) : (
          <MinusIcons
            displayGrades={displayGrades}
            setDisplayGrades={setDisplayGrades}
          />
        )}
      </div>
    </div>
  );
};

export default Student;
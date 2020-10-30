import React, { useState, useEffect } from "react";
import { MinusIcons, PlusIcons } from "../icons";

const Student = ({ student }) => {
  const [ displayGrades, setDisplayGrades ] = useState(false);
  const [ studentTags, setTags ] = useState([]);

  const { 
    firstName, 
    email, 
    company, 
    skill, 
    grades, 
    pic, 
    lastName } = student;

  const avgGrades = () => {
    let sum = 0;
    grades.map((el) => (sum += parseInt(el)));
    return sum / grades.length;
  };

  const addTags = (e) => {
    setTags([...studentTags, e.target.value])
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
          {studentTags && 
            studentTags.map((tag, i) => (
              <div>
                {tag}
              </div>
            ))
          }
        </div>
        <div>
          {displayGrades && (
            // <div className='name-searchbar'>
            //   <input
            //     onClick={addTags}
            //     type='text'
            //     id='name-input'
            //     placeholder='Search by name'
            //   />
            // </div>
            <form action=""></form>
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
      {console.log(studentTags)}
    </div>
  );
};

export default Student;
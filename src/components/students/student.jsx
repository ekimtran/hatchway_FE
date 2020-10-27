import React, { useState, useEffect } from "react";
import { MinusIcons, PlusIcons } from "../icons";

const Student = ({ student }) => {
  const [displayGrades, setDisplayGrades] = useState(false);

  const { firstName, email, company, skill, grades, pic } = student;

  const avgGrades = () => {
    let sum = 0;
    grades.map((el) => (sum += parseInt(el)));
    return sum / grades.length;
  };


  return (
    <div className='student'>
      <div className='circle'>
        <img src={pic} alt='' />
      </div>
      <div className='student-info'>
        <h2>{firstName}</h2>
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
      {console.log(displayGrades)}
    </div>
  );
};

export default Student;
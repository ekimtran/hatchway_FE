import React, { useState, useEffect } from "react";

const Student = ({ student }) => {
  const [displayGrades, setDisplayGrades] = useState(true);

  const { firstName, email, company, skill, grades, pic } = student;

  const avgGrades = () => {
    let sum = 0;
    grades.map((el) => (sum += parseInt(el)));
    return sum / grades.length;
  };

  const display = () => {
    // e.preventDefault();
    setDisplayGrades(!displayGrades);
    // setDisplayGrades(!displayGrades);
      // .then(() => setDisplayGrades(!displayGrades));
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
      </div>
      <div className='display-grades'>
        {!displayGrades ? (
          <h2 onClick={display}>
            <i className='fas fa-plus'></i>
          </h2>
        ) : (
          <h2 onClick={display}>
            <i className='fas fa-minus'></i>
          </h2>
        )}
      </div>
      {console.log(displayGrades)}
    </div>
  );
};

export default Student;
import React, { useState, useEffect } from "react";

const Student = ({student}) => {

    const [displayGrades, setDisplayGrades] = useState(false);

    const { firstName, email, company, skill, grades, pic } = student;

    const avgGrades = () => {
        let sum = 0;
        grades.map(el => sum += parseInt(el));
        return sum / grades.length;
    }

    const showGrades = (e) => {
        e.preventDefault();
        setDisplayGrades(true);
    }

    const closeGrades = (e) => {
        e.preventDefault();
        setDisplayGrades(false);
    }
    
    return (
        <div className='student'>
            <div className='circle'>
                <img src={pic} alt=""/>
            </div>
            <div className='student-info'>
                <h2>{firstName}</h2>
                <div>Email: {email}</div>
                <div>Company: {company}</div>
                <div>Skill: {skill}</div>
                 <div>Average: {avgGrades()}%</div>
            </div>
        </div>
    )
};

export default Student;
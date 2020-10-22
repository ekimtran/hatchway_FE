import React from 'react';

const Student = ({student}) => {

    const { firstName, email, company, skill, grades, pic } = student;

    const avgGrades = () => {
        let sum = 0;
        grades.map(el => sum += parseInt(el));
        return sum / grades.length;
    }
    
    return (
        <div className='student'>
            <img src={pic} alt=""/>
            <div className='student-info'>
                <h2>{firstName}</h2>
                <div>{email}</div>
                <div>{company}</div>
                <div>{skill}</div>
                <div>{grades[0]}</div>
    <div>{avgGrades()}</div>
            </div>
        </div>
    )
};

export default Student;
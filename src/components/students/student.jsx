import React from 'react';

const Student = ({student}) => {

    const { firstName, email, company, skill, grades, pic } = student;


    return (
        <div className='student'>
            <img src={pic} alt=""/>
            <div className='student-info'>
                <h2>{firstName}</h2>
            </div>
        </div>
    )
};

export default Student;
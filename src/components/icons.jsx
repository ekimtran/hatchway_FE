import React from 'react';

const PlusIcons = ({ displayGrades, setDisplayGrades }) => {
    const closeData = () => {
        setDisplayGrades(!displayGrades);
    };

    return (
      <div className='expand-btn' onClick={closeData}>
        <i className='fas fa-plus'></i>
      </div>
    );
};


const MinusIcons = ({ displayGrades, setDisplayGrades }) => {
    const openData = () => {
      setDisplayGrades(!displayGrades);
    };

    return (
      <div onClick={openData} className='expand-btn'>
        <i className='fas fa-minus'></i>
      </div>
    );
};





export { MinusIcons, PlusIcons };
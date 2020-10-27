import React from 'react';

const MinusIcons = ({ displayGrades, setDisplayGrades }) => {
    const closeData = () => {
        setDisplayGrades(!displayGrades);
    };

    return (
      <div onClick={closeData}>
        <i className='fas fa-plus'></i>
      </div>
    );
};


const PlusIcons = ({ displayGrades, setDisplayGrades }) => {
    const openData = () => {
      setDisplayGrades(!displayGrades);
    };

    return (
      <div onClick={openData}>
        <i className='fas fa-minus'></i>
      </div>
    );
};





export { MinusIcons, PlusIcons };
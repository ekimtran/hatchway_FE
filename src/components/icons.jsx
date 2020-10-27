import React from 'react';

const PlusIcons = ({ displayGrades, setDisplayGrades }) => {
    const closeData = () => {
        setDisplayGrades(!displayGrades);
    };

    return (
      <div onClick={closeData}>
        <i className='fas fa-plus'></i>
      </div>
    );
};


const MinusIcons = ({ displayGrades, setDisplayGrades }) => {
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
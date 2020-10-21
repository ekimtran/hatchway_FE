import React, { useState, useEffect } from "react";
import Axios from 'axios';

const Students = () => {

    useEffect(() => {
        axios({
          method: "GET",
          url: "https://www.hatchways.io/api/assessment/students",
        })
            .then(student => console.log(student))
        ;
    }, []);

    return(
        
    )


};


export default Students;
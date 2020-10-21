import axios from 'axios';

export const fetchAllStudents = () => {
  return axios.get("https://api.hatchways.io/assessment/students");
};

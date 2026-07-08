import React from "react";

interface StudentProps {
  name: string;
  age: number;
  course: string;
}

const Student: React.FC<StudentProps> = ({ name, age, course }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
    </div>
  );
};

export default Student;

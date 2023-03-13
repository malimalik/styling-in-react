import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import styled from "styled-components";

//
//
// The course input contains a form:
// The form contains input with the label course goal
// it contains a button called 'Add Goal'
// we need to handle what happens when the input value changes, we need to handle the entered value

const CourseInput = (props) => {
  const [courseGoal, setCourseGoal] = useState("");
  const [isValid, setIsValid] = useState(true);
  const error = "Invalid Input!";
  const message = "Course goal cannot be empty!";

  const FormControl = styled.div`
    .form-control {
      margin: 0.5rem 0;
    }

    & label {
      font-weight: bold;
      display: block;
      margin-bottom: 0.5rem;
    }

    & input {
      display: block;
      width: 100%;
      border: 1px solid #ccc;
      font: inherit;
      line-height: 1.5rem;
      padding: 0 0.25rem;
    }

    &input:focus {
      outline: none;
      background: #fad0ec;
      border-color: #8b005d;
    }

    &.invalid input {
      border-color: red;
      background-color: #ffd7d7;
    }

    &.invalid label {
      color: red;
    }
  `;

  const handleCourseInputSubmission = (event) => {
    event.preventDefault();
    if (courseGoal.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(courseGoal);
  };

  const handleCourseInput = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    event.preventDefault();
    setCourseGoal(event.target.value);
  };

  const dismissErrorModal = () => {
    setIsValid(true);
  };

  return (
    <div>
      {!isValid && (
        <ErrorModal
          dismissModal={dismissErrorModal}
          title={error}
          message={message}
        ></ErrorModal>
      )}
      <form onSubmit={handleCourseInputSubmission}>
        {/* the className is dynamic, changes based on the value of isValid */}
        <FormControl className={!isValid && "invalid"}>
          <label
            htmlFor="course-goal"
            style={{
              color: !isValid ? "red" : "black",
            }}
          >
            Course Goal
          </label>
          <input
            type="text"
            id="course-goal"
            onChange={handleCourseInput}
          ></input>
        </FormControl>
        <Button type="submit">Add Course Goal</Button>
      </form>
    </div>
  );
};

export default CourseInput;

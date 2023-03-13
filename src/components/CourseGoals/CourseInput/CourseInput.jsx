import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

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
        <div className={`form-control ${!isValid ? "invalid" : ""}`}>
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
        </div>
        <Button type="submit">Add Course Goal</Button>
      </form>
    </div>
  );
};

export default CourseInput;

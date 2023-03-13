import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import "./CourseGoalList.css";

/**
 *
 * @param {*} props
 * @return a list that is contained with coursegoal items.
 * The CourseGoalItem is our list
 */
const CourseGoalList = (props) => {
  // we want to take each individual goal-item and map it to a list
  // i want to return a <ul>
  return (
    <ul className="goal-list">
      {props.items.map((goal) => {
        return (
          <CourseGoalItem
            key={goal.id}
            id={goal.id}
            onDelete={props.onDeleteItem}
          >
            {goal.text}
          </CourseGoalItem>
        );
      })}
    </ul>
  );
};

export default CourseGoalList;

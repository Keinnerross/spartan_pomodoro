import "../../stylesheets/habits/habits.css";
import React, { useState, useRef } from "react";
const Habit = ({
  habitTitle,
  habitDescription,
  idHabit,
  inputChange,
  delHabit,
}) => {
  const [habitCompleted, setHabitCompleted] = useState(0);
  const [editActive, setEditActive] = useState(false);
  const [editInput, setEditInput] = useState(false);
  const plusHabit = () => {
    setHabitCompleted(habitCompleted + 1);
  };
  return (
    <div className="margin-habits-container">
      <div className="habit-container">
        <div
          className="habit-edit-container"
          onMouseLeave={() => {
            setEditInput(false);
            setEditActive(false);
          }}
        >
          <div className={editActive ? "edit-habit-card" : "hidden"}>
            <div className="edit-habit-section">
              <div className="edit-habit-header">
                <h4>Manage task</h4>
                <hr />
              </div>
              <ul className={editInput ? "hidden" : "setting-habit-list"}>
                <li onClick={() => setEditInput(true)}>Edit Title</li>
                <li>Edit Description</li>
                <li>Create a Duplicate</li>
                <li onClick={() => delHabit(idHabit)}>Delete Habit</li>
              </ul>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setEditActive(false);
                }}
                className={editInput ? "habit-input-section" : "hidden"}
              >
                <input
                  className="edit-habit-input"
                  type="text"
                  onChange={(e) => inputChange(e.target.value, idHabit)}
                  defaultValue={habitTitle}
                />
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    setEditActive(false);
                  }}
                  className="done-button"
                >
                  Done
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="habit-section">
          <div className="description-habit-container">
            <div className="img-habit"></div>
            <div className="text-habit-container">
              <span className="title-habit">{habitTitle}</span>
              <span className="description-habit">{habitDescription}</span>
            </div>
          </div>
          <div className="controls-container">
            <span className="setting-habit" onClick={() => setEditActive(true)}>
              ...
            </span>
            <div className="button-habit-plus">
              <span
                onClick={() => {
                  plusHabit();
                }}
              >
                +
              </span>
            </div>
            <div className="counter-habit-plus">{`++${habitCompleted}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habit;

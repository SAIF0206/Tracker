import React from "react";
import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.completed ? "reminder" : {}}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.title}{" "}
        {task.completed && (
          <FaTimes
            style={{ cursor: "pointer", color: "red" }}
            onClick={() => onDelete(task.id)}
          />
        )}
      </h3>
    </div>
  );
};

export default Task;

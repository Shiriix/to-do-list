import React from "react";
import { ITask } from "../interfaces";

interface Props {
  task: ITask;
  completeTask(deletedTask: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="task__content">
        <span className="task__item">{task.taskName}</span>
        <span className="task__item">{task.deadline}</span>
      </div>
      <button
        className="task__button"
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;

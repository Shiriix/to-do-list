import React, { ChangeEvent, FC, useState } from "react";
import "./App.scss";
import { ITask } from "./interfaces";
import TodoTask from "./Components/TodoTask";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todolist, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todolist, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (deletedTask: string): void => {
    setTodoList(
      todolist.filter((task) => {
        return task.taskName != deletedTask;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="header__inputContainer">
          <input
            className="header__input"
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            className="header__input"
            type="number"
            placeholder="Deadline "
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button className="header__button" onClick={addTask}>
          {" "}
          Add Task{" "}
        </button>
      </div>
      <div className="todolist">
        {todolist.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;

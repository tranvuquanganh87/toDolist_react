import Task from "./Task"
import { useState } from "react"

const Tasks = ({ tasks, onDelete, onToggle, onActive, onCompleted }) => {
  const [status, setstatus] = useState("All")

  return (
    <div className="todo-items-wrapper">
      <div id="abc" className="todo-items">
        {tasks
          .filter(
            (task) =>
              (status === "Active" && task.reminder === false) ||
              (status === "Completed" && task.reminder === true) ||
              status === "All"
          )
          .map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))}
        <div className="todo-items-info">
          <div className="items-left">
            {tasks.filter((task) => task.reminder === false).length} tasks left
          </div>
          <div className="item-statuses">
            <span
              className={status === "All" ? "Active" : " "}
              onClick={() => setstatus("All")}
              data-status="All"
            >
              {" "}
              All
            </span>
            <span
              className={status === "Active" ? "Active" : " "}
              onClick={() => setstatus("Active")}
              data-status="Active "
            >
              {" "}
              Active{" "}
            </span>
            <span
              className={status === "Completed" ? "Active" : " "}
              onClick={() => setstatus("Completed")}
              data-status="Completed"
            >
              Completed
            </span>
          </div>
          <div>
            <div className="items-clear" onClick={() => onDelete(tasks.id)}>
              <span>Clear Completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Tasks

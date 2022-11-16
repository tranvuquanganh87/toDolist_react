const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className="todo-item"
      data-id="0.5677079143360535"
      onClick={() => onToggle(task.id)}
    >
      <div className="check">
        <div
          className={`check-marker ${task.reminder ? "completed-tasks" : ""}`}
        >
          <img src="./image/icon-check.svg" alt="0.5677079143360535" />
        </div>
      </div>
      <div className="todo-text">{task.content}</div>
    </div>
  )
}
export default Task

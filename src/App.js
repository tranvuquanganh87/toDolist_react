import { useState } from "react"
import Header from "./component/Header"
import "./App.css"
import Tasks from "./component/Tasks"
import AddTask from "./component/AddTask"
function App() {
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.reminder === false))
  }
  const [tasks, setTasks] = useState([])
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }
  const addTask = (task) => {
    setTasks([...tasks, task])
  }
  const completedTasks = (id) => {
    setTasks(tasks.filter(({ reminder }) => reminder))
  }
  const ActiveTasks = (id) => {
    setTasks(tasks.filter((task) => task.reminder === false))
  }
  return (
    <>
      <div className="background-img">
        <img src="./image/bg-desktop-dark.jpg" alt="personal" />
      </div>
      <div className="container">
        <Header />
        <AddTask onAdd={addTask} />
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
          onCompleted={completedTasks}
          onActive={ActiveTasks}
        />
      </div>
    </>
  )
}
export default App

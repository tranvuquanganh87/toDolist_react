import { useState } from "react"
const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      alert("Please add the Tasks")
      return
    }
    onAdd({
      content: text,
      id: Math.random(),
      reminder: false,
      state: "Active",
    })
    setText("")
  }
  return (
    <div className="new-toDo">
      <div className="check">
        <div className="check-marker"></div>
      </div>
      <div className="new-toDo-input">
        <form onSubmit={onSubmit}>
          <input
            id="todo-input"
            type="text"
            placeholder="Create a new toDOthings..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
      </div>
    </div>
  )
}
export default AddTask

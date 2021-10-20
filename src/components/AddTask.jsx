import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Please add a title");
      return;
    }

    onAdd({ title, completed });
    setTitle("");
    setCompleted(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Title</label>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>
      <div className="form-control form-control-check">
        <label>Completed</label>
        <input
          type="checkbox"
          checked={completed}
          value={completed}
          onChange={(e) => setCompleted(e.currentTarget.checked)}
        ></input>
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;

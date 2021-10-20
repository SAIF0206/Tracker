import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask.jsx";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const apiData = await fetchData();
      setTasks(apiData);
    };
    getData();
  }, []);

  //Fetch Data
  const fetchData = async () => {
    const res = await axios("https://jsonplaceholder.typicode.com/todos", {
      params: {
        _limit: 10,
      },
    });
    return res.data;
  };

  //Delete Task
  const deleteTask = async (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  };

  //Toggle Completed

  const toggleCompleted = async (id) => {
    const res = await axios(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const updTask = { ...res.data, completed: !res.data.completed };
    const updatedData = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      updTask
    );
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: updatedData.data.completed }
          : task
      )
    );
  };

  //Form Submit
  const addTask = async (task) => {
    const restask = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      task
    );
    const newData = restask.data;
    setTasks([...tasks, newData]);
  };

  //Toggle Add Button
  const clickAdd = () => {
    setShowAdd(!showAdd);
  };

  return (
    <div className="container">
      <Header title="Task Tracker" onClickAdd={clickAdd} onShow={showAdd} />
      {showAdd && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleCompleted} />
      ) : (
        <h6>No Tasks</h6>
      )}
      <Footer />
    </div>
  );
}

export default App;

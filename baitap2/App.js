import React, { useState } from "react";

function Task({ name }) {
  return <li>{name}</li>;
}

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!input.trim()) return; 
    setTasks(prev => [...prev, input.trim()]);
    setInput("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>Danh sách công việc</h3>
      <input
        type="text"
        placeholder="Nhập công việc"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask} style={{ marginLeft: 10 }}>
        Thêm
      </button>

      <ul>
        {tasks.map((task, idx) => (
          <Task key={idx} name={task} />
        ))}
      </ul>
    </div>
  );
}

export default App;

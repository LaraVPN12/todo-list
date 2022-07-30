import { useState } from 'react';
import { Form, Task, TaskData } from './components';

function App() {
  const [tasks, setTasks] = useState<Array<TaskData>>([]);



  return (
    <div className="flex flex-col justify-center items-center bg-pink-50 h-screen">
      <div className="bg-white shadow-md w-3/6 rounded-tr-lg rounded-tl-lg">
        <div className="flex justify-between mt-5">
          <div className="flex justify-start">
            <p className="border-b border-b-gray-200 p-3">Tareas</p>
          </div>
          <div className="flex justify-end">
            <select>
              <option value="">Todas</option>
              <option value="">Pendientes</option>
              <option value="">Completadas</option>
            </select>
          </div>
        </div>
        <div className="p-3">
          {tasks.map((task, index) => (
            <Task
              key={`task-${task.id}`}
              task={task}
              toggleComplete={() => {
                tasks[index].completed = !tasks[index].completed;
                setTasks([...tasks]);
              }}
            />
          ))}
        </div>
      </div>
      <Form setTasks={setTasks} tasks={tasks} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Task from './Task'


function TaskList(props) {
  const [tasks, setTasks] = useState(props.tasks)

  function handleDelete(taskId) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };


  return (
    <div className="tasks">
      {tasks.map((task, index) => {
        return (
          <Task key={index} text={task.text} handleClick={event => handleDelete(event, index)} />

        )


      })}

    </div>
  )

}

export default TaskList;

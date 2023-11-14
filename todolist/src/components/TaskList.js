import React from 'react'
import TaskShow from './TaskShow'

const TaskList = ({tasks , onDelete , onUpdate}) => {

  return (
    <div className='task-list2'>
      
      {tasks.map((task,index)=>{
        return(
            <TaskShow onDelete={onDelete} key={index} task={task}  onUpdate={onUpdate}/>
        )
      })}


    </div>
  )
}

export default TaskList

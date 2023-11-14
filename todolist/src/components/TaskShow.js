import React from 'react';
import { useState } from 'react';
import TaskCreate from './TaskCreate';



const TaskShow = ({task,onDelete,onUpdate}) => {

const [showEdit, setshowEdit] = useState(false);

  const handleDeleteClick = ()=>{
onDelete(task.id);
  };

  // burası not alınacak
  const handleEditClick = ()=>{ 
setshowEdit(!showEdit);
  }
  // not bitiş

const handleSubmit = (id,updatedTitle,updatedTaskDesc)=>{
  setshowEdit(false);
  onUpdate(id,updatedTitle,updatedTaskDesc);
}

  return (

  
    <div className='task-show' >
       {showEdit? <TaskCreate onUpdate={handleSubmit} task={task} taskFormUpdate={true} />
       :<div> <h3 className='task-title'>Göreviniz</h3>
    <p>{task.title}</p>
    <h3 className='task-title' >Yapılacaklar</h3>
    <p>{task.taskDesc}</p>
    <div>
      <button onClick={handleDeleteClick} className='sil-buton' >Sil</button>
      <button onClick={handleEditClick} className='güncelle-buton' >Güncelle</button>
    </div> </div>}
    </div>
   
  )
}

export default TaskShow

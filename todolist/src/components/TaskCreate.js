import React, { useState } from 'react'

const TaskCreate = ({onCreate,task,taskFormUpdate,onUpdate}) => {
    const [title, setTitle] = useState(task ? task.title : "");
    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "")

const handleChange=(event)=>{
setTitle(event.target.value)
}
const handleTaskChange = (event)=>{
    setTaskDesc(event.target.value)
}

const handleSubmit = (event)=>{
event.preventDefault();
if(taskFormUpdate){
  onUpdate(task.id,title,taskDesc)
}else{
  onCreate(title,taskDesc);
}

setTitle('');
setTaskDesc('');

}

  return (
<div>{taskFormUpdate? <div className='task-update'>
      <h3>Lütfen Task Güncelleyiniz</h3>
      <form className='task-list'>
        <label className='task-label'> Başlığı Düzenleyiniz </label>
        <input value={title} onChange={handleChange} className='task-input' />
        <label className='task-label'> Task Düzenleyiniz </label>
        <textarea value={taskDesc} onChange={handleTaskChange} className='task-input' rows={7} />
        <button onClick={handleSubmit} className='task-button update-button' >Düzenle !</button>
      </form>
    </div>: <div className='task-create'>
      <h3>Lütfen Task Ekleyiniz</h3>
      <form className='task-list'>
        <label className='task-label'> Başlık </label>
        <input value={title} onChange={handleChange} className='task-input' />
        <label className='task-label'> Task Giriniz </label>
        <textarea value={taskDesc} onChange={handleTaskChange} className='task-input' rows={7} />
        <button onClick={handleSubmit} className='task-button' >Oluştur</button>
      </form>
    </div>}</div>

   
  )
}

export default TaskCreate

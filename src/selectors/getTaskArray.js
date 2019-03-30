import React from 'react';
import Task from '../containers/Task/Task';

export const getTaskArray = (tasks, listId) => (
  tasks.map(task => 
    <Task 
      key={task.id} 
      text={task.text} 
      id={task.id} 
      listId={listId} 
    />
  )
)

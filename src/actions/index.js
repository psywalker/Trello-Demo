import uuidv4 from 'uuid/v4';

export const addList = text => ({
  type: 'ADD_LIST',
  id: uuidv4(),
  text,
})

export const removeList = id => ({
  type: 'REMOVE_LIST',
  id: id,
})

export const addTask = (id, text) => ({
  type: 'ADD_TASK',
  listId: id,
  nextTaskId: uuidv4(),
  text,
})

export const removeTask = (taskId, listId) => ({
  type: 'REMOVE_TASK',
  taskId,
  listId,
})
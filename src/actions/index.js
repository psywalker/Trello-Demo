let nextListId = 3

export const addList = text => ({
  type: 'ADD_LIST',
  id: nextListId++,
  text
})

export const removeList = id => ({
  type: 'REMOVE_LIST',
  id: id,
})

export const addTask = (id, text) => ({
  type: 'ADD_TASK',
  listId: id,
  text
})

export const removeTask = (taskId, listId) => ({
  type: 'REMOVE_TASK',
  taskId,
  listId
})
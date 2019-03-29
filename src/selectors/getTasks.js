import pick from 'lodash/pick'

export const getTasks = ({lists, tasks}, {listId}) => {
  const {name, tasksId} = lists[listId];
  const newTasks = Object.values(pick(tasks, tasksId));

  return { tasks: newTasks, name, listId }
}
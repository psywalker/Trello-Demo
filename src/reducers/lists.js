
import omit from 'lodash/omit'
const lists = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return {
        ...state,
        [action.id]: {
          id: action.id,
          name: action.text,
          tasksId: [],
        },
      };
    case 'REMOVE_LIST':
      const removeListId = action.id;
      return omit(state, [removeListId]);
    case 'ADD_TASK':

      let list = state[action.listId];
      const tasksId = [ ...list.tasksId, action.nextTaskId ];
      return {
        ...state,
        [action.listId]: { ...list, tasksId },
      };

    case 'REMOVE_TASK':
      let removeList = state[action.listId];
      const newListTasksId = removeList.tasksId.filter(task => task !== action.taskId)

      return {
        ...state,
        [action.listId]: { ...removeList, tasksId: newListTasksId },
      };

    default:
      return state;
  }
};

export default lists;

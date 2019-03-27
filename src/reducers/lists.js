
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
      //return state.filter(list => list.id !== action.id);
      return Object.entries(state).reduce((obj, [key, value]) => { 
        if(key != action.id) obj[key] = state[key];
        return obj;
      }, {})
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

      /*return state.map(list =>
        (list.id === action.listId) 
        ? {...list, tasksId: list.tasksId.filter(task => task !== action.taskId)} 
        : list                                                                                                             
      )*/

    default:
      return state;
  }
};

export default lists;

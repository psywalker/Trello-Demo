let counterTaskId = 6;
const lists = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return [
        ...state,
        {
          id: action.id,
          name: action.text,
          tasksId: [],
        }
      ];
    case 'REMOVE_LIST':
      return state.filter(list => list.id !== action.id);
    case 'ADD_TASK':

      return state.map(list =>
        (list.id === action.listId) 
        ? {...list, tasksId: [...list.tasksId, counterTaskId++]} 
        : list                                                                                                             
      )
    case 'REMOVE_TASK':
      return state.map(list =>
        (list.id === action.listId) 
        ? {...list, tasksId: list.tasksId.filter(task => task !== action.taskId)} 
        : list                                                                                                             
      )
    default:
      return state;
  }
};

export default lists;
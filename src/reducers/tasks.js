
const tasks = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TASK':
        /*return [
          ...state,
          {
            id: action.nextTaskId,
            text: action.text,
          }
        ];*/

        return {
          ...state,
          [action.nextTaskId]: {
            id: action.nextTaskId,
            text: action.text,
          }
        };
      case 'REMOVE_TASK':
        /*return state.filter(
            task => task.id !== action.taskId
        );*/

        return Object.entries(state).reduce((obj, [key, value]) => { 
          if(key !== action.taskId) obj[key] = state[key];
          return state;
        }, {})

      default:
        return state;
    }
  };
  
  export default tasks;
  

import { omit } from 'lodash'
const tasks = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          [action.nextTaskId]: {
            id: action.nextTaskId,
            text: action.text,
          }
        };
      case 'REMOVE_TASK':
        return omit(state, [action.taskId]);
      default:
        return state;
    }
  };
  
  export default tasks;
  
import omit from 'lodash/omit'
import { 
  ADD_TASK, 
  REMOVE_TASK
} from '../actionTypes/acttionTypes'

const tasks = (state = [], action) => {
    switch (action.type) {
      case ADD_TASK:
        return {
          ...state,
          [action.nextTaskId]: {
            id: action.nextTaskId,
            text: action.text,
          }
        };
      case REMOVE_TASK:
        const removeTaskId = action.id;
        return omit(state, [removeTaskId]);
      default:
        return state;
    }
  };
  
  export default tasks;
  
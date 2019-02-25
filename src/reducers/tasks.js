let counterTaskId = 6;
const tasks = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return [
          ...state,
          {
            id: counterTaskId++,
            text: action.text,
          }
        ];
      case 'REMOVE_TASK':
        return state.filter(
            task => task.id !== action.taskId 
        );
      default:
        return state;
    }
  };
  
  export default tasks;
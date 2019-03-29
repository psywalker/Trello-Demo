import get from 'lodash/get'

export const getDataTask = (state, ownProps) => {
  const taskId = get(ownProps, ['match', 'params', 'id']) || ownProps.id;
  const taskText = get(state, ['tasks', `${taskId}`, 'text']);

  return { 
    id: taskId, 
    text: taskText
  };
}
import { combineReducers } from 'redux';
import lists from './lists'
import tasks from './tasks'

const BoardsObj = combineReducers({
  lists,
  tasks,
});

export default BoardsObj;

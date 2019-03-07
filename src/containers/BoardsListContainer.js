import { connect } from 'react-redux';
import BoardsList from '../components/BoardsList/BoardsList';
import { removeList } from '../actions';
import { addTask } from '../actions';

const mapStateToProps = (state, ownProps) => 
{
  const list = state.lists.filter((list, i) => {
    return ownProps.listId === list.id;
  })

  const name = list[0].name;
  const listsIds = list[0].tasksId;
  const listId = list[0].id;
  const tasksArr = state.tasks;
  const tasks = listsIds.map(id => {
    for(let i = 0; i < tasksArr.length; i++) {
      if(id === tasksArr[i].id) return tasksArr[i];
    }
    return false;
  })

  return { tasks, name, listId };
    
}

const mapDispatchToProps = (dispatch) => ({
  removeList: id => dispatch(removeList(id)),
  addTask: (id, text) => dispatch(addTask(id, text)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardsList)

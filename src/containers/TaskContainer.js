import { connect } from 'react-redux';
import Task from '../components/Task/Task';
import { removeTask } from '../actions';

const mapStateToProps = (state, ownProps) => 
{
  return { 
    id: ownProps.id, 
    text: ownProps.text, 
    listId: ownProps.listId,
  };
    
}

const mapDispatchToProps = (dispatch) => ({
  removeTask: (taskId, listId) => dispatch(removeTask(taskId, listId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task)

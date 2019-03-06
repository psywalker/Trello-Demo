import { connect } from 'react-redux';
import Boards from '../components/Boards/Boards';
import { addList } from '../actions';

const mapStateToProps = (state) => 
{
  return { lists: state.lists };
}

const mapDispatchToProps = (dispatch) => ({
  addList: text => dispatch(addList(text)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Boards)

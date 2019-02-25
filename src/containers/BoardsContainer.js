import { connect } from 'react-redux'
import Boards from '../components/Boards/Boards'
import { addList } from '../actions'

const mapStateToProps = (state, ownProps) => 
{
  return { lists: state.lists }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addList: text => dispatch(addList(text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Boards)

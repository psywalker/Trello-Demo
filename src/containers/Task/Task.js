import React, { Component } from 'react';
import ClickOutside from 'react-click-outside';
import _ from 'lodash';
import { connect } from 'react-redux';
import { removeTask } from '../../actions';
import './styles.scss';

class Task extends Component {

  constructor(props) {
    super(props);
    this.state = {
      taskEditBtnShow: false,
    }

    this.taskContainer = React.createRef();
    this.taskMenuWrapper = React.createRef();
    this.taskMenuTextArea = React.createRef();
    
  } 

  componentDidUpdate() {
    if (!this.taskMenuTextArea.current && !this.taskMenuWrapper.current) return;
    this.taskMenuTextArea.current.focus();
    const top = this.taskContainer.current.getBoundingClientRect().y;
    this.taskMenuWrapper.current.style.top = top + 'px';
  }
  taskMenuHide = () => {
    this.setState({ taskEditBtnShow: false });
  };

  taskMenuToggle = () => {
    const { taskEditBtnShow } = this.state;
    this.setState({ taskEditBtnShow: !taskEditBtnShow });
  };
  
  handleEditTask = (e) => {
    e.preventDefault();
  };

  handleRemoveTask = (e) => {
    e.preventDefault();
    const { id, listId, removeTask } = this.props;

    removeTask(id, listId);
    this.taskMenuHide();
  };
  render() {

    const { id, text } = this.props;
    const { taskEditBtnShow } = this.state;

    let isTaskEditBtnShow = taskEditBtnShow ? 'task__edit-btn task__edit-btn_show' : 'task__edit-btn ';

    return (
      <div className="task" ref={this.taskContainer}>
        <button 
          className={isTaskEditBtnShow} 
          onClick={this.taskMenuToggle}
        >
          <span>
            <i className="fas fa-pen" />
          </span>
        </button>
        
        <h2 className="task__title">{id}: {text}</h2>

        <ClickOutside 
          className="clickOutSide" 
          onClickOutside={this.taskMenuHide}
        >
          {taskEditBtnShow && (
            <div 
              className="task-menu-wrapper" 
              ref={this.taskMenuWrapper}
            >

              <div 
                className="task-menu-wrapper__fade" 
                onClick={this.taskMenuToggle} 
              />

              <div className="task-menu-wrapper__inner">

                <form action="#" className="task-menu-fields">
                  <textarea 
                    className="task-menu-fields__textarea" 
                    ref={this.taskMenuTextArea} 
                  />
                  <button 
                    className="task-menu-fields__btn" 
                    onClick={this.handleEditTask}
                  >
                    Сохранить
                  </button>
                </form>

                <ul className="task-menu">
                  <li className="task-menu__item">
                    <button className="task-menu__btn" onClick={this.handleRemoveTask}>
                      <i className="far fa-file-archive" />
                      Архивировать
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </ClickOutside>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => 
{
  const taskId = _.get(ownProps, ['match', 'params', 'id']) || ownProps.id;
  const taskText = _.get(state, ['tasks', `${taskId-1}`, 'text']);

  return { 
    id: taskId, 
    text: taskText
  };
    
}

const mapDispatchToProps = (dispatch) => ({
  removeTask: (taskId, listId) => dispatch(removeTask(taskId, listId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task)

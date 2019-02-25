import React, { Component } from 'react';
import ClickOutside from 'react-click-outside';
import './tasks.scss';

class Task extends Component {

  constructor(props) {
    super(props);
    this.state = {
      taskEditBtnShow: false,
    }
  } 

  componentDidUpdate() {
    if (!this.taskTextArea && !this.taskMenuWrapper) return;
    this.taskTextArea.focus();
    const top = this.taskRef.getBoundingClientRect().y;
    this.taskMenuWrapper.style.top = top + 'px';
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

    removeTask(id, listId)
  };
  render() {

    const { id, text } = this.props;
    const { taskEditBtnShow } = this.state;
    return (
      <div className="task" ref={el => this.taskRef = el}>
        <button className={'task__edit-btn ' + (taskEditBtnShow ? 'task__edit-btn_show' : '')} onClick={this.taskMenuToggle}>
          <span><i className="fas fa-pen"></i></span>
        </button>
        
        <h2 className="task__title">{id}: {text}</h2>

        <ClickOutside className="clickOutSide" onClickOutside={this.taskMenuHide}>
          { taskEditBtnShow && (<div className="task-menu-wrapper" ref={el => this.taskMenuWrapper = el}>

            <div className="task-menu-wrapper__fade" onClick={this.taskMenuToggle}></div>

            <div className="task-menu-wrapper__inner">

              <form action="#" className="task-menu-fields">
                <textarea className="task-menu-fields__textarea" ref={el => this.taskTextArea = el}></textarea>
                <button className="task-menu-fields__btn" onClick={this.handleEditTask}>Сохранить</button>
              </form>

              <ul className="task-menu">
                <li className="task-menu__item">
                  <button className="task-menu__btn" onClick={(e) => {
                      this.handleRemoveTask(e);
                      this.taskMenuHide();
                    }}>
                    <i className="far fa-file-archive"></i>
                    Архивировать
                  </button>
                </li>
              </ul>

            </div>
          </div>)}
        </ClickOutside>
      </div>
    );
  }
}

export default Task;
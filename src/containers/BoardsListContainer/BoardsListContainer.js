import React, { Component } from 'react';
import ClickOutside from 'react-click-outside';
import { connect } from 'react-redux';
import TaskContainer from '../../containers/TaskContainer/TaskContainer';
import { removeList } from '../../actions';
import { addTask } from '../../actions';
import './styles.scss';
import '../TaskContainer/styles.scss';

class BoardsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      boardMenuShow: false,
      addTaskFormShow: false,
    }

    this.addTaskTextArea = React.createRef();

  }
  componentDidUpdate() {
    if (!this.addTaskTextArea.current) return;
    this.addTaskTextArea.current.focus();
  }
  boardMenuHide = () => {
    this.setState({ boardMenuShow: false });
  };

  boardMenuToggle = () => {
    const { boardMenuShow } = this.state;
    this.setState({ boardMenuShow: !boardMenuShow });
  };

  addTaskFormHide = (e) => {
    e.preventDefault();
    this.setState({ addTaskFormShow: false });
  };

  addTaskFormToggle = () => {
    const { addTaskFormShow } = this.state;
    this.setState({ addTaskFormShow: !addTaskFormShow });
  };

  handleKeyPressAddTask = (e) => {
    const { listId, addTask } = this.props;

    if (e.key === 'Enter') {
      e.preventDefault();
      addTask(listId, this.addTaskTextArea.current.value);
      this.setState({ addTaskFormShow: false });
    }
  };

  handleRemoveList = (e) => {
    const {listId, removeList } = this.props;
    e.preventDefault();
    removeList(listId);
  }

  handleAddTask = (e) => {
    const {listId, addTask } = this.props;
    this.addTaskFormHide(e);
    addTask(listId, this.addTaskTextArea.value);
  }

  render() {

    const {
      name,
      tasks,
      listId,
    } = this.props;

    const { boardMenuShow, addTaskFormShow } = this.state;
    let boardMenuShowOpen = boardMenuShow ? 'board__menu-toggle board__menu-toggle_open' : 'board__menu-toggle ';

    return (
      <div className="board boards__item">
        <ClickOutside
          className="clickOutSide"
          onClickOutside={this.boardMenuHide}
        >
          <button 
            className={boardMenuShowOpen} 
            onClick={this.boardMenuToggle}
          >
            <span>...</span>
          </button>

          {boardMenuShow && (
            <div className="board-menu-wrapper">
              <button 
                className="board-menu-wrapper__close" 
                onClick={this.boardMenuToggle}
              >
                ✕
              </button>
              <h2 className="board-menu-wrapper__title">Действие со списком</h2>

              <ul className="board-menu">
                <li className="board-menu__item">
                  <button 
                    type="button" 
                    className="board-menu__link" 
                    onClick={this.handleRemoveList}
                  >
                    Архивировать список
                  </button>
                </li>
              </ul>
            </div>
          )}
        </ClickOutside>
        <h2 className="board__title">{name}</h2>

        <div className="tasks tasks-wrapper">
          <div className="tasks-wrapper__inner">
            {tasks.map(task => {
              return <TaskContainer 
                key={task.id} 
                text={task.text} 
                id={task.id} 
                listId={listId} 
              />
            })}
          </div>
        </div>

        <div className="task-adding">
          <ClickOutside 
            className="clickOutSide" 
            onClickOutside={this.addTaskFormHide}
          >
            {!addTaskFormShow && (
              <button 
                className="task-adding__btn" 
                onClick={this.addTaskFormToggle}
              >
                <span className="task-adding__btn_plus">+</span> 
                <span className="task-adding__btn_text">Добавьте ещё одну карточку</span>
              </button>
            )}

            {addTaskFormShow && (
              <form action="#" className="task-adding-form">
                <textarea 
                  onKeyPress={this.handleKeyPressAddTask} 
                  ref={this.addTaskTextArea} 
                  className="task-adding-form__input" 
                  placeholder="Ввести заголовок для этой карточки"
                />
                <button 
                  className="task-adding-form__btn_add" 
                  onClick={this.handleAddTask} 
                >
                  Добавьте карточку
                </button>
                <button 
                  className="task-adding-form__btn_close" 
                  onClick={this.addTaskFormToggle}
                >
                  ✖
                </button>
              </form>
            )}
          </ClickOutside>
        </div>
      </div>
    );
  }
}

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

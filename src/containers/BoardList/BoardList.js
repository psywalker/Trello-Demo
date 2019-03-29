import React, { Component } from 'react';
import ClickOutside from 'react-click-outside';
import { connect } from 'react-redux';
import Task from '../Task/Task';
import { removeList } from '../../actions';
import { addTask } from '../../actions';
import Button from '../../UI/Button/Button';
import Title from '../../UI/Title/Title';
import TextArea from '../../UI/TextArea/TextArea';
import { getBtnClasses } from '../../selectors/getBtnClasses';
import { getTitleClasses } from '../../selectors/getTitleClasses';
import { getTasks } from '../../selectors/getTasks';
import './styles.scss';
import '../Task/styles.scss';

class BoardList extends Component {

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
    addTask(listId, this.addTaskTextArea.current.value);
  }

  render() {

    const {
      name,
      tasks,
      listId,
    } = this.props;

    const { boardMenuShow, addTaskFormShow } = this.state;
    return (
      <div className="board boards__item">
        <ClickOutside
          className="clickOutSide"
          onClickOutside={this.boardMenuHide}
        >
          <Button 
            className={getBtnClasses('ellipsis')}
            onClick={this.boardMenuToggle}
          />

          {boardMenuShow && (
            <div className="board-menu-wrapper">
              <Button 
                type="button" 
                className={getBtnClasses('close')}
                onClick={this.boardMenuToggle}
              >
                ✖
              </Button>
              <span className="board-menu-wrapper__title">Действие со списком</span>
              <ul className="board-menu">
                <li className="board-menu__item">
                  <Button 
                    type="button"
                    className={getBtnClasses('long')}
                    onClick={this.handleRemoveList}
                  >
                    Архивировать список
                  </Button>
                </li>
              </ul>
            </div>
          )}
        </ClickOutside>
        <Title 
          level="h3"
          className={getTitleClasses('middle')}
        >
          {name}
        </Title>

        <div className="tasks tasks-wrapper">
          <div className="tasks-wrapper__inner">
            {tasks.map(task => {
              return <Task 
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
              <Button 
                type="button"
                className={getBtnClasses('link')}
                onClick={this.addTaskFormToggle}
              >
                <span className="button__text">
                  Добавьте ещё одну карточку
                </span>
              </Button>
            )}

            {addTaskFormShow && (
              <form action="#" className="task-adding-form">
                <TextArea 
                  onKeyPress={this.handleKeyPressAddTask} 
                  ref={this.addTaskTextArea} 
                  className="task-adding-form__input" 
                  placeholder="Ввести заголовок для этой карточки"
                />

                <Button 
                  type="button" 
                  className={getBtnClasses('primary')}
                  onClick={this.handleAddTask}
                >
                  Добавьте карточку
                </Button>
                <Button 
                  type="button" 
                  className={getBtnClasses('close')}
                  onClick={this.addTaskFormToggle}
                >
                  ✖
                </Button>
              </form>
            )}
          </ClickOutside>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const getTasksObj = getTasks(state, ownProps);
  return getTasksObj;
}

const mapDispatchToProps = ({
  removeList,
  addTask,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardList)


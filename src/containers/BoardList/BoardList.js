import React, { Component } from 'react';
import ClickOutside from 'react-click-outside';
import { connect } from 'react-redux';
import { removeList, addTask } from 'actions';
import TaskAddForm from './TaskAddForm/TaskAddForm';
import Button from 'UI/Button/Button';
import Title from 'UI/Title/Title';
import { getBtnClasses } from 'selectors/getBtnClasses';
import { getTitleClasses } from 'selectors/getTitleClasses';
import { getTasks } from 'selectors/getTasks';
import { getTaskArray } from 'selectors/getTaskArray';
import styles from './styles.module.scss';

class BoardList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      boardMenuShow: false,
      addTaskFormShow: false,
    }
  }

  boardMenuHide = () => {
    this.setState({ boardMenuShow: false });
  };

  boardMenuToggle = () => {
    const { boardMenuShow } = this.state;
    this.setState({ boardMenuShow: !boardMenuShow });
  };

  addTaskFormHide = () => {
    this.setState({ addTaskFormShow: false });
  };

  addTaskFormToggle = () => {
    const { addTaskFormShow } = this.state;
    this.setState({ addTaskFormShow: !addTaskFormShow });
  };

  handleRemoveList = (e) => {
    const {listId, removeList } = this.props;

    e.preventDefault();
    removeList(listId);
  }

  handleAddTask = (value) => {
    const {listId, addTask } = this.props;
    addTask(listId, value);
    this.addTaskFormHide();
  }

  render() {

    const {
      name,
      tasks,
      listId,
    } = this.props;

    const { boardMenuShow, addTaskFormShow } = this.state;
    return (
      <div className={styles.boardItem}>
        <ClickOutside
          className="clickOutSide"
          onClickOutside={this.boardMenuHide}
        >
          <Button 
            className={`${styles.boardItemBtn} ${getBtnClasses('ellipsis')}`}
            onClick={this.boardMenuToggle}
          />

          {boardMenuShow && (
            <div className={styles.boardMenuContainer}>

              <Button 
                type="button" 
                className={`${styles.boardMenuContainerBtn} ${getBtnClasses('close')}`}
                onClick={this.boardMenuToggle}
              >
                ✖
              </Button>
              <span 
                className={styles.boardMenuContainerTitle}
              >
                Действие со списком
              </span>
              <ul className={styles.boardMenu}>
                <li>
                  <Button 
                    type="button"
                    className={`${styles.boardMenuItemBtn} ${getBtnClasses('long')}`}
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

        
        <div className={styles.tasksContainer}>
          {getTaskArray(tasks, listId)}
        </div>
        

        <div className={styles.taskFormContainer}>
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
              <TaskAddForm 
                addTaskFormToggle={this.addTaskFormToggle}
                handleAddTask={this.handleAddTask}
              />
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


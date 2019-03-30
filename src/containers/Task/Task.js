import React, { Component } from 'react';
import ClickOutside from 'react-click-outside';
import { connect } from 'react-redux';
import { removeTask } from 'actions';
import TaskSaveForm from './TaskSaveForm/TaskSaveForm';
import Button from 'UI/Button/Button';
import Title from 'UI/Title/Title';
import { getTitleClasses } from 'selectors/getTitleClasses';
import { getBtnClasses } from 'selectors/getBtnClasses';
import { getDataTask } from 'selectors/getDataTask';
import './styles.scss';

class Task extends Component {

  constructor(props) {
    super(props);
    this.state = {
      taskEditBtnShow: false,
    }

    this.taskContainer = React.createRef();
    this.taskMenuWrapper = React.createRef();
  } 

  componentDidUpdate() {
    if (!this.taskMenuWrapper.current) return;
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
  
  handleRemoveTask = (e) => {
    e.preventDefault();
    const { id, listId, removeTask } = this.props;

    removeTask(id, listId);
    this.taskMenuHide();
  };
  render() {

    const { id, text } = this.props;
    const { taskEditBtnShow } = this.state;

    return (
      <div className="task" ref={this.taskContainer}>
        <Button 
          type="button" 
          className={getBtnClasses('visible')}
          onClick={this.taskMenuToggle}
        >
          <i className="fas fa-pen" />
        </Button>
        <Title 
          level="h3"
          classes={getTitleClasses('middle')}
        >
          <span style={{color: 'red'}}>id:</span> {id} 
          <br/>
          <span style={{color: 'red'}}>text:</span> {text}
        </Title>
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

                <TaskSaveForm />

                <ul className="task-menu">
                  <li className="task-menu__item">
                    <Button 
                      type="button" 
                      className={getBtnClasses('dark')}
                      onClick={this.handleRemoveTask}
                    >
                      <i className="far fa-file-archive button__icon" />
                      Архивировать
                    </Button>
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
  const getDataTaskObj = getDataTask(state, ownProps);
  return getDataTaskObj;
}

const mapDispatchToProps = ({
  removeTask,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task)

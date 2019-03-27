import React, { Component } from 'react';
import ClickOutside from 'react-click-outside';
import _ from 'lodash';
import { connect } from 'react-redux';
import { removeTask } from '../../actions';
import Button from '../../UI/Button/Button';
import Title from '../../UI/Title/Title';
import { getTitleClasses } from '../../selectors/getTitleClasses';
import TextArea from '../../UI/TextArea/TextArea';
import { getBtnClasses } from '../../selectors/getBtnClasses';
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
          {id}: {text}
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

                <form action="#" className="task-menu-fields">
                  <TextArea 
                    className="task-menu-fields__textarea" 
                    ref={this.taskMenuTextArea} 
                  />
                  <Button 
                    type="button" 
                    className={getBtnClasses('primary')}
                    onClick={this.handleEditTask}
                  >
                    Сохранить
                  </Button>
                </form>

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
  const taskId = _.get(ownProps, ['match', 'params', 'id']) || ownProps.id;
  const taskText = _.get(state, ['tasks', `${taskId}`, 'text']);

  return { 
    id: taskId, 
    text: taskText
  };
    
}

const mapDispatchToProps = ({
  removeTask,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task)

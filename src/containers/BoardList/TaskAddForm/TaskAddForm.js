import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import Button from 'UI/Button/Button';
import { getBtnClasses } from 'selectors/getBtnClasses';
import styles from './styles.module.scss';

class TaskAddForm extends Component {

  onSubmit = (values) => {
    const { handleAddTask } = this.props;
    handleAddTask(values.title)
  }

  render() {

    const { addTaskFormToggle } = this.props;

    return (
      <Form
        onSubmit={this.onSubmit}
        render={({ handleSubmit, invalid, pristine }) => (
          <form 
            action="#" 
            onSubmit={handleSubmit} 
            className={styles.form}
          >
            <Field 
              autoFocus
              name="title"
              component="textarea"
              className={styles.textarea}
              placeholder="Ввести заголовок для этой карточки"
            />

            <Button 
              type="submit" 
              className={getBtnClasses('primary')}
              disabled={pristine || invalid}
            >
              Добавьте карточку
            </Button>
            <Button 
              type="button" 
              className={getBtnClasses('close')}
              onClick={addTaskFormToggle}
            >
              ✖
            </Button>
          </form>
        )}
      />
    )
  }
}

export default TaskAddForm;

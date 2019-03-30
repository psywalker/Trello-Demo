import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import Button from '../../../UI/Button/Button';
import { getBtnClasses } from '../../../selectors/getBtnClasses';
import './styles.scss';

class TaskSaveForm extends Component {

  onSubmit = (values) => {

  }

  render() {

    return (
      <Form
        onSubmit={this.onSubmit}
        render={({ handleSubmit, invalid, pristine }) => (
          <form action="#" onSubmit={handleSubmit} className="task-menu-fields">
            <Field 
              autoFocus
              name="title"
              component="textarea"
              className="textarea" 
              placeholder="Ввести текст"
            />

            <Button 
              type="submit" 
              className={getBtnClasses('primary')}
              onClick={handleSubmit}
              disabled={pristine || invalid}
            >
              Сохранить
            </Button>
          </form>
        )}
      />
    )
  }
}

export default TaskSaveForm;

import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import Button from 'UI/Button/Button';
import { getBtnClasses } from 'selectors/getBtnClasses';
import styles from './styles.module.scss';

class TaskSaveForm extends Component {

  onSubmit = (values) => {

  }

  render() {

    return (
      <Form
        onSubmit={this.onSubmit}
        render={({ handleSubmit, invalid, pristine }) => (
          <form action="#" onSubmit={handleSubmit} className={styles.form}>
            <Field 
              autoFocus
              name="title"
              component="textarea"
              className={styles.textArea}
              placeholder="Ввести текст"
            />

            <Button 
              type="submit" 
              className={`${styles.button} ${getBtnClasses('primary')}`}
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

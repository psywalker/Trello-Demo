import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import Button from 'UI/Button/Button';
import { getBtnClasses } from 'selectors/getBtnClasses';
import './styles.scss';

class BoardAddForm extends Component {

  onSubmit = (values) => {
    const { handleAddList } = this.props;
    handleAddList(values.title)
  }

  render() {

    const { openFormAddList } = this.props;

    return (
      <Form
        onSubmit={this.onSubmit}
        render={({ handleSubmit, invalid, pristine }) => (
          <form onSubmit={handleSubmit} className="board-adding-form">
            <Field
              autoFocus
              name="title"
              component="input"
              type="text"
              placeholder="Ввести заголовок списка"
            />

            <Button 
              onClick={handleSubmit}
              className={getBtnClasses('primary')}
              type="submit"
              disabled={pristine || invalid}
            >
              Добавьте список
            </Button>

            <Button 
              className={getBtnClasses('close')}
              onClick={openFormAddList}
            >
              ✖
            </Button>
          </form>
        )}
      />
    )
  }
}

export default BoardAddForm;

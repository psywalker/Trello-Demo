import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'UI/Button/Button';
import BoardAddForm from './BoartAddForm/BoardAddForm';
import { addList } from 'actions';
import { getBoardListArray } from 'selectors/getBoardListArray';
import './styles.scss';

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addListForm: false,
    }
  } 

  openFormAddList = () => {

    this.setState({
      addListForm: !this.state.addListForm,
    }); 
  }

  handleAddList = (value) => {
    
    const { addList } = this.props;

    addList(value);
    this.openFormAddList();
  }  

  render() {

    const { lists } = this.props;
    const { addListForm } = this.state;

    return (
      <div className="boards-wrapper">

        <div className="boards"> 
          {getBoardListArray(lists)}
        </div>
    
        <div className="board-adding">
          {!addListForm && (
            <Button onClick={this.openFormAddList}>
              + Добавьте ещё одну колонку
            </Button>
          )}
          {addListForm && (
            <BoardAddForm 
              openFormAddList={this.openFormAddList}
              handleAddList={this.handleAddList}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const lists = Object.values(state.lists)
  return { lists };
}

const mapDispatchToProps = ({
  addList,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

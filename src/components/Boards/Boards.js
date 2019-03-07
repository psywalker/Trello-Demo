import React, { Component } from 'react';
import BoardsListContainer from '../../containers/BoardsListContainer';
import './styles.scss';

class Boards extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addListForm: false,
    }
    this.listTitleInput = React.createRef();
  } 
  componentDidUpdate() {
    if (!this.listTitleInput.current) return;
    this.listTitleInput.current.focus();
  }

  openFormAddList = (e) => {
    
    e.preventDefault();
    this.setState({
      addListForm: !this.state.addListForm,
    }); 
    return false;
  }

  handleAddList = (e) => {
    const { addList } = this.props;
    addList(this.listTitleInput.current.value);
    this.openFormAddList(e);
  }  

  render() {

    const { lists } = this.props;
    const { addListForm } = this.state;

    return (
      <div className="boards-wrapper">

        <div className="boards"> 
          {lists.map(list =>
            <BoardsListContainer 
              listId={list.id} 
              key={list.id} 
            />
          )}
        </div>
    
        <div className="board-adding">
          {!addListForm && (
            <button 
              className="board-adding__btn" 
              onClick={this.openFormAddList}
            >
              + Добавьте ещё одну колонку
            </button>
          )}
          {addListForm && (
            <form className="board-adding-form">
              <input 
                ref={this.listTitleInput} 
                className="board-adding-form__input" 
                placeholder="Ввести заголовок списка" 
              />
              <button 
                className="board-adding-form__btn_add" 
                onClick={this.handleAddList}
              >
                Добавьте список
              </button>
              <button 
                className="board-adding-form__btn_close" 
                onClick={this.openFormAddList}
              >
                ✖
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }
}

export default Boards;

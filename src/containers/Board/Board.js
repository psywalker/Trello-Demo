import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoardList from '../BoardList/BoardList';
import Button from '../../UI/Button/Button';
import { addList } from '../../actions';
import { getBtnClasses } from '../../selectors/getBtnClasses';
import './styles.scss';

class Board extends Component {

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
          {lists.map((list) =>
            <BoardList
              listId={list.id} 
              key={list.id} 
            />
          )}
        </div>
    
        <div className="board-adding">
          {!addListForm && (
            <Button onClick={this.openFormAddList}>
              + Добавьте ещё одну колонку
            </Button>
          )}
          {addListForm && (
            <form className="board-adding-form">
              <input 
                ref={this.listTitleInput} 
                className="board-adding-form__input" 
                placeholder="Ввести заголовок списка" 
              />
              <Button 
                onClick={this.handleAddList}
                className={getBtnClasses('primary')}
              >
                Добавьте список
              </Button>

              <Button 
                className={getBtnClasses('close')}
                onClick={this.openFormAddList}
              >
                ✖
              </Button>
            </form>
          )}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => 
{
  
  let lists = Object.entries(state.lists)
  let listArr = [];
  for(let i = 0; i < lists.length; i++) {
    listArr[i] = lists[i][1];
  }
  return { lists: listArr };
}

const mapDispatchToProps = ({
  addList,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

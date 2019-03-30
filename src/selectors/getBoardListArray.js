import React from 'react';
import BoardList from '../containers/BoardList/BoardList';

export const getBoardListArray = lists => (
  lists.map(list =>
    <BoardList
      listId={list.id} 
      key={list.id} 
    />
  )
)

const initialStore = {
  lists: {
    '1': {
      id: 1,
      name: 'list1',
      tasksId: [4, 2, 3],
    },
    '2': {
      id: 2,
      name: 'list2',
      tasksId: [1, 5],
    }
  },
  tasks: {
   '1': {
      id: 1,
      text: 'task1',
    },
   '2': {
      id: 2,
      text: 'task2',
    },
    '3': {
      id: 3,
      text: 'task3',
    },
   '4': {
      id: 4,
      text: 'task4',
    },
    '5': {
      id: 5,
      text: 'task5',
    },
  }
}

export default initialStore;

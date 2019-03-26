export const getTitleClasses = (size) => {
  switch (size) {
    case 'big':
      return ' size_big'
    case 'middle':
      return ' size_middle'
    default:
      return ' size_middle';
  }
}
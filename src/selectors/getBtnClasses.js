export const getBtnClasses = (type) => {
  switch (type) {
    case 'primary':
      return ' button_type_primary'
    case 'close':
     return ' button_type_close'
    case 'ellipsis':
     return ' button_type_ellipsis'
    case 'long':
     return ' button_type_long'
    case 'link':
     return ' button_type_link'
    case 'dark':
     return ' button_type_dark'
    case 'visible':
     return ' button_type_visible'
    default:
      return ' button';
  }
}
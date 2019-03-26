import React from 'react';
import './styles.scss';

const TextArea = React.forwardRef((props, ref) => (
  <textarea ref={ref} {...props} />
));
  
export default TextArea;
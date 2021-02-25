import React from 'react';
import FinishApp from "./App";
import ReactDOM from 'react-dom';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FinishApp/>,div)
  ReactDOM.unmountComponentAtNode(div)
});

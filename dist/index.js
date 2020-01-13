import React from 'react';
import ReactDOM from 'react-dom';

const App = ({
  name
}) => React.createElement("div", null, "Hello ", name, " !");

ReactDOM.render(React.createElement(App, {
  name: World
}), document.getElementById("root"));
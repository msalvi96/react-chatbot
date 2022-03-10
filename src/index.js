import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const chatbot = document.createElement('div');
chatbot.id = "root-chat";
document.body.appendChild(chatbot);
ReactDOM.render(
    <App />,
  document.getElementById('root-chat')
);


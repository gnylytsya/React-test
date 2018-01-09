import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


ReactDOM.render(
    <h1>Hello, world!</h1>,
    <h2>Hello, world 2!</h2>,
    <h3>Hello, world 3!</h3>,
    <h4>Hello, world 4!</h4>,
    document.getElementById('root')
);
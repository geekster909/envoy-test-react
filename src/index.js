import React from 'react';
import ReactDOM from 'react-dom';
import './styles/normalize.css';
import './styles/slick.css';
import './styles/style.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

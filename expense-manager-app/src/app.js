import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
// import WhoPaysApp from './components/WhoPaysApp';
import 'normalize.css/normalize.css'; // css reset makes sure all browsers starting from the same place
import './styles/styles.scss';


ReactDOM.render(<AppRouter />, document.getElementById('app'))

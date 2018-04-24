import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './ducks/store'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
ReactDOM.render(
    
<Provider store= {store} >

    <App className="container"/>

</Provider>

, document.getElementById('root'));

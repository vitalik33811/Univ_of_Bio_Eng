import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Vit from './homepage/Vit.js';
import { HashRouter } from 'react-router-dom'
const Qw = () => (
    <div>
        <HashRouter>

        <MuiThemeProvider>
            <Vit/>
        </MuiThemeProvider>

        </HashRouter>
    </div>
)
ReactDOM.render(<Qw/>, document.getElementById('root'));
registerServiceWorker();

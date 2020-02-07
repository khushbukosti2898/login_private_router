import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login';
import Home from './home';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component,path, ...rest}) => {
    return (
        <Route render={props => (
            localStorage.getItem("id")!==null?
                <Route path={path} component={component} />
            : <Redirect to="/login" />
        )} />
    );
};

const routing = (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/home" component={Home} />
          
        </Switch>
      </div>
    </BrowserRouter>
  )

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();

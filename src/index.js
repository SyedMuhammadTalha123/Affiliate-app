import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import Action from "./actions/action";
import Detail from './Detail';
import Form from "./Form";
import { Provider } from 'react-redux';
import store from './actions/store'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import './form.css';
import Loginform from './Loginform';
import Contact from './Contact';
import Aboutus from './Aboutus';
import Navigation from './Navigation'
import rootReducer from './Reducers';
import consumer from './Consumer';
import Media from './Media';
// import store from './Reducers/index';
// import Logform from './Logform';
// import { LoginOutlined } from '@ant-design/icons';
// const rootReducer = document.getElementById("root");

class Root extends React.Component {
    render() {
        return (

            <Provider store={store}>

                <Router history={true}>
                    <Switch>
                        <Route strict exact path="/Aboutus" component={Aboutus} />
                        <Route strict exact path="/Form" component={Form} />
                        <Route strict exact path="/Contact" component={Contact} />
                        <Route strict exact path="/detail" component={Detail} />
                        <Route strict exact path="/" component={Loginform} />
                        <Route strict exact path="/consumer" component={consumer} />
                        <Route strict exact path="/Media" component={Media} />
                        
                    </Switch>
                </Router>
            </Provider>

        )
    }
}
ReactDOM.render(<Root />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

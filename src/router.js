import React from 'react'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Jone from './pages/jone';
import Home from './pages/home';
import SignUp from './pages/signup';
import signIn from './pages/signin';
import Iscada from './pages/iscada';
export default class ERouter extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route path="/signUp" component={SignUp}/>
                        <Route path="/signIn" component={signIn}/>
                        <Route path="/" render={()=>
                            <Admin>
                                <Switch>
                                    <Route path='/home' component={Home} />
                                    <Route path="/solutionEnergyEfficiency" component={Jone} />
                                    <Route path="/iscada" component={Iscada} />
                                    <Redirect to="/home" />
                                </Switch>
                            </Admin>         
                        } />
                    </Switch>
                </App>
            </BrowserRouter>
        );
    }
}
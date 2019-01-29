import React from 'react'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Jone from './pages/jone';
import Home from './pages/home';
import SignUp from './pages/signup';
import signIn from './pages/signin';
import IsCaDa from './pages/iscada';
import ServiceTeam from './pages/serviceteam';
import AccountManagement from './pages/accountmanagement';
import IntelligentValve from './pages/intelligentvalve';
import Privacy from './pages/privacy';
import About from './pages/about';
import Clause from './pages/clause';
import PipeNetwork from './pages/pipenetwork';
import Help from './pages/help';
import Tools from './pages/tools';
import Platforms from './pages/platforms';
import Programmes from './pages/programmes';
import ServiceCommunity from './pages/servicecommunity';
import InformationDetails from './pages/Informationdetails';
import TemperatureCollection from './pages/temperaturecollection';
export default class ERouter extends React.Component{
    render(){
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/signUp" component={SignUp}/>
                        <Route path="/signIn" component={signIn}/>
                        <Route path="/" render={()=>
                            <Admin>
                                <Switch>
                                    <Route path='/home' component={Home} />
                                    <Route path="/solutionEnergyEfficiency" component={Jone} />
                                    <Route path="/isCaDa" component={IsCaDa} />
                                    <Route path="/serviceTeam" component={ServiceTeam} />
                                    <Route path="/accountManagement" component={AccountManagement} />
                                    <Route path="/intelligentValve" component={IntelligentValve} />
                                    <Route path="/privacy" component={Privacy} />
                                    <Route path="/about" component={About} />
                                    <Route path="/clause" component={Clause} />
                                    <Route path="/pipeNetwork" component={PipeNetwork} />
                                    <Route path="/help" component={Help} />
                                    <Route path="/tools" component={Tools} />
                                    <Route path="/platforms" component={Platforms} />
                                    <Route path="/programmes" component={Programmes} />
                                    <Route path="/serviceCommunity" component={ServiceCommunity} />
                                    <Route path="/temperatureCollection" component={TemperatureCollection} />
                                    <Route path="/informationDetails/:DetailsId" component={InformationDetails} />
                                    <Redirect to="/home" />
                                </Switch>
                            </Admin>         
                        } />
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}
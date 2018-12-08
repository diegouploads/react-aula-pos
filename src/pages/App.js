import React, {Component} from 'react';
import {Container} from 'reactstrap';
import {
    HashRouter,
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import './App.css';

import HomePage from './HomePage';
import Tarefas from './Tarefas';
import Sobre from './Sobre';
import Login from './Login';

import PrivateRoute from '../components/PrivateRoute'
import Menu from '../components/Menu';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Container>
                    <Menu/>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <PrivateRoute path="/tarefas" component={Tarefas}/>
                        <Route path="/sobre" component={Sobre}/>
                        <Route path="/login" component={Login}/>
                        <Route render={() => {
                            return (
                                <div>Página não encontrada.</div>
                            );
                        }}/>
                    </Switch>
                </Container>
            </BrowserRouter>
        );
    }
}

export default App;
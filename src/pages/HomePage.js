import React, {Component} from 'react';

import {Alert, Button} from 'reactstrap';

import Artigo from '../components/Artigo';
import Contador from '../components/Contador';

class HomePage extends Component{
    render(){
        return(
            <div>
                <Alert color="primary"> Primary</Alert>
                <Alert color="danger"> Danger</Alert>

                <Artigo nome="Diego" texto="Teste"/>
                <Contador numero={45}/>
                <Button>Clik Aqui</Button>
            </div>
        )
    }
}

export default HomePage;
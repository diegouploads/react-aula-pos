import React, {Component} from 'react';

import {Link, Route} from 'react-router-dom';

const TAREFAS = [
    {
        id: 1,
        titulo: 'Teste',
        descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Quem num gosta di mé, boa gentis num é. A ordem dos tratores não altera o pão duris.'
    },
    {
        id: 2,
        titulo: 'Teste 2',
        descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Copo furadis é disculpa de bebadis, arcu quam euismod magna. Interagi no mé, cursus quis, vehicula ac nisi.'
    },
    {
        id: 3,
        titulo: 'Teste 3',
        descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Per aumento de cachacis, eu reclamis.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio. Viva Forevis aptent taciti sociosqu ad litora torquent.'
    }
]

class Tarefas extends Component {
    render() {
        const tarefasLink = TAREFAS.map((tarefa, index) => {
            return (
                <li key={tarefa.id}>
                    <Link to={`/tarefas/${tarefa.id}`}>{tarefa.titulo}</Link>
                </li>
            )
        });
        return (
            <div>
                <h1>Tarefas</h1>
                <ul>{tarefasLink}</ul>
                <Route
                    path="/tarefas/:tarefaId"
                    render={props =>{
                        const tarefaId = props.match.params.tarefaId;
                        const tarefa = TAREFAS.find(tar => tar.id == tarefaId)
                        return(
                            <div>
                                {tarefa.descricao}
                            </div>
                        )
                    }}
                />
            </div>
        )
    }
}

export default Tarefas;
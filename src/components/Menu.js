import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import {isAutenticado, setAutenticado} from '../utils/LoginManager'
import {
Link, withRouter
} from 'react-router-dom';

const Menu = (props) => {
        return(
            <Nav>
                <NavItem>
                    <Link to="/" className="nav-link"> Home </Link>
                </NavItem>
                <NavItem>
                    <Link to="/tarefas" className="nav-link"> Tarefas </Link>
                </NavItem>
                <NavItem>
                    <Link to="/sobre" className="nav-link"> Sobre </Link>
                </NavItem>
                {isAutenticado() ? (
                        <NavItem>
                            <NavLink
                                href=""
                                onClick={() => {
                                    setAutenticado(false);
                                    props.history.push('/');
                                }}
                            >
                                Sair
                            </NavLink>
                        </NavItem>
                    ) : null
                }
            </Nav>
        )
}

export default withRouter(Menu);
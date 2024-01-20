import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { logoutChats } from "../../redux/actions/user-actions"
import { useDispatch } from 'react-redux';
import { toolbarType } from './toolbar.type';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from 'react';

function Toolbar({ logout, heading, background }: toolbarType) {
    const [role, setRole]= useState('NORMAL')
    useEffect(()=>{
        let user = localStorage.getItem('user') || ''
        setRole(JSON.parse(user).role);
        
    },[])
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logout_app = async () => {
        dispatch(await logoutChats())
        localStorage.clear();
        navigate('/')
    }
    const groupDetails = (id: string) => {

    }
    return (
        <Navbar collapseOnSelect expand="lg" style={{ background: background }}>
            <Container>

                <Navbar.Brand onClick={() => groupDetails('')}>{heading ? heading : "Select Chat"}</Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                   {role === "ADMIN" && <Nav className="me-auto">
                        <Nav.Link eventKey={2} onClick={() => navigate('/dashboard')}>
                            Dashboard
                        </Nav.Link>
                        <NavDropdown title="Admin Actions" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => navigate('/users')}>Users</NavDropdown.Item>
                           
                        </NavDropdown>
                    </Nav>  || <Nav className="me-auto">
                        
                    </Nav> } 
                    <Nav>
                        {logout && <Nav.Link eventKey={3} >
                            Welcome {(JSON.parse(localStorage.getItem('user')!)).firstName} {(JSON.parse(localStorage.getItem('user')!)).lastName}
                        </Nav.Link>}
                        {logout && <Nav.Link eventKey={2} onClick={() => logout_app()}>
                            Logout
                        </Nav.Link>}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Toolbar;
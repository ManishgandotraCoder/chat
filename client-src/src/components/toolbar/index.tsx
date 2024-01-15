import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { logoutChats } from "../../redux/actions/user-actions"
import { useDispatch } from 'react-redux';
import { toolbarType } from './toolbar.type';
function Toolbar({ logout, heading, background }: toolbarType) {

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
                    <Nav className="me-auto">

                    </Nav>
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
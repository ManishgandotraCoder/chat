import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { logout } from "../../redux/actions/user-actions"
import { useDispatch } from 'react-redux';
function Toolbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logout_app = async () => {
        // 
        dispatch(await logout())
        localStorage.clear();
        navigate('/')
    }
    return (
        <Navbar collapseOnSelect expand="lg" style={{background:"rgba(10, 180, 180, 1)"}}>
            <Container>
                <Navbar.Brand>Chat Messenger</Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} onClick={() => logout_app()}>
                            Logout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Toolbar;
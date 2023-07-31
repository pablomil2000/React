import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBarMenu() {
    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        Dynamic Form
                    </Navbar.Brand>
                    <Navbar.Text>
                        Signed in as:{" "}
                        <a href="https://github.com/pablomil2000" target='_blank' rel="noreferrer">Pablo Martin</a>
                    </Navbar.Text>
                </Container>
            </Navbar>
        </div>
    )
}
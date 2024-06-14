import { Container, Navbar, NavDropdown, Nav, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Navigation = () => {
    return <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid={true}>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav " className='justify-content-end mr-5'>
                    <Nav className="me-auto">
                        <Image src="https://d.newsweek.com/en/full/1898130/dog-cat-under-sheet.jpg" className='d-none d-lg-flex' style={styles.circleImg} />
                        <NavDropdown title="Adrian Ruvalcaba" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="/accountsettings">Account Settings</NavDropdown.Item>
                            <NavDropdown.Item >Sign Out</NavDropdown.Item>
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}

const styles = {
    circleImg: {
        width: "40px",
        borderRadius: "20px"
    }
}

export default Navigation;
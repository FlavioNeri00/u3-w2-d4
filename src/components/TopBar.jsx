import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const TopBar = () => {
    return(
        <Navbar expand="lg" className="bg-info">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/favourites">Favourites</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default TopBar
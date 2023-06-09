import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import Icon from "../assets/images/Icon.png";
import { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { Link, useNavigate } from "react-router-dom";
import User from "../assets/images/User.png";

function NavbarMenu() {
  const [show, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  const [showReg, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLogged] = useState();

  useEffect(() => {
    const datasLoggedIn = JSON.parse(localStorage.getItem("dataLoginNavbar"));
    console.log(datasLoggedIn);
    if (datasLoggedIn) {
      setIsLogged(datasLoggedIn);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("dataLoginNavbar");

    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <Navbar className="backgroundNav">
        <Container>
          {isLoggedIn?.isUser ? (
            <Navbar.Brand>
              <Link to="/">
                <img src={Icon} alt="logo" />
              </Link>
            </Navbar.Brand>
          ) : isLoggedIn?.isAdmin ? (
            <Navbar.Brand>
              <Link to="/Admin">
                <img src={Icon} alt="logo" />
              </Link>
            </Navbar.Brand>
          ) : (
            <Navbar.Brand>
              <Link to="/">
                <img src={Icon} alt="logo" />
              </Link>
            </Navbar.Brand>
          )}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {isLoggedIn?.isUser ? (
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavDropdown title={<img src={User} alt="" />}>
                  <NavDropdown.Item href="/Profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/Waiting">Pay</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          ) : isLoggedIn ? (
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavDropdown title={<img src={User} alt="" />}>
                  <NavDropdown.Item href="/trip">trip</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          ) : (
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Button
                  variant="outline-light"
                  style={{
                    padding: "6px 23px",
                  }}
                  className="me-3 text-dark"
                  onClick={() => handleShowLogin()}
                >
                  Login
                </Button>
                <Button
                  variant=""
                  style={{
                    backgroundColor: "#FFAF00",
                    padding: "6px 23px",
                    color: "#fff",
                  }}
                  onClick={() => handleShow()}
                >
                  Register
                </Button>
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
      <Register
        showReg={showReg}
        setShow={handleShow}
        handleClose={handleClose}
      />
      <Login
        show={show}
        setShowLogin={handleShowLogin}
        handleCloseLogin={handleCloseLogin}
      />
    </>
  );
}

export default NavbarMenu;

import { Button, Modal, Form } from "react-bootstrap";
import Palm from "../assets/images/iconPalm.png";
import Hibiscus from "../assets/images/iconHibiscus.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ show, handleCloseLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [dataLogin, setDataLogin] = useState({});
  const handleLogin = () => {
    if (email === "malchiram@gmail.com" && password === "123") {
      setDataLogin(() => ({
        isUser: true,
      }));
      handleCloseLogin();
      window.location.reload();
    } else if (email === "admin@gmail.com" && password === "123") {
      setDataLogin(() => ({
        isAdmin: true,
      }));
      handleCloseLogin();
      localStorage.setItem(
        "dataLoginNavbar",
        JSON.stringify({
          isAdmin: true,
        }),
      );
      navigate("/admin");
      window.location.reload();
    } else {
      alert("login failed !");
    }
  };

  useEffect(() => {
    if (dataLogin.isUser || dataLogin.isAdmin) {
      localStorage.setItem("dataLoginNavbar", JSON.stringify(dataLogin));
    }
  }, [dataLogin]);

  return (
    <Modal show={show} onHide={() => handleCloseLogin()} className="TextLogin">
      <img src={Palm} alt="" className="stylePalm" />
      <img src={Hibiscus} alt="" className="position-absolute styleHibiscus" />

      <Modal.Title
        className="text-center mt-5 TextLogin"
        style={{ fontSize: "36px" }}
      >
        Login
      </Modal.Title>

      <Modal.Body className="p-5">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="textLabelLogin">Email</Form.Label>
            <Form.Control
              type="email"
              autoFocus
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="textLabelLogin">Password</Form.Label>
            <Form.Control
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Button className="Login" onClick={() => handleLogin()}>
        Login
      </Button>

      <p className="text-center blurText">
        Don't have an account? Click <span className="otherblurtext">Here</span>{" "}
      </p>
    </Modal>
  );
}

export default Login;

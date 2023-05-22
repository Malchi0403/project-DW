import { Button, Modal, Form } from "react-bootstrap";
import Palm from "../assets/images/iconPalm.png";
import Hibiscus from "../assets/images/iconHibiscus.png";

const Register = ({ showReg, handleClose }) => {
  return (
    <Modal show={showReg} onHide={() => handleClose()} className="TextRegister">
      <img src={Palm} alt="" className="stylePalm" />
      <img src={Hibiscus} alt="" className="position-absolute styleHibiscus" />

      <Modal.Title
        className="text-center mt-5 p-3 TextRegister"
        style={{ fontSize: "36px" }}
      >
        Register
      </Modal.Title>

      <Modal.Body className="p-5">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="textLabelLogin">Full Name</Form.Label>
            <Form.Control type="text" autoFocus required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="textLabelLogin">Email</Form.Label>
            <Form.Control type="email" autoFocus required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="textLabelLogin">Password</Form.Label>
            <Form.Control type="password" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="textLabelLogin">Phone</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Button className="Reg" onClick={() => handleClose()}>
        Register
      </Button>
    </Modal>
  );
};

export default Register;

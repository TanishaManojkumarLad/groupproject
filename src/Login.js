import { useState } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FormGroup } from "react-bootstrap";

import "./login.css";
export default function Login() {

  return (
    <div>
      <div> <UserForm /></div>
    </div>
  )
}

function UserForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const CheckValue = (e) => {
    var errors = [];
    if (id.trim().length === 0) {

      errors.push("User Id is required");
      e.preventDefault();
    }
    if (password.trim().length === 0) {

      errors.push("Password is required");
      e.preventDefault();
    }

    setErrors(errors);

  };

  return (
    <div>
      <form method="POST" onSubmit={CheckValue}>
        <Row>
          <Col xs={6}><img src={require('./food.jpg')} alt="food image" /></Col>
          <Col xs={6}>
            <h2> LOG IN:</h2>
            <h5>Using your User Id and Password:</h5>
            <div>
              <Row>
                <Col xs={3}></Col>
                <Col xs={6}>
                  <Form.Group className="Userid" controlId="Id">
                    <Form.Label> User Id:</Form.Label>
                    <Form.Control type="text" placeholder="User Id" onChange={(e) => setId(e.target.value)} />
                  </Form.Group>
                </Col>
                <Col xs={3}></Col>
              </Row>
            </div>

            <div>
              <Row>
                <Col xs={3}></Col>
                <Col xs={6}>
                  <Form.Group className="password" controlId="Password">
                    <Form.Label> Password:</Form.Label>
                    <Form.Control type="password" placeholder="********" onChange={(e) => setPassword(e.target.value)} />
                  </Form.Group>
                </Col>
                <Col xs={3}></Col>
              </Row>
            </div>
            <div></div>
            <div style={{ color: "red" }}>
              {errors.map((a) => (
                <div> {a}</div>
              ))}

            </div>
             <hr></hr>
            <div>

              <Button variant="dark" type="submit">
                Submit
              </Button>

            </div>
          </Col>
        </Row>
      </form>
    </div>
  );
}
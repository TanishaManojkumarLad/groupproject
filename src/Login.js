import { useState } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Login() {

  return (
    <div>
      <div> LOG IN :</div>
      <div> Using your User Id and Password:</div>
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
        <div>
          <Row>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="Id">
                <Form.Label> User Id:</Form.Label>
                <Form.Control type="text" placeholder="User Id" onChange={(e) => setId(e.target.value)} />
              </Form.Group>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="Password">
                <Form.Label> Password:</Form.Label>
                <Form.Control type="password" placeholder="********" onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
            </Col>
          </Row>
        </div>
        <div style={{ color: "red" }}>
          {errors.map((a) => (
            <div> {a}</div>
          ))}
        </div>
        <div>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
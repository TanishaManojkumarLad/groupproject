import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Signup() {
    return (
        <div>
            <div><UserForm /></div>
        </div>)
}

function UserForm() {
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [cpasswd, setCpasswd] = useState("");
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
        if (email.trim().length === 0) {

            errors.push("Email Address is required");
            e.preventDefault();
        }
        if (address.trim().length === 0) {

            errors.push("Address is required");
            e.preventDefault();
        }
        if (number.trim().length === 0) {

            errors.push("Contact number is required");
            e.preventDefault();
        }
        if (cpasswd.trim().length === 0) {

            errors.push("Confirm Password is required");
            e.preventDefault();
        }

        setErrors(errors);

    };

    return (
        <div>

            <form method="POST" onSubmit={CheckValue}>
                <Row>
                    <Col xs={6}>
                        <h2>Sign Up:</h2>
                        <h5>Please Enter your information:</h5>
                        <div>
                            <Row>
                                <Col xs={4}>
                                    <Form.Group className="userid" controlId="Id">
                                        <Form.Label> User Id:</Form.Label>
                                        <Form.Control type="text" placeholder="User Id" onChange={(e) => setId(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col xs={4}>
                                    <Form.Group className="userid" controlId="Email">
                                        <Form.Label>Email address: </Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col xs={4}>
                                    <Form.Group className="userid" controlId="Number">
                                        <Form.Label>Contact Number:</Form.Label>
                                        <Form.Control type="text" placeholder="+1----------" onChange={(e) => setNumber(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </div>
                        <hr></hr>
                        <div>
                            <Row>
                                <Col xs={12}>
                                    <Form.Group className="address" controlId="Address">
                                        <Form.Label>Address:</Form.Label>
                                        <Form.Control as="textarea" rows={3} onChange={(e) => setAddress(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>

                        </div>
                        <hr></hr>
                        <div>
                            <Row>
                                <Col xs={6}>
                                    <Form.Group className="password" controlId="Password">
                                        <Form.Label> Password:</Form.Label>
                                        <Form.Control type="password" placeholder="********" onChange={(e) => setPassword(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col xs={6}>
                                    <Form.Group className="password" controlId="CPassword">
                                        <Form.Label> Confirm Password:</Form.Label>
                                        <Form.Control type="password" placeholder="********" onChange={(e) => setCpasswd(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </div>

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
                    <Col xs={6}>
                        <img src={require('./food_1.jpg')} alt="image" width={600} height={500} />
                    </Col>
                </Row>
            </form>

        </div>
    );
}
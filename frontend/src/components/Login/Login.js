import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../styles/css/Login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const requestData = { emailId, password };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:3000/user/authenticate", requestData, {
          withCredentials: true,
        })
        .then((response) => {
          console.log(response.data.message);
          navigate("/");
        });
    } catch (error) {
      setError(true);
      console.log(error.message);
    }
  };

  return (
    <>
      <Container className="container">
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h2>Login</h2>
            <hr></hr>
            <div className="formContainer">
              <Form>
                <Form.Group
                  controlId="formUsername"
                  className="formGroup-custom"
                >
                  <Form.Label>Username</Form.Label>
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="Enter your username"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  />
                </Form.Group>
                <br />

                <Form.Group
                  controlId="formPassword"
                  className="formGroup-custom"
                >
                  <Form.Label>Password</Form.Label>
                  <br />
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <br />
                <Form.Group
                  controlId="formPassword"
                  className="formGroup-custom"
                >
                  {error && (
                    <span className="spanErrorMessage">
                      {" "}
                      Login Failed, Username or Password Incorrect{" "}
                    </span>
                  )}
                </Form.Group>
                <br />
                <div className="button-container">
                  <Button
                    className="loginButton"
                    variant="primary"
                    onClick={handleLogin}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Login;

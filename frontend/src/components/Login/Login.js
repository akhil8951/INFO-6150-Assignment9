import { Container, Row, Col } from "react-bootstrap";
import "../../styles/css/Login.css";

const Login = () => {
  return (
    <>
      <Container className="container">
        <Row>
          <Col>
            <h2>Hi i am inside the Container</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Login;

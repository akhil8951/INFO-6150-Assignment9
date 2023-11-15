import { Card, Form, Row, Button, Col, Container } from "react-bootstrap";
import "../../styles/css/ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <div className="main-contactUs">
        <div className="title-ContactUs">
          <h1>Contact Us</h1>
        </div>
        <hr />
        <Card className="card-contactUs">
          <h5>
            If you have any inquiries, Please fill out the form, we will get
            back to you shortly.
          </h5>
          <Container className="innerContainer-contactUs">
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridQuestion">
                <Form.Label>Question</Form.Label>
                <Form.Control
                  placeholder="Please write your Queries"
                  as="textarea"
                  rows={3}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridComments">
                <Form.Label>Comments or Feedback</Form.Label>
                <Form.Control placeholder="Feedback on our services" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Card>
      </div>
    </>
  );
};
export default ContactUs;

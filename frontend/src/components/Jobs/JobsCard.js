import { Card, Button } from "react-bootstrap";
import "../../styles/css/JobsCard.css";
const JobsCard = (props) => {
  return (
    <>
      <Card className="Card" style={{ width: "18rem" }}>
        <Card.Img
          style={{ height: "12rem" }}
          variant="top"
          src={props.source}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Button variant="primary">Apply</Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default JobsCard;

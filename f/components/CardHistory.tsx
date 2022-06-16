import { Card } from "react-bootstrap";

const CardHistory = (props: any) => {
  return (
    <div>
      <Card className="mb-3">
        <Card.Header>ID : {props.x._id}</Card.Header>
        <Card.Body>
          <Card.Text>Input Start : {props.x.lowerNumber}</Card.Text>
          <Card.Text>Input End : {props.x.higherNumber}</Card.Text>
          <Card.Text>Prime Number : {props.x.sumOutput.join(",")}</Card.Text>
          <Card.Text>Count Prime Number : {props.x.sumOutputLength}</Card.Text>
          <Card.Text>Timestamp : {props.x.createdAt}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardHistory;

import type { NextPage } from "next";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import MainLayout from "../components/MainLayout";
import axios from "axios";

const Home: NextPage = () => {
  const [lowerNumber, setLowerNumber] = useState<number>(0);
  const [higherNumber, setHigherNumber] = useState<number>(0);

  const GoCalculate = async () => {
    if (lowerNumber < 10) return alert("[Start input] must be greater than 10");
    if (higherNumber > 1000) return alert("[End input] must be less than 1000");

    const toDB = {
      lowerNumber,
      higherNumber,
    };

    await axios.post("http://localhost:3001/cal", toDB);
    setLowerNumber(0)
    setHigherNumber(0)
    alert("Save Success");
  };

  return (
    <MainLayout>
      <h1>Calculate Prime Number</h1>
      <Form.Group className="mb-3">
        <Form.Label>Start</Form.Label>
        <Form.Control
          value={lowerNumber}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setLowerNumber(parseInt(e.target.value))}
          type="number"
          placeholder="Start input"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>End</Form.Label>
        <Form.Control
          value={higherNumber}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setHigherNumber(parseInt(e.target.value))}
          type="number"
          placeholder="End input"
        />
      </Form.Group>
      <Button variant="primary" onClick={() => GoCalculate()}>
        Calculate
      </Button>
    </MainLayout>
  );
};

export default Home;

import type { NextPage } from "next";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import MainLayout from "../components/MainLayout";

const Home: NextPage = () => {
  const [startNumber, setStartNumber] = useState<number>(10);
  const [endNumber, setEndNumber] = useState<number>(50);

  const GoCalculate = (s: number, e: number) => {
    if (s < 10) return alert("[Start input] must be greater than 10");
    if (e > 1000) return alert("[End input] must be less than 1000");

    console.log(s);
    console.log(e);
  };

  return (
    <MainLayout>
      <Form.Group className="mb-3">
        <Form.Label>Start</Form.Label>
        <Form.Control
          value={startNumber}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setStartNumber(parseInt(e.target.value))
          }
          type="number"
          placeholder="Enter Number"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>End</Form.Label>
        <Form.Control
          value={endNumber}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setEndNumber(parseInt(e.target.value))
          }
          type="number"
          placeholder="Enter Number"
        />
      </Form.Group>
      <Button
        variant="primary"
        onClick={() => GoCalculate(startNumber, endNumber)}
      >
        Calculate
      </Button>
    </MainLayout>
  );
};

export default Home;

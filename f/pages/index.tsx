import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import type { NextPage } from "next";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import MainLayout from "../components/MainLayout";

const Home: NextPage = () => {
  const [lowerNumber, setLowerNumber] = useState<number>(0);
  const [higherNumber, setHigherNumber] = useState<number>(0);

  // validation schema
  const validationSchema = Yup.object().shape({
    lowerNumber: Yup.number().positive().integer().min(10).max(1000).required("lowerNumber is required"),
    higherNumber: Yup.number()
      .positive()
      .integer()
      .min(10)
      .max(1000)
      .required("higherNumber is required")
      .notOneOf([lowerNumber], "higherNumber must be different than lowerNumber"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const GoCalculate = async (data: any) => {
    const SaveToDB = {
      lowerNumber: data.lowerNumber,
      higherNumber: data.higherNumber,
    };
    // post to db
    const result = await axios.post("http://localhost:3001/cal", SaveToDB);
    if (result.status === 201) {
      alert("Success");
    }
    // reset form
    setLowerNumber(0);
    setHigherNumber(0);
  };

  return (
    <MainLayout>
      <h1>Calculate Prime Number</h1>
      <form onSubmit={handleSubmit(GoCalculate)}>
        <Form.Group className="mb-3">
          <Form.Label>Start Input</Form.Label>
          <Form.Control
            value={lowerNumber}
            {...register("lowerNumber")}
            isInvalid={errors.lowerNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setLowerNumber(parseInt(e.target.value))}
            type="number"
          />
          <div className="invalid-feedback">{errors.lowerNumber?.message}</div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>End Input</Form.Label>
          <Form.Control
            value={higherNumber}
            {...register("higherNumber")}
            isInvalid={errors.higherNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setHigherNumber(parseInt(e.target.value))}
            type="number"
          />
          <div className="invalid-feedback">{errors.higherNumber?.message}</div>
        </Form.Group>
        <Button type="submit" variant="primary">
          Send Calculate
        </Button>
      </form>
    </MainLayout>
  );
};

export default Home;

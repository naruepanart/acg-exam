import React, { useEffect, useState } from "react";
import axios from "axios";
import MainLayout from "../components/MainLayout";
import { Table } from "react-bootstrap";
import { CalculatorModelInterface } from "../types/cal";

const History: React.FC<CalculatorModelInterface> = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await axios.get("http://localhost:3001/cal");
      setData(res.data);
    };
    getData();
    setLoading(false);
  }, []);

  return (
    <MainLayout>
      <h1>History Calculate</h1>
      {/* <p>{JSON.stringify(data)}</p> */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Input Start</th>
            <th>Input End</th>
            <th>Prime Number</th>
            <th>Count Prime Number</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        {loading && "Loading..."}
        {data.map(({ _id, lowerNumber, higherNumber, sumOutput, sumOutputLength, createdAt }: any) => {
          return (
            <tbody key={_id}>
              <tr>
                <td>{lowerNumber}</td>
                <td>{higherNumber}</td>
                <td>{sumOutput.join(",")}</td>
                <td>{sumOutputLength}</td>
                <td>{createdAt}</td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </MainLayout>
  );
};

export default History;

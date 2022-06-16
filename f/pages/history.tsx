import React, { useEffect, useState } from "react";
import axios from "axios";
import MainLayout from "../components/MainLayout";
import { Table } from "react-bootstrap";
import { CalculatorModelInterface } from "../types/cal";
import CardHistory from "../components/CardHistory";

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
      <h1>History Calculate</h1>
      {data.map((x, i) => {
        return <CardHistory key={i} x={x} />;
      })}
    </MainLayout>
  );
};

export default History;

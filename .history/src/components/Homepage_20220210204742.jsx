import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Homepage = () => {
  return (
    <>
      <Title level={5} className="heading">
        Global Crypto Stats
      </Title>
      <Row></Row>
    </>
  );
};

export default Homepage;

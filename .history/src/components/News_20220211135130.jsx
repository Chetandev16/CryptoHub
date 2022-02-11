import React from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const { Text, Title } = Typography;
const { option } = Select;
const demoImage =  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg"

const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 6: 12})

 
  if(!cryptoNews?.value) {
    return <h1>Loading.....</h1>
  }


  return (
    <Row gutter={[24,24]}>
      {cryptoNews.value.map((news, i)=> (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title level={4} className="news-title">
                  {news.name}
                  <img src={news?.image?.thumbnail?.contentUrl || demoImage}/>
                </Title>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;

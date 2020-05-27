import React from 'react';
import { Card, Col, Row, Typography, Space } from 'antd';

const { Text } = Typography

const Cards = () => {
    return (
    <Row gutter={[8, 8]}>
        <Space size="2">
        <Col span={6}>
          <Card className="card-style" size='small'>
            <p>Invested Amount</p>
            <Text strong={true}>$50,000</Text>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="card-style" size='small'>
            <p>Current Amount(Approx.)</p>
            <Text strong={true}>$53,460</Text>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="card-style" size='small'>
            <p>Gain / loss since Investing</p>
            <Text strong={true}>1.23%</Text>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="card-style" size='small'>
            <p>Cost Basis</p>
            <Text strong={true}>$50,000</Text>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="card-style" size='small'>
            <p>IRR(internal rate of return)</p>
            <Text strong={true}>$53,460</Text>
          </Card>
        </Col>
        </Space>
    </Row>
    )
}

export default Cards;

import React from 'react';
import { Layout, Row, Col, Divider, Typography } from 'antd';
import Cards from './Cards';
import PieChart from '../charts/PieChart';
import StackBar from '../charts/StackBar';
import DealsTab from '../charts/DealsTab';
import Map from '../charts/Map';

const { Content } = Layout;
const { Paragraph } = Typography;

const App = () => (
  <Layout>
      <Content>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <Cards />
        <p className='title-style'>Portfolio Overview</p>
        <h3 className='txt-style'>Active Investments</h3>
        <Divider />
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <StackBar />
          </Col>
          <Col span={12}>
            <div className="pie-chart">
           <PieChart />
           </div>
          </Col>
          <Divider />
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <h2>Deals</h2>
            <DealsTab />
          </Col>
          <Col span={12}>
           <h2>Asset Locations</h2>
           <Map />
          </Col>
          <Col offset={12}>
          <h3 strong level={2}>Recent Activity</h3>
          <Divider />
          <p>Date Goes Here</p>
          <Paragraph>
            We supply a series of design principles, practical patterns and high quality design resources to help people create their product
            prototypes beautifully and efficiently.
          </Paragraph>
          </Col>
        </Row>
        </div>
      </Content>
    </Layout>
);

export default App;
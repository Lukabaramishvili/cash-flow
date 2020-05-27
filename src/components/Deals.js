import React from 'react';
import { Row, Col, Layout } from 'antd';
import PieChart from '../charts/PieChart';
import StackBar from '../charts/StackBar';
import CashFlowHis from '../charts/CashFlowHis';
import YourDealsTable from '../charts/YourDealsTable';

const { Content } = Layout;

const Deals = () => {
    return (
    <Layout>
      <Content>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <StackBar />
          </Col>
          <Col span={12}>
            <div className="pie-chart">
           <PieChart />
           </div>
          </Col>
        </Row>
        <CashFlowHis />
        <YourDealsTable />
        </div>
      </Content>
    </Layout>
    )
}

export default Deals;
import React from 'react';
import { Table } from 'antd';

const YourDealsTable = () => {
    const columns = [
        {
          title: 'Deal name',
          dataIndex: 'name',
          width: 100,
        },
        {
          title: 'Amount Invested',
          dataIndex: 'amount',
          width: 100,
        },
        {
            title: 'Current Amount(Approx.)',
            dataIndex: 'changeA',
        },
        {
          title: 'Gain / loss since investing ($ or %)',
          dataIndex: 'changeP',
        },
        {
            title: 'Cost Bases',
            dataIndex: 'cost',
        },
        {
          title: 'IRR (Internal rate of return)',
          dataIndex: 'graph',
        },
        {
            title: 'KPIs',
            dataIndex: 'graph2',
        },
      ];
      
      const data = [];
      for (let i = 0; i < 30; i++) {
        data.push({
          key: i,
          name: `175 North Clark Dr Jonathan Benedetti ${i}`,
          amount: '$33,098,342',
          changeA: '$33,098,342',
          changeP: '$98,342',
          cost: `$10,000`,
          graph: 'coming',
          graph2: 'coming2',
        });
    }
    return (
        <div>
        <Table columns={columns} dataSource={data} size="small"  scroll={{ y: 240 }} />
        </div>
    )
}

export default YourDealsTable;
import React from 'react';
import { Table } from 'antd';


const DealsTab = () => {
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
          title: 'Gain / loss since investing ($ or %)',
          dataIndex: 'change',
        },
        {
          title: 'IRR',
          dataIndex: 'graph',
        },
      ];
      
      const data = [];
      for (let i = 0; i < 30; i++) {
        data.push({
          key: i,
          name: `Edward King ${i}`,
          amount: 32,
          change: `London, Park Lane no. ${i}`,
          graph: 'coming'
        });
    }
    return (
        <div>
        <Table columns={columns} dataSource={data} size="small"  scroll={{ y: 240 }} />
        </div>
    )
}

export default DealsTab;

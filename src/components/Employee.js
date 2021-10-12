import React from 'react'
import { Table } from 'antd';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { dataSource } from './Datasource';
import { useHistory } from "react-router-dom";

function Employee() {
  const history = useHistory();
  const handleData = (data) => {

    history.push({
      pathname: '/employee/' + data.employeeid,
      state: { detail: data } 
    })
  }
  const columns = [
    {
      title: 'EmployeeID',
      dataIndex: 'employeeid',
      key: 'employeeid',
    },
    {
      title: 'FirstName',
      dataIndex: 'firstname',
      key: 'firstname',
    },
    {
      title: 'View',
      key: 'operation',
      render: (data) => <Button type="primary"
        onClick={() => handleData(data)}>VIEW</Button>
    },

  ];
  return (

    <>

      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'}
      />
    </>
  )
}

export default Employee
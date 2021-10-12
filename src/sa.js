import React from 'react'
import { Table } from 'antd';
import 'antd/dist/antd.css';
import './App.css'


const Employee = () => {
  const [people, setPeople] = React.useState(data)
  return (
    <>

      const data = [
      {
        id: '1',
      name: "Sourabh",
      key: '1'
  },

      ]


      {people.map((person) => {
        const { id, name } = person;
        return (
              const columns = [
            {
              title: 'Employee ID',
              dataIndex: 'id',
              key: 'key',
            },
            {
              title: 'First Name',
              dataIndex: 'name',
              key: 'key',
            },
            {
              title: 'View',
              dataIndex: 'view',
              key: 'key',
            }

          ];
          </>
  )
})}

return (
  <>
    <div className="App">

      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
      ></Table>

    </div>
  </>
)
        )
}
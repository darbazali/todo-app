import React from 'react'
import { Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

const Todo = ({ todo, id, handleDelete }) => {
  return (
    <div className='todo'>
      <h3>{todo}</h3>

      {/* buttons wrapper */}
      <div>
        <Button type='danger' onClick={handleDelete} id={id}>
          <DeleteOutlined />
        </Button>
      </div>
    </div>
  )
}

export default Todo

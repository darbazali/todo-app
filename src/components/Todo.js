import React from 'react'
import { Button, Checkbox } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

const Todo = ({ todo, handleDelete, handleComplete, isCompleted, index }) => {
  return (
    <div className='todo'>
      <h3>
        <Checkbox onChange={() => handleComplete(index)} />{' '}
        <span className={isCompleted ? 'completed' : ''}>{todo}</span>
      </h3>

      {/* buttons wrapper */}
      <div>
        <Button type='danger' onClick={() => handleDelete(index)}>
          <DeleteOutlined />
        </Button>
      </div>
    </div>
  )
}

export default Todo

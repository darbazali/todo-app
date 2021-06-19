import React from 'react'
import { Button, Checkbox } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

const Todo = ({
  todo,
  id,
  handleDelete,
  handleComplete,
  isCompleted,
  index,
}) => {
  return (
    <div className='todo'>
      <h3>
        <Checkbox onChange={() => handleComplete(index)} data-id={id} />{' '}
        <span class={isCompleted ? 'completed' : ''}>{todo}</span>
      </h3>

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

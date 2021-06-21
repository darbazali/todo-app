import React from 'react';
import { Button, Checkbox } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const Todo = ({
  todo,
  handleDelete,
  handleComplete,
  handleUpdateCick,
  isCompleted,
  index,
  id,
}) => (
  <div className="todo">
    <h3>
      <Checkbox onChange={() => handleComplete(index)} />
      {' '}
      <span className={isCompleted ? 'completed' : ''}>{todo}</span>
    </h3>

    {/* buttons wrapper */}
    <div>
      <Button
        type="danger"
        onClick={() => handleDelete(id)}
        style={{ marginRight: '1rem' }}
      >
        <DeleteOutlined />
      </Button>

      <Button type="primary" onClick={handleUpdateCick}>
        <EditOutlined />
      </Button>
    </div>
  </div>
);

export default Todo;

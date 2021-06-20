import React from 'react';
import { Modal, Input } from 'antd';

const TodoForm = ({
  onChange,
  onSubmit,
  handleKeyDown,
  handleCancel,
  value,
  isModalVisible,
}) => (
  <Modal
    title="Create new todo"
    visible={isModalVisible}
    onOk={onSubmit}
    onCancel={handleCancel}
  >
    <Input
      placeholder="input todo text"
      size="large"
      value={value}
      onChange={onChange}
      onKeyDown={handleKeyDown}
    />
  </Modal>
);

export default TodoForm;

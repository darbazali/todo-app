import React from 'react';
import { Modal, Input } from 'antd';

const TodoForm = ({
  onChange,
  onSubmit,
  handleKeyDown,
  handleCancel,
  value,
  isEditModalVisible,
}) => (
  <Modal
    title="Update todo"
    visible={isEditModalVisible}
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

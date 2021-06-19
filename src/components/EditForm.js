import React from 'react'
import { Modal, Form, Input } from 'antd'

const TodoForm = ({
  onChange,
  onSubmit,
  handleKeyDown,
  handleCancel,
  value,
  isEditModalVisible,
}) => {
  return (
    <Modal
      title='Update todo'
      visible={isEditModalVisible}
      onOk={onSubmit}
      onCancel={handleCancel}
    >
      <Input
        placeholder='input todo text'
        size='large'
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
    </Modal>
  )
}

export default TodoForm

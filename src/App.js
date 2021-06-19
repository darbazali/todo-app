import React, { useState } from 'react'
import { Button } from 'antd'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

const appStyles = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '2rem',
  position: 'relative',
}

const newTodoButtonStyle = {
  position: 'absolute',
  top: '3.5rem',
  right: '2rem',
}

/* ===========================================
  main app
=========================================== */
const App = () => {
  // todos container
  const [todos] = useState([])
  const [todo, setTodo] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault()

    if (todo.trim() !== '') {
      todos.push({
        id: todos.length + 1,
        todo: todo.trim(),
      })
      setTodo('')
      setIsModalVisible(false)
    } else {
      return
    }
  }

  // submit the form with Enter keydwn
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
      setIsModalVisible(false)
    }
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <div style={appStyles}>
      <h1>iTodos</h1>

      {/* 
        New todo button
        Opens up the modal
      */}

      <Button
        type='primary'
        size='large'
        onClick={() => setIsModalVisible(true)}
        style={newTodoButtonStyle}
      >
        Create new todo
      </Button>

      {/* New Todo Form */}
      <TodoForm
        onSubmit={handleSubmit}
        onChange={(e) => setTodo(e.target.value)}
        handleKeyDown={handleKeyDown}
        handleCancel={handleCancel}
        value={todo}
        isModalVisible={isModalVisible}
      />

      {/* List all available todos */}
      {todos.map((todo) => (
        <Todo todo={todo.todo} key={todo.id} />
      ))}
    </div>
  )
}

export default App

import React, { useState } from 'react'
import { Button } from 'antd'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import EditForm from './components/EditForm'

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
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isEditModalVisible, setIsEditModalVisible] = useState(false)
  const [selectedTodo, setSelectedTodo] = useState({})

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault()

    if (todo.trim() !== '') {
      todos.push({
        id: todos.length + 1,
        todo: todo.trim(),
        isCompleted: false,
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
    setIsEditModalVisible(false)
  }

  // handle delete function
  const handleDelete = (index) => {
    // prompt ther user to be sure
    if (window.confirm('Are you sure?')) {
      setTodos(todos.filter((todo) => todo.id !== index))
    }
  }

  // handle complete todo
  const handleComplete = (index) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
  }

  // handle update

  const handleUpdateSubmit = () => {
    let newTodos = [...todos]
    newTodos = newTodos.map((todo) => {
      if (todo.id === selectedTodo.id) {
        return selectedTodo
      }
      return todo
    })
    console.log('last update==>', newTodos)
    setTodos(newTodos)
    setSelectedTodo({})
    setIsEditModalVisible(false)
  }

  // cancle update modal
  const handleUpdateCancel = () => {
    setIsEditModalVisible(false)
  }

  // open update modal
  const handleUpdateCick = (todo) => {
    setSelectedTodo(todo)
    setIsEditModalVisible(true)
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

      <EditForm
        onSubmit={handleUpdateSubmit}
        onChange={(e) => {
          console.log(e.target.value)
          setSelectedTodo({ ...selectedTodo, todo: e.target.value })
        }}
        handleKeyDown={handleKeyDown}
        handleCancel={handleUpdateCancel}
        isEditModalVisible={isEditModalVisible}
        value={selectedTodo.todo}
      />

      {/* List all available todos */}
      {todos.length === 0
        ? 'You have no todos'
        : todos.map((todo, index) => (
            <Todo
              todo={todo.todo}
              key={todo.id}
              index={index}
              isCompleted={todo.isCompleted}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
              handleUpdateCick={() => handleUpdateCick(todo)}
            />
          ))}
    </div>
  )
}

export default App

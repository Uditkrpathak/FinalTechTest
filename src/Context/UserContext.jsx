import React, { useState, createContext, useEffect } from 'react'
import { toast } from 'react-toastify'
export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])
  const [text, setText] = useState('')
  const [IsOpen, setIsOpen] = useState(false)
  const [light, setLight] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'))
    if (savedTasks) {
      setTasks(savedTasks)
    }
  }, [])

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }, [tasks])

  const addTask = taskText => {
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }])
    toast.success('Task Added!')
  }

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
    toast.success('Task Deleted!')
  }

  const toggleComplete = id => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
    toast.success('Task Checked!')
  }

  const requiredVal = {
    tasks,
    setTasks,
    text,
    setText,
    deleteTask,
    IsOpen,
    setIsOpen,
    light,
    setLight,
    toggleComplete,
    addTask,
    searchQuery,
    setSearchQuery,
    showSearch,
    setShowSearch
  }

  return (
    <UserContext.Provider value={requiredVal}>{children}</UserContext.Provider>
  )
}

export default UserContextProvider

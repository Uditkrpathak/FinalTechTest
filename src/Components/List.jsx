import React from 'react'
import Item from './Item'
import { motion } from 'framer-motion'

const List = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <motion.div
      className='space-y-2'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {tasks.length === 0 && <p className='text-red-500'>No tasks Added</p>}
      {tasks.map(task => (
        <motion.div
          key={task.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Item
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default List

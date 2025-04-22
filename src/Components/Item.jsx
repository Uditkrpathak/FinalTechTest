import React from 'react'
import { MdDelete } from 'react-icons/md'
import { motion } from 'framer-motion'
import { CiCircleCheck } from 'react-icons/ci'

const Item = ({ task, toggleComplete, deleteTask }) => {
  const handleCheck = () => {
    toggleComplete(task.id)
  }
  return (
    <motion.div
      className='flex items-center justify-between p-2 border rounded'
      initial={{ opacity: 1 }}
      animate={{ opacity: 1.3 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={`flex-1 cursor-pointer ${
          task.completed ? 'line-through text-gray-400' : ''
        }`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.text}
      </div>
      <motion.button
        onClick={() => deleteTask(task.id)}
        className='text-red-500 hover:text-red-900 ml-4 '
        whileHover={{ scale: 1.4 }}
        transition={{ duration: 0.4 }}
      >
        <MdDelete />
      </motion.button>

      <motion.button
      className='text-green-500 hover:text-green-800 ml-4 '
        onClick={handleCheck}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
      >
        <CiCircleCheck />
      </motion.button>
    </motion.div>
  )
}

export default Item

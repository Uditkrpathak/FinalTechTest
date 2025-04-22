import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { motion } from 'framer-motion'
import { CiCirclePlus } from 'react-icons/ci'
const Form = ({ addTask }) => {
  const { text, setText } = useContext(UserContext)

  const handleSubmit = e => {
    e.preventDefault()
    if (text.trim()) {
      addTask(text)
      setText('')
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className='mb-4 flex gap-2'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.input
        type='text'
        className='border px-3 py-1 rounded w-full bg-gray-800 text-white'
        placeholder='Add a task.'
        value={text}
        onChange={e => setText(e.target.value)}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.button
        className='bg-black text-white px-4 py-1 rounded font-bold flex gap-1 items-center justify-center'
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <CiCirclePlus /> Add
      </motion.button>
    </motion.form>
  )
}

export default Form

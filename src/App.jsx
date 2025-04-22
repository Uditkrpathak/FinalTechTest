import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { UserContext } from './Context/UserContext'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';  


const App = () => {
  const {tasks,setTasks,addTask,toggleComplete,deleteTask} = useContext(UserContext);
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
       <Route path='/' element={<Home
                     tasks={tasks}
                     setTasks={setTasks}
                     addTask={addTask}
                     toggleComplete={toggleComplete}
                     deleteTask={deleteTask}
       />} />
      </Routes>
    </Router>
  )
}

export default App

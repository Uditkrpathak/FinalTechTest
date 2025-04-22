                import React, { useContext } from 'react';
                import Form from '../Components/Form';
                import List from '../Components/List';
                import { UserContext } from '../Context/UserContext';
                import { BiTask } from 'react-icons/bi';
                import { motion } from 'framer-motion';

                const Home = () => {
                const {
                tasks,
                setTasks,
                addTask,
                deleteTask,
                toggleComplete,
                searchQuery,
                light,
                } = useContext(UserContext);

                const filteredTasks = tasks.filter(task =>
                task.text.toLowerCase().includes(searchQuery.toLowerCase())
                );

                return (
                <motion.div
                className={`min-h-screen py-12 px-4 ${light ? 'bg-black text-black' : 'bg-gradient-to-br from-[#585487] to-[#70a379]'}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                >
                <motion.div
                className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6"
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                >
                <div className="flex items-center justify-between mb-6">
                <div className="flex items-center justify-center gap-3 text-3xl font-extrabold text-gray-800">
                <BiTask className="text-[#706D54]" />
                <span className="md:text-3xl text-xl">Task Manager</span>
                </div>
                </div>

                <Form addTask={addTask} />


                {tasks.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-6">
                <button
                onClick={() => {
                                const updated = tasks.map(task => ({ ...task, completed: true }));
                                setTasks(updated);
                }}
                className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition"
                >
                Mark All
                </button>
                <button
                onClick={() => {
                                const updated = tasks.map(task => ({ ...task, completed: false }));
                                setTasks(updated);
                }}
                className="bg-yellow-500 text-black px-4 py-1 rounded hover:bg-yellow-600 transition"
                >
                Unmark All
                </button>
                
                </div>
                )}

                
                <div className="mt-6">
                <h2 className="text-xl font-bold text-gray-700 mb-3">Your Tasks</h2>
                <List
                tasks={filteredTasks}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
                />
                </div>
                </motion.div>
                </motion.div>
                );
                };

                export default Home;

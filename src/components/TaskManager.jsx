import React, { useState } from 'react'
import { CiTrash } from "react-icons/ci";
import { TiTick } from "react-icons/ti";

export default function TaskManager() {

    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
    const [filter, setFilter] = useState('all');

    const handleAddTask = () => {
        if (taskInput.trim() !== '') {
            const newTask = {
                id: Date.now(), // Unique ID for each task
                text: taskInput,
                completed: false
            };
            setTasks(prevTasks => [...prevTasks, newTask]);
            setTaskInput('');
        }
    };

    const handleLinethrough = (id) => {
        setTasks(prevTasks => prevTasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const handleDeleteTask = (id) => {
        setTasks(prevTasks =>
            prevTasks.filter(task => task.id !== id)
        );
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed
        if (filter === 'pending') return !task.completed
        return true
    })

    const handleClearCompleted = () => {
        setTasks(prevTasks => prevTasks.filter(task => !task.completed))
    }

    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = tasks.filter(task => !task.completed).length;

    return (
        <>
            <div className='m-auto mt-10 flex flex-col items-center justify-center p-6 space-y-4 md:space-y-6 sm:p-8 w-full bg-white rounded-lg '>
                <div className=" px-6  mx-auto lg:py-0 max-w-[750px]  w-full ">
                    <div className="w-full bg-white   dark:border p-10 dark:bg-gray-800 dark:border-gray-700 shadow rounded-lg">
                        <div className="block text-xl font-bold mb-6 ">
                            <h2>  My Task Manager</h2>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-4 border-b-1 border-gray-100 pb-4 ">
                            <input
                                id="taskInput"
                                name="taskInput"
                                value={taskInput}
                                onChange={(e) => setTaskInput(e.target.value)}
                                placeholder="Enter a new task..."
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleAddTask();
                                    }
                                }}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                            <button className="bg-blue-500 text-white px-4 py-2 rounded " onClick={handleAddTask}>+</button>
                        </div>

                        <div className="mt-6">
                            <h3 className="flex justify-between text-lg font-semibold mb-4">My Tasks <span>Total tasks: {tasks.length}</span></h3>
                            <ul className="space-y-2">
                                {filteredTasks.map((task) => (<li
                                    key={task.id}
                                    className={`flex justify-between items-center bg-gray-50 p-2 rounded text-sm  ${task.completed ? 'line-through text-gray-400 opacity-70' : ''}`} >{task.text}

                                    <span className='flex justify-between items-center gap-2'>
                                        <button className='text-green-500 cursor-pointer' onClick={() => handleLinethrough(task.id)}><TiTick /></button>
                                        <button onClick={() => handleDeleteTask(task.id)} className="text-red-500 hover:text-red-700 cursor-pointer"><CiTrash /></button>
                                    </span>
                                </li>))}

                            </ul>
                            {filteredTasks.length === 0 && (
                                <p>No tasks found.</p>
                            )}
                        </div>
                        <div className="flex justify-between mt-4 text-sm">
                            <span>Total: {tasks.length}</span>
                            <span>Completed: {completedTasks}</span>
                            <span>Pending: {pendingTasks}</span>
                        </div>
                        <span className="flex items-center justify-start text-sm text-gray-600 dark:text-gray-400 mt-4 gap-2">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" onClick={() => setFilter('all')}>All</button>
                            <button className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer" onClick={() => setFilter('completed')}>Completed</button>
                            <button className="bg-yellow-500 text-white px-4 py-2 rounded cursor-pointer" onClick={() => setFilter('pending')}>Pending</button>
                            <button className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer" onClick={handleClearCompleted}>Clear Completed</button>
                        </span>
                    </div>

                </div>
            </div>
        </>
    )
}

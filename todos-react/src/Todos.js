import React, { useEffect, useState } from "react";
import todoService from './services/todoService';
import {useParams} from 'react-router-dom';

const Todos = () =>{
    const { username } = useParams();
    const [todos,setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        setTodos(todoService.getAllTodos());
    }, []);

    const handleToggleComplete = () => {
        console.log('I  will implement tommorrow')
    }
    const filteredTodos = todoService.getFilteredTodos(filter);

    return (
        <div>
            <h1> {username} Todos</h1>
       

        <ul>
            {filteredTodos.map(todo => (
                <li key={todo.id}>
                    <input 
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleToggleComplete(todo.id)}
                    />
                   <span>
                     {todo.text}
                   </span>
                   <button>Delete</button>
                </li>
            ))}
        </ul>
        </div>
    );
};

export default Todos;
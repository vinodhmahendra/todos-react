import React, { useEffect, useState } from "react";
import todoService from './services/todoService';
import { useParams ,Link ,useNavigate} from 'react-router-dom';
import authService from "./services/authService";

const Todos = () => {
    const { username } = useParams();
    const navigate = useNavigate();
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        setTodos(todoService.getAllTodos());
    }, []);

    const handleAddTodo = (e) => {
        e.preventDefault();
        // console.log(`handleAddTodo called`);
        if (newTodo.trim()) {
            todoService.addTodo(newTodo.trim());
            setTodos(todoService.getAllTodos());
            setNewTodo('');
        }
    }

    const handleToggleComplete = (id) => {
        const todo = todos.find(t => t.id === id);
        todoService.updateTodo(id, { completed: !todo.completed });
        setTodos(todoService.getAllTodos());

    }

    const handleDeleteTodo = (id) => {
        // console.log('id:', id);
        todoService.deleteTodo(id);
        setTodos(todoService.getAllTodos()); // update the virtual dom
    }

    const handleLogout = () => {
        authService.logout();
        navigate('/');
    };

    const filteredTodos = todoService.getFilteredTodos(filter);

    return (
        <div>
            <h1> {username} Todos</h1>
            <Link to={`/welcome/${username}`}> Back to Welcome</Link>
            <button onClick={handleLogout}>Logout</button>


            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    placeholder="Add new todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button type="submit">Add Todo</button>

            </form>


            <div>
                <button onClick={() => setFilter("all")}>All</button>
                <button onClick={() => setFilter("active")}>Active</button>
                <button onClick={() => setFilter("completed")}>Completed</button>
            </div>

            <ul>
                {filteredTodos.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggleComplete(todo.id)}
                        />
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.text}
                        </span>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todos;
import React from "react";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

export const Contacts = () => {

    
/*     const host = "https://playground.4geeks.com/todo";
    const user = "alvillalta";

    // State variables
    const [newTask, setNewTask] = useState("");
    const [editTask, setEditTask] = useState("");
    const [editCompleted, setEditCompleted] = useState(false);
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState({})
    const [isEdited, setIsEdited] = useState(false);

    useEffect(() => {
        getTodos();
    }, [])

    // Fetch
    const postUser = async () => {
        const uri = `${host}/users/${user}`;
        const options = { method: "POST" };
        try {
            const response = await fetch(uri, options);
            if (response.ok) {
                console.log("USER CREATED ¡Reload now!");
            }
            else console.error(response.status, " error");
        }
        catch {
            console.error("Error creating a user");
        }
    }

    const getTodos = async () => {
        const uri = `${host}/users/${user}`;
        const options = { method: "GET" };
        try {
            const response = await fetch(uri, options);
            if (response.ok) {
                console.log("Todos got successfully");
            }
            else if (response.status === 404) {
                return postUser();
            } else console.error(response.status, " error");
            const todoJson = await response.json();
            setTodos(todoJson.todos);
        }
        catch {
            console.error("Error getting todos");
        }
    }

    const postTodo = async (todoToSend) => {
        const uri = `${host}/todos/${user}`;
        const options = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(todoToSend)
        };
        try {
            const response = await fetch(uri, options);
            getTodos();
            if (response.ok) {
                console.log("Todo posted successfully");
            }
            else console.error(response.status, " error");
        }
        catch {
            console.error("Error posting todos");
        }
    }

    const deleteTodo = async (todoId) => {
        const uri = `${host}/todos/${todoId}`;
        const options = { method: "DELETE" };
        try {
            const response = await fetch(uri, options);
            getTodos();
            if (response.ok) {
                console.log("Todo deleted successfully");
            } else console.error("Error ", response.status);
        }
        catch {
            console.error("Error deleting todos");
        }
    }

    const putTodo = async (todoId, todoToModify) => {
        const uri = `${host}/todos/${todoId}`;
        const options = {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(todoToModify)
        };
        try {
            const response = await fetch(uri, options);
            getTodos();
            if (response.ok) {
                console.log("Todo put successfully");
            } else console.error("Error ", response.status);
        }
        catch {
            console.error("Error putting todo");
        }
    }

    // Event Handlers
    const handleNewTask = event => setNewTask(event.target.value);
    const handleEditTask = event => setEditTask(event.target.value);
    const handleEditCompleted = event => setEditCompleted(event.target.checked);

    const handleSubmitTodos = (event) => {
        event.preventDefault();
        const todoToSend = {
            "label": newTask,
            "is_done": false,
        }
        postTodo(todoToSend);
        setNewTask("");
    };

    const handleDeleteTodo = (todoItem) => {
        deleteTodo(todoItem.id);
    }

    const handleEditTodo = (todoItem) => {
        setIsEdited(true);
        setEditTodo(todoItem);
        setEditTask(todoItem.label);
        setEditCompleted(todoItem.is_done);
    }

    const handleCancel = () => {
        setIsEdited(false);
        setEditTodo({});
        setEditTask("");
        setEditCompleted(false);
    }

    const handleSubmitEdit = (event) => {
        event.preventDefault();
        const todoToSend = {
            "label": editTask,
            "is_done": editCompleted
        };
        putTodo(editTodo.id, todoToSend);
        setIsEdited(false);
    } */

    return (
        <div className="mt-5">
            <div className="container d-flex justify-content-center">
                <div className="col-8 d-flex justify-content-between">
                    <h3>Contacts</h3>
                    <Link to="/contacts/add-contact">
                        <span>Add Contact</span>
                    </Link>
                </div>
            </div>
            <div className="container d-flex justify-content-center">
                <div className="col-8">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src="https://randomuser.me/api/portraits/women/10.jpg" className="img-fluid rounded-circle" />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Hola</p>
                                            <p className="card-text">Hola</p>
                                            <p className="card-text">Hola</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 gap-2">
                                        <button type="submit" className="btn btn-secondary mx-3"><i class="fa-solid fa-pen"></i></button>
                                        <button type="submit" className="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
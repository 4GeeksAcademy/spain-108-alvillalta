import React from "react";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

import { getAgenda, deleteContact } from "../services.js"

export const Contacts = () => {

    const { store, dispatch } = useGlobalReducer();
    const contacts = store.contacts;

    /*    // State variables
       const [newTask, setNewTask] = useState("");
       const [editTask, setEditTask] = useState("");
       const [editCompleted, setEditCompleted] = useState(false);
       const [editTodo, setEditTodo] = useState({})
       const [isEdited, setIsEdited] = useState(false); */

    useEffect(() => {
        const getAgendaInComponent = async () => {
            const contacts = await getAgenda();
            if (!contacts) {
                console.error("Error in Contact component");
            }
            else dispatch({
                type: "get-agenda",
                payload: contacts
            });
        }
        getAgendaInComponent();
    }, [])

    // Handlers
    const handleDeleteContact = async (contactItem) => {
        const contacts = await deleteContact(contactItem.id);
        if (!contacts) {
            console.error("Error in Contact component");
        }
        else dispatch({
            type: "delete-contact",
            payload: contacts
        });
    }

    /*  // Event Handlers
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
                        {contacts.map((item) => {
                            return (
                                <li key={item.id} className="list-group-item">
                                    <div className="card mb-3">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src="https://randomuser.me/api/portraits/women/10.jpg" className="img-fluid rounded-circle" />
                                            </div>
                                            <div className="col-md-4">
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.name}</h5>
                                                    <p className="card-text">{item.email}</p>
                                                    <p className="card-text">{item.phone}</p>
                                                    <p className="card-text">{item.address}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-4 gap-2">
                                                <button type="submit" className="btn btn-secondary mx-3"><i class="fa-solid fa-pen"></i></button>
                                                <button onClick={() => handleDeleteContact(item)} type="submit" className="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import useGlobalReducer from "../../../hooks/useGlobalReducer.jsx";

import { putContact } from "../../../services/contact-services.js"


export const EditContact = () => {

    // Navigate
    const navigate = useNavigate();

    // Global state variables
    const { store, dispatch } = useGlobalReducer();
    const contactToEdit = store.contactToEdit;

    // Local state variables
    const [name, setName] = useState(contactToEdit.name);
    const [email, setEmail] = useState(contactToEdit.email);
    const [phone, setPhone] = useState(contactToEdit.phone);
    const [address, setAddress] = useState(contactToEdit.address);

    // Controlled inputs
    const handleName = event => setName(event.target.value);
    const handleEmail = event => setEmail(event.target.value);
    const handlePhone = event => setPhone(event.target.value);
    const handleAddress = event => setAddress(event.target.value);

    // Handlers
    const handleSubmitEditContact = async (event) => {
        event.preventDefault();
        const editedContact = {
            "name": name,
            "email": email,
            "phone": phone,
            "address": address,
            "id": contactToEdit.id
        }
        const contacts = await putContact(editedContact);
        if (!contacts) {
            console.error("Error in AddContact component");
        }
        else {
            dispatch({
                type: "get-agenda",
                payload: contacts
            });
            navigate("/contacts");
        }
    }

    const handleCancel = () => {
        navigate("/contacts");
    }

    return (
        <div className="mt-5">
            <div className="container d-flex justify-content-center">
                <div className="col-8 d-flex justify-content-between">
                    <h3>Edit contact</h3>
                    <Link to="/contacts">
                        <span>Back to Contacts</span>
                    </Link>
                </div>
            </div>
            <div className="container d-flex justify-content-center">
                <div className="col-8">
                    <form onSubmit={handleSubmitEditContact}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Your name here"
                                value={name} onChange={handleName} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" id="email" placeholder="Your email here"
                                value={email} onChange={handleEmail} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" className="form-control" id="phone" placeholder="Your phone here"
                                value={phone} onChange={handlePhone} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="Your address here"
                                value={address} onChange={handleAddress} />
                        </div>
                        <div className="py-3 g-3">
                            <button type="submit" className="btn btn-primary mx-3">Submit</button>
                            <button onClick={handleCancel} type="button" className="btn btn-primary bg-secondary">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
import react from "react";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import useGlobalReducer from "../hooks/useGlobalReducer";
import { getAgenda } from "../services/contacts.js";


export const ContactList = () => {
  const { store, dispatch } = useGlobalReducer();
  const contacts = store.contacts

  useEffect(() => {
    const get = async () => {
      const contacts = await getAgenda();
      dispatch({
        type: "get_contacts",
        payload: contacts
      })
    };
    get();
  }, [])

  return (
    <div className="col-10 col-lg-8 mx-auto">
      <div className="container">
        <div className="d-flex justify-content-between justify-content-md-start gap-3 gap-md-5 align-items-center pt-4 pb-3">
          <h2 className="text-light">Contacts</h2>
          <Link to="/add-contact" className="text-decoration-none">
            <div className="py-1 px-3 rounded text-light bg-secondary">Add Contact</div>
          </Link>
        </div>
      </div>
      <div className="container">
        <ul className="list-group text-start">
          {contacts.map((item) => {
            return (
              <li key={item.id} className="list-group-item w-md-50 p-0 border-0 rounded mb-3">
                <div className="card bg-light">
                  <div className="row g-0 d-flex justify-content-start align-items-center">
                    <div className="col-md-3 col-lg-3 d-flex justify-content-center justify-content-md-start pt-3 py-md-2 ps-md-4">
                      <img src="https://randomuser.me/api/portraits/women/2.jpg" className="img-fluid rounded-circle" />
                    </div>
                    <div className="col-md-6 pt-3 pb-md-3">
                      <h4 className="text-center text-md-start pb-0 mb-1 p-md-0">{item.name}</h4>
                      <div className="d-flex justify-content-center justify-content-md-start">
                        <ul className="list-group">
                          <li className="list-group-item pb-1 p-md-0 m-0 border-0 bg-light">
                            <i className="fa-solid fa-location-dot pe-2"></i>
                            <span className="ps-1">{item.address}</span>
                          </li>
                          <li className="list-group-item py-1 p-md-0 m-0 border-0 bg-light">
                            <i className="fa-solid fa-phone pe-2"></i>
                            {item.phone}
                          </li>
                          <li className="list-group-item pt-1 p-md-0 m-0 border-0 bg-light">
                            <i className="fa-solid fa-envelope pe-2"></i>
                            {item.email}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center justify-content-md-end py-2 pe-md-5 mb-2 m-md-0 gap-3">
                      <button type="button" className="btn btn-secondary"><i class="fa-solid fa-pen"></i></button>
                      <button type="button" className="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
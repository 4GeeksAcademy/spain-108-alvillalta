import React from "react";
import { Link } from "react-router-dom";

export const AddContact = () => {
    return (
        <div className="mt-5">
            <div className="container d-flex justify-content-center">
                <div className="col-8 d-flex justify-content-between">
                    <h3>Add a new contact</h3>
                    <Link to="/contacts">
                        <span>Back to Contacts</span>
                    </Link>
                </div>
            </div>
            <div className="container d-flex justify-content-center">
                <div className="col-8">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Your name here" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" id="email" placeholder="Your email here" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" className="form-control" id="phone" placeholder="Your phone here" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="Your address here" />
                        </div>
                        <div className="py-3 g-3">
                            <button type="submit" className="btn btn-primary mx-3">Submit</button>
                            <button type="button" className="btn btn-primary bg-secondary">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
import react from "react";

export const AddContact = () => {
    return (
        <div className="col-10 col-md-8 col-lg-6 mx-auto text-secondary">
            <div className="container">
                <div className="d-flex justify-content-start align-items-center pt-4 pb-3">
                    <h2 className="text-light mb-0">Add a new contact</h2>
                </div>
            </div>
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name
                            <span className="text-warning ps-1">*</span>
                        </label>
                        <input type="text" className="form-control" id="name" placeholder="Your name here" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email
                            <span className="text-warning ps-1">*</span>
                        </label>
                        <input type="text" className="form-control" id="email" placeholder="Your email here" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone
                            <span className="text-warning ps-1">*</span>
                        </label>
                        <input type="text" className="form-control" id="phone" placeholder="Your phone here" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address
                            <span className="text-warning ps-1">*</span>
                        </label>
                        <input type="text" className="form-control" id="address" placeholder="Your address here" />
                    </div>
                    <div className="d-flex justify-content-end pt-1 mb-3 gap-3">
                        <button type="submit" className="btn btn-warning py-1 px-3 text-dark">Save</button>
                        <button type="reset" className="btn btn-secondary py-1 px-3 text-light">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
import React from "react";

export default function Contact() {
  return (
    <div className="contact">
      <div className="content-contact1">
        <div className="content2">
          <div className="contact-top">
            <h1>Contact Me</h1>
            <p>Hi there contact me about anything you have in mind</p>
          </div>
          <form className="forms">
            <div className="form">
              <div className="email">
                <div className="input-form">
                  <label className="label">First Name</label>
                  <input
                    required
                    type="firstname"
                    placeholder="Enter your first name"
                    className="form-input-1"
                    name="first_name"
                    id="first_name"
                  />
                </div>
                <div className="input-form">
                  <label className="label">last name </label>
                  <input
                  required
                    type="name"
                    placeholder="Enter your last name"
                    className="form-input-1"
                    name="last_name"
                    id="last_name"
                  />
                </div>
              </div>
              <div className="input-form mail">
                <label className="label">Email</label>
                <input
                required
                className="form-input-1"
                  type="email"
                  placeholder="yourname@email.com"
                  id="email"
                />
              </div>
              <div className="label">
                <label className="label">Message</label>
                <textarea
                  
                  id="message"
                  placeholder="Hello there, this is some text in a text area"
                ></textarea>
              </div>
            </div>
            <div className="radio">
              <div className="check">
                <input type="checkbox" />
                <label id="checklab">
                   You agree to providing your contact to ellams george who may
                  contact you
                  
                </label>
              </div>

              <button id="btn_submit">Send message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Contact() {
  return (
    <div className="contact">
      <div className="content-contact1">
        <div className="content2">
          <div className="contact-top">
            <h1>Contact Me</h1>
            <p>hey there contact me about anything you have in mind</p>
          </div>
          <form className="forms">
            <div className="form">
              <div className="email">
                <div className="input-form">
                  <label className="label">First Name</label>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="form-input-1"
                    name="email"
                    id="first_name"
                  />
                </div>
                <div className="input-form">
                  <label className="label">last name </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-input-1"
                    name="password"
                    id="last_name"
                  />
                </div>
              </div>
              <div className="input-form">
                <label className="label">Email</label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="form-input"
                  name="passwordConfirm"
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
                <label>
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

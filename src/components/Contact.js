import React from "react";
const MyName = "Ellams George"
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
                  <label  htmlFor="firstname" className="label">First Name</label>
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
                  <label  htmlFor="lastname" className="label">last name </label>
                  <input
                    required
                    type="lastname"
                    placeholder="Enter your last name"
                    className="form-input-1"
                    name="last_name"
                    id="last_name"
                  />
                </div>
              </div>
              <div className="input-form mail">
                <label  htmlFor="email" className="label">Email</label>
                <input
                  required
                  className="form-input-1"
                  type="email"
                  placeholder="yourname@email.com"
                  id="email"
                />
              </div>
              <div className="label">
                <label  htmlFor="message" className="label">Message</label>
                <textarea
                  required
                  id="message"
                  placeholder="send me a message and i'll reply as soon as possible"
                ></textarea>
              </div>
            </div>
            <div className="radio">
              <div className="check">
                <input type="checkbox" />
                <label  htmlFor="checkbox" id="checklab">
                  You agree to providing your contact to {MyName} who may
                  contact you
                </label>
              </div>

              <button id="btn__submit">Send message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

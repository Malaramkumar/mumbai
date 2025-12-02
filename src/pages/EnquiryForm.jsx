import React, { useState } from "react";
import "./EnquiryForm.scss"
function EnquiryForm() {
  const [open, setOpen] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f9819894-908f-4730-be85-674b054a1a31");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setOpen(false);
    }
  };

  return (
    <>
    <>
      {/* Floating Button */}
      <button className="open-enquiry-btn" onClick={() => setOpen(true)}>
        Enquiry Box
      </button>

      {/* Modal */}
      {open && (
        <div className="modal-overlay">
          <div className="modal-content">

            {/* Close Button */}
            <button className="close-modal-btn" onClick={() => setOpen(false)}>
              ×
            </button>

            {/* Form */}
            <form className="enquiry-form-container" onSubmit={onSubmit}>
              <div className="input-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="input-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  pattern="[0-9]{10}"
                  required
                />
              </div>

              <div className="input-group">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Type your message..."
                  required
                ></textarea>
              </div>

              <button className="submit-btn" type="submit">
                Submit Form
              </button>
            </form>
          </div>            
        </div>
      )}
    </>
     <div className="callback-btn">
      <a href="tel:+9196771 11787">📞 Request a Call Back</a>
    </div>
    </>
  );
}

export default EnquiryForm;

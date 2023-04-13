import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [contactData, setContactData] = useState({});
  const [errorMsg, setErrorMsg] = useState();
  const [successMsg, setSuccessMsg] = useState(false);

  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  };

  const isValidPhone = (phone) => {
    return /^[6-9]\d{9}$/.test(phone);
  };

  const validateField = (field, value) => {
    if (value.length <= 0) {
      return (
        <>
          <span className="capitalize">{field}</span> is required.
        </>
      );
    } else {
      if (field === "email") {
        if (!isValidEmail(value)) return "Invalid Email.";
      } else if (field === "phone") {
        if (!isValidPhone(value)) return "Invalid Phone Number.";
      } else {
        return "";
      }
    }
  };

  const handleBlur = (event) => {
    setErrorMsg(validateField(event.target.name, event.target.value));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContactData({
      ...contactData,
      [name]: value
    });

    if (name === "phone") {
      setContactData({
        ...contactData,
        phone: value.replace(/\D/, "")
      });
    }
  };

  const handleSubmit = (e) => {
    let isValid = false;
    e.preventDefault();

    if (
      contactData.name === "" ||
      contactData.name === undefined ||
      contactData.phone === "" ||
      contactData.phone === undefined ||
      contactData.email === "" ||
      contactData.email === undefined ||
      contactData.message === "" ||
      contactData.message === undefined
    ) {
      setSuccessMsg(false);
      isValid = false;
    } else {
      setSuccessMsg(true);
      isValid = true;
    }
    return isValid;
  };

  return (
    <div>
      <div className="container-1">
        <div className="contact-box">
          <div className="contact-leftside">
            <h3>𝒞𝑜𝓃𝓉𝒶𝒸𝓉 𝒰𝓈!</h3>
            <form
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              autoComplete="on"
            >
              <div className="contact-row">
                <div className="contact-group">
                  {!successMsg ? (
                    <>
                      <div id="errormessage" className={errorMsg ? "show" : ""}>
                        {errorMsg}
                      </div>

                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={contactData.name || ""}
                        onChange={(e) => handleChange(e)}
                        onBlur={handleBlur}
                      />

                      <div className="contact-group">
                        <input
                          name="phone"
                          type="text"
                          maxLength={10}
                          placeholder="Phone"
                          onBlur={handleBlur}
                          value={contactData.phone || ""}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>

                      <div className="contact-group">
                        <input
                          name="email"
                          type="email"
                          placeholder="Email"
                          value={contactData.email || ""}
                          onChange={(e) => handleChange(e)}
                          onBlur={handleBlur}
                        />
                      </div>

                      <div className="contact-group">
                        <textarea
                          name="message"
                          type="text"
                          placeholder="Message"
                          value={contactData.message || ""}
                          onChange={(e) => handleChange(e)}
                          onBlur={handleBlur}
                          rows="3"
                        />
                      </div>
                      <p>
                        <input
                          type="submit"
                          className="button"
                          value="Submit Now"
                        />
                      </p>
                    </>
                  ) : (
                    <div className="show" id="sendmessage">
                      Thank you! We have recieved your message!
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
          <div>
            <div className="contact-right">
              <h2>𝑹𝒆𝒂𝒄𝒉 𝑼𝒔 𝑯𝒆𝒓𝒆!</h2>
              <table>
                <tr className="data1">
                  <td>Email:</td>
                  <td>fakeemail@gmail.com</td>
                </tr>
                <tr className="data2">
                  <td>Phone:</td>
                  <td>416-237-3943</td>
                </tr>
                <tr className="data3">
                  <td>Address:</td>
                  <td>
                    Street
                    <br />
                    City, province
                    <br />
                   Zip{" "}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

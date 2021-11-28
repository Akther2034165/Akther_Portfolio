import React from "react";
import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const [state, handleSubmit] = useForm("mlezrnkv");
  if (state.succeeded) {
    return (
      <h2 className="text-center text-success mb-5">
        Thanks for Contacting Me
      </h2>
    );
  }
  return (
    <div>
      <section className="contact py-5" id="contact">
        <div className="container" py-4>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2 className="fw-bold mb-4">CONTACT ME</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="contact-item d-flex mb-3">
                <div className="icon fs-4 text-danger">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="text ms-3">
                  <h3 className="fs-5">Email</h3>
                  <p className="text-muted">dev.akther@email.com</p>
                </div>
              </div>
              <div className="contact-item d-flex mb-3">
                <div className="icon fs-4 text-danger">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="text ms-3">
                  <h3 className="fs-5">Phone</h3>
                  <p className="text-muted">+8801610945101</p>
                </div>
              </div>
              <div className="contact-item d-flex mb-3">
                <div className="icon fs-4 text-danger">
                  <i className="fas fa-home"></i>
                </div>
                <div className="text ms-3">
                  <h3 className="fs-5">Home</h3>
                  <p className="text-muted">
                    Khowaznagar,Chittagong Bangladesh
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="contact-form">
                <form
                  action="https://formspree.io/f/mlezrnkv"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-lg-6 mb-4">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control form-control-lg fs-6 border-0 shadow-sm"
                      />
                    </div>
                    <div className="col-lg-6 mb-4">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="form-control form-control-lg fs-6 border-0 shadow-sm"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 mb-4">
                      <label htmlFor="Subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control form-control-lg fs-6 border-0 shadow-sm"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 mb-4">
                      <label htmlFor="message">Subject</label>
                      <textarea
                        rows="4"
                        id="message"
                        name="message"
                        className="form-control form-control-lg fs-6 border-0 shadow-sm"
                      ></textarea>
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <button
                        type="submit"
                        className="btn btn-danger px-3"
                        disabled={state.submitting}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

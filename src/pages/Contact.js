import React from 'react';

export default function Contact() {
  return (
    <div className="container text-center">
      <div className="column col-6-md col-3-sm">
        <div className="card">
          <form>
            <div className="form-group">
              <h2 className="title"> Contact Me! </h2>
              <label for="formGroupExampleInput">Your name</label>
              <input type="text" className="form-name" placeholder="Samuel"></input>
              <div className="form-group">
                <label for="formGroupExampleInput2">Your Last name</label>
                <input type="text" className="form-lastName" placeholder="Montague"></input>
                <label for="formGroupExampleInput2">Your Message</label>
                <input type="text" className="form-message" placeholder="message"></input>
                <button className="submit-button btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
}

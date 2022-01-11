import Aos from "aos";
import React from "react";
import Slide from "react-reveal/Slide";

const Contact = () => {
  return (
    <Slide top>
      <div className="contact  container">
        <h1>Contact</h1>
        <div className="row">
          <div classNme="col">
            <p className="ml-3 ">Hi, please leave me a message and I will reply right away</p>
            <form className="pa4 black-80 ">
              <div className="contact-form  ">
                <label for="email" class="f6 b db mb2">
                  Message
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  className="db border-box hover-black w-100 measure ba b--black-20 pa5 br2 mb3 text-center "
                  aria-describedby="comment-desc"
                  placeholder="Leave message here"
                ></textarea>
                <input
                  className="f6 link btn btn-secondary  db contact-btn col"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
            </div>
          </div>
      </div>
    </Slide>
  );
};
export default Contact;

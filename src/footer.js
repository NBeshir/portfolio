import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="wave-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#494949"
              fill-opacity="1"
              d="M0,96L48,106.7C96,117,192,139,288,154.7C384,171,480,181,576,170.7C672,160,768,128,864,128C960,128,1056,160,1152,170.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

      <footer class="pv4 ph3 ph5-m ph6-l mid-gray footer">
      
        <div class="tc mt3">
          <a
            href="https://github.com/NBeshir"
            className="f6 dib ph2 link mid-gray dim"
          >
            <i className="fa fa-github"></i> |
          </a>
          <a
            href="https://www.linkedin.com/in/nejmiya-beshir-0631ba36/"
            className="f6 dib ph2 link mid-gray dim"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
        <div>
          <small class="f6 db tc">
            © 2021 <b class="ttu">Nejmiya Beshir</b>. All Rights Reserved
          </small>
        </div>
      </footer>
    </div>
  );
};
export default Footer;

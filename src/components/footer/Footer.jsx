import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo/logo.png";

function Footer(props) {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className="footer">
      <div className="shape"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer__bottom">
              <Link to="/" className="logo">
                <img src={logo} alt="Ancestors" />
              </Link>

              <div className="center mb--30">
                <ul className="list">
                  <li>
                    <Link to="/">Evolutions</Link>
                  </li>
                  <li>
                    <Link to="/share-tree-flowers">Share</Link>
                  </li>
                  <li>
                    <Link to="/flowers-market">Flowers Marketplace</Link>
                  </li>
                  <li>
                    <a href="https://pulsarforge.io">Developed at pulsarforge.io</a>
                  </li>
                </ul>
                <h5>Ancestors All Rights Reserved</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isVisible && (
        <Link to="#" onClick={scrollToTop} id="scroll-top">
          <span className="icon-arrow-top"></span>
        </Link>
      )}
    </footer>
  );
}

export default Footer;

import Nav from "./Nav";
import SocialMedias from "./SocialMedias";

import Logo from "../assets/icons/Logo";
import FooterBorderTop from "../assets/FooterBorderTop";

export default function Footer() {
  return (
    <footer>

      <div className="footer-container">
        <FooterBorderTop/>
        <div className="footer-nav-container">
          <Logo />
          <Nav />
        </div>
        <div className="footer-description">
          <div className="footer-description-text">
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’ re open 7 days a week.
            </p>
            <p>Copyright 2021. All Rights Reserved</p>
          </div>
          <SocialMedias />
        </div>
      </div>
    </footer>
  );
}

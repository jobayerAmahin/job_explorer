import React from "react";
import footerLogo from '../assets/footerIcon.png'
const Footer = () => {
  return (
    <div>
      <footer class="footer bg-base-200 text-base-content p-10">
        <aside>
          <img src={footerLogo} alt="" />
          <p>
            Job Explorer
            <br />
            Providing reliable job searching and hiring facilities
          </p>
        </aside>
        <nav>
          <h6 class="footer-title">Services</h6>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 class="footer-title">Company</h6>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 class="footer-title">Legal</h6>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

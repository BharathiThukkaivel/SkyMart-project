// import React from 'react';
// import styles from './footer.module.css'; // Import the CSS module
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className={styles["footer-distributed"]}> {/* Use styles from CSS module */}
//       <div className={styles["footer-right"]}>
//         <a href="#"><i className="fa fa-facebook"></i></a>
//         <a href="#"><i className="fa fa-twitter"></i></a>
//         <a href="#"><i className="fa fa-linkedin"></i></a>
//         <a href="#"><i className="fa fa-github"></i></a>
//       </div>
//       <div className={styles["footer-left"]}>
//         <p className={styles["footer-links"]}>
//           <a className={styles["link-1"]} href="#">Home</a>
//           <Link to='/aboutus'>Blog</Link>
//           <Link to='/tag/All'>Products</Link>
//           <Link to='/contact'>Contact</Link>
//         </p>
//         <p>SKYMART &copy; 2023</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// Footer.js

// Footer.js

import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">&copy; {currentYear} SKYMART</div>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

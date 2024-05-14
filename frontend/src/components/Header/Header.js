import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';
import classes from './header.module.css';
import logo from "../../assets/Images/logo.jpg";
// export default function Header({ shouldFixHeader }) {
//   const { user, logout } = useAuth();

//   const { cart } = useCart();

export default function Header() {
  const [shouldFixHeader, setShouldFixHeader] = useState(false);
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate(); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Change 100 to the scroll position you want
        setShouldFixHeader(true);
      } else {
        setShouldFixHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const goBack = () => {
    navigate(-1);
  };
  const goFront = () => {
    navigate(1);
  };
  return (
    <header className={`${classes.header} ${shouldFixHeader ? classes.fixed : ''}`}>
      <button onClick={goBack} className={classes.backButton}>Back</button> {/* Back button */}
      <div className={classes.container}>
        
      <img src={logo} alt="Logo" style={{ width: '130px', padding:'5px'}} />
        {/* <Link to="/" className={classes.logo}>
        SKYMART
        </Link> */}
        <div className={classes.logo}>
        SKYMART
        </div>
        <ul>
            <li>
              <Link to='/'>Home</Link>
              <Link to='/aboutus'>AboutUs</Link>
              <Link to='/contact'>Contact</Link>
            </li>
        </ul>
        <nav>
          <ul>
            {user ? (
              <li className={classes.menu_container}>
                <Link to="/dashboard">{user.name}</Link>
                <div className={classes.menu}>
                  <Link to="/profile">Profile</Link>
                  <Link to="/orders">Orders</Link>
                  <a onClick={logout}>Logout</a>
                </div>
              </li>
            ) : (
              <Link to="/login">Login</Link>
            )}

            <li>
              <Link to="/cart">
                Cart
                {cart.totalCount > 0 && (
                  <span className={classes.cart_count}>{cart.totalCount}</span>
                )}
              </Link>
            </li>    
          </ul>
          
        </nav>
        
      </div>
      <button onClick={goFront} className={classes.frontButton}>Forward</button>
    </header>
    
  );
}

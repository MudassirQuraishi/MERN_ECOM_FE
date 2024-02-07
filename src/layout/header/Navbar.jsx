import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import drop_down from '../../assets/dropdown_icon.png'
import logo from '../../assets/images/logo.png';
import cart_icon from '../../assets/images/shopping-bag.png';
import classes from './Navbar.module.css';
import { ShopContext } from '../../utils/context/ShopContext';
import { UserContext } from '../../utils/context/UserContext'

const Navbar = () => {
    const [menu, setMenu] = useState('');
    const { getTotalCartItem } = useContext(ShopContext)
    const menuRef = useRef();
    const userCtx = useContext(UserContext)

    const dropdownToggle = (e) => {
        menuRef.current.classList.toggle(classes['nav-menu-visible']);
        e.target.classList.toggle(classes['open'])
    }
    const loginButton = userCtx.token === null ? (
        <Link to='/login'>
            <button onClick={() => setMenu('')}>Login</button>
        </Link>
    ) : (<Link to='/profile' >
        <button onClick={() => { setMenu('') }}>Profile</button>
    </Link>)


    return (
        <header>
            <div className={`${classes.navbar}`}>
                <div className={classes['navbar-logo']}>
                    <img src={logo} alt="Quraishi's Clothing" />
                </div>
                <img onClick={dropdownToggle} className={classes["nav-dropdown"]} src={drop_down} alt="" />
                <ul ref={menuRef} className={`${classes['nav-menu']} `}>
                    <li onClick={() => setMenu('home')}><Link to='/'>Home</Link>{menu === 'home' ? <hr /> : <></>}</li>
                    <li onClick={() => setMenu('mens')}><Link to='/mens' >Mens</Link> {menu === 'mens' ? <hr /> : <></>}</li>
                    <li onClick={() => setMenu('womens')}><Link to='/womens' > Womens</Link> {menu === 'womens' ? <hr /> : <></>}</li>
                    <li onClick={() => setMenu('kids')}><Link to='/kids' >Kids</Link> {menu === 'kids' ? <hr /> : <></>}</li>
                    <li className={classes.dropdown}>
                        Collections
                        <ul className={classes.dropdownContent}>
                            <li><Link to='/winter' >Winter Collection</Link></li>
                            <li><Link to='/summer' >Summer Collection</Link></li>
                            <li><Link to='/fall'>Fall Collection</Link></li>
                        </ul>
                    </li>
                    <li onClick={() => setMenu('about-us')}><Link to='about-us'>About Us </Link>{menu === 'about-us' ? <hr /> : <></>}</li>
                </ul>

                <div className={classes['nav-login-cart']}>
                    {loginButton}
                    <Link to='/cart'><img src={cart_icon} alt="cart-icon" onClick={() => { setMenu('') }} /></Link>
                    <div className={classes['nav-cart-count']}>{getTotalCartItem()}</div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

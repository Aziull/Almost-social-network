import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg" alt="logo" />
            <div className={s.loginBlock}>
                {props.isAuth ?
                    <div> {props.login} - <button onClick={props.logout}> log out </button> </div> :
                    <NavLink to='/login'>Login</NavLink>}
                    
            </div>
        </header>
    );
}
export default Header;
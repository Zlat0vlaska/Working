import { Link, Outlet } from 'react-router-dom';
import classes from './UI/button/MyButton.module.css';
import React from 'react';

export default function Layout() {

    return (
        <>
            <header>
                <Link to="/" ><button onClick={() => { }} className={classes.userBtn}>ГЛАВНАЯ</button></Link>
                <Link to="/blog"><button onClick={() => { }} className={classes.userBtn}>БЛОГ</button></Link>
                <Link to="/users"><button onClick={() => { }} className={classes.userBtn}>Пользователи</button></Link>
            </header>
            <Outlet />
        </>
    );
}
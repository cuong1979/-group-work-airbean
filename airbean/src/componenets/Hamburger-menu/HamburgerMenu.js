import React from 'react';
import style from './Hamburger-menu.module.css'
import { useHistory } from 'react-router-dom';

function HamburgerMenu() {
    const history = useHistory();

    return(
        <div className={style.link}>
            <aside className={style.hamburger} onClick={()=>{ history.push('/nav')}}>
                <span className={style.stick}>
                </span>
            </aside>
        </div>
    )
}

export default HamburgerMenu;
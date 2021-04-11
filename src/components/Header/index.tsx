import React from 'react';
import cn from 'classnames';
import s from './header.module.scss';

function Header() {
    return (
        <>
            <header className={cn(s['header'])}>
                <div className={cn(s['container'])}>
                    калькулятор
                </div>
            </header>
        </>
    )
}

export default Header;

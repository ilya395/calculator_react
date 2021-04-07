import React from 'react';
import cn from 'classnames';
import s from './footer.module.scss';

function Footer() {
    return (
        <>
            <footer className={cn(s['footer'])}>
                <div className={cn(s['container'])}>
                    тест
                </div>
            </footer>
        </>
    )
}

export default Footer;
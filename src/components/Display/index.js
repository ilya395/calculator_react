import React, { useContext } from 'react';
import cn from 'classnames';
import s from './display.module.scss';
import Context from '../../context';

function Display() {

    const { rendering } = useContext(Context);

    return (
        <>
            <div className={cn(s['calc-block__display'])}>
                {rendering === null ? 0 : rendering}
            </div>
        </>
    );
}

export default Display;
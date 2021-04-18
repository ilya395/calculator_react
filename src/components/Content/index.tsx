import React, { useState, useContext, useEffect } from 'react';
import cn from 'classnames';
import s from './content.module.scss';

import Context from '../../context';

import Display from '../Display';
import Button from '../Button';

import { BUTTONS_ARRAY } from '../../constants';

function Content() {
    // const { buttonsArray } = useContext(Context);
    // console.log(buttonsArray)

    // const [allNumbers, setAllNumbers] = useState<number[]>([]);

    // useEffect(() => {
    //     buttonsArray ? setAllNumbers(buttonsArray) : setAllNumbers([]);
    // }, [buttonsArray]);
    return (
        <>
            <main className={cn(s['main'])}>
                <div className={cn(s['container'])}>
                    <div className={cn(s['calc-block__wrap'])} >
                        <Display />
                        <div className={cn(s['calc-block__numbers'])}>
                            {
                                BUTTONS_ARRAY.map((item, index) => <Button key={index} object={'number'} value={String(item)} />)
                            }
                        </div>
                        <div className={cn(s['calc-block__options'])}>
                            <Button object={'option'} value={'c'} />
                            <Button object={'option'} value={'ca'} />
                            <Button object={'option'} value={'+/-'} />
                        </div>
                        <div className={cn(s['calc-block__operations'])}>
                            <Button object={'operation'} value={'/'} />
                            <Button object={'operation'} value={'*'} />
                            <Button object={'operation'} value={'+'} />
                            <Button object={'operation'} value={'-'} />
                            <Button object={'operation'} value={'='} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Content;
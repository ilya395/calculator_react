import React, { useState } from 'react';
import cn from 'classnames';
import s from './content.module.scss';

import Display from '../Display';
import Button from '../Button';

function Content() {
    const [allNumbers, setAllNumbers] = useState<number[]>([9,8,7,6,5,4,3,2,1]);
    return (
        <>
            <main className={cn(s['main'])}>
                <div className={cn(s['container'])}>
                    <div className={cn(s['calc-block__wrap'])} >
                        <Display />
                        <div className={cn(s['calc-block__numbers'])}>
                            {
                                allNumbers.map((item, index) => <Button key={index} object={'number'} value={String(item)} />)
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
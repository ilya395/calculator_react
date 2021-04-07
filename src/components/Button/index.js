import React, { useState, useEffect, useContext } from 'react';
import cn from 'classnames';
import s from './button.module.scss';
import Context from '../../context';
import { ADD_OPERATION, ADD_VALUE, ADD_OPTION } from '../../store/actions';

function Button(props) {
    const { value, object } = props;

    const { dispatch } = useContext(Context);

    // const [componentClasses, setComponentClasses] = React.useState();
    const [objectData, setObjectData] = useState(object);
    const [numberFlag, setNumberFlag] = useState(false);


    useEffect(() => {
        if (object === 'number') {
            setNumberFlag(true);
        }
    }, [])

    const clicked = () => {
        // console.log('click on ', objectData);
        let type = null;

        if (objectData == 'number') {
            type = ADD_VALUE;
        }
        if (objectData == 'option') {
            type = ADD_OPTION;
        }
        if (objectData == 'operation') {
            type = ADD_OPERATION;
        }

        dispatch({
            type,
            payload: value,
        });
    }

    return (
        <>
            <button 
                className={cn(s['calc-block__button'], numberFlag ? s['calc-block__button_number'] : '')}
                onClick={clicked}
            >
                {value}
            </button>
        </>
    )
}

export default Button;
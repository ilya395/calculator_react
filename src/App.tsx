import React, { useReducer, useState, useEffect } from 'react';
import cn from 'classnames';
import s from './App.module.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

import { defaultReducer } from './store/reducer';
import { initialState } from './store/reducer';
import Context from './context';
import { BUTTONS_ARRAY } from './constants';
// const Context = require('./context');

import { StateType, ActionType } from './store/reducer';

interface ContextValue {
    value: string | number | null,
    operation: string | null,
    option: string | null,
    rendering: string | number | null,
    dispatch: any, // void
    buttonsArray: number[]
}

function App() {

    const [state, dispatch] = useReducer<React.Reducer<any, any>>(defaultReducer, initialState);

    const [val, setVal] = useState<ContextValue>({
        value: null, // state.value,
        operation: null, // state.operation,
        option: null, // state.option,
        rendering: null, // state.rendering,
        buttonsArray: [],
        dispatch
    });

    useEffect(() => {
        const { value, operation, option, rendering, buttonsArray } = state;
        setVal({
            value,
            operation,
            option,
            rendering,
            buttonsArray,
            dispatch
        });
    }, [state])

    return (
        <>
            <Context.Provider
                value={val}
            >
                <div className={cn(s['work-area'])}>
                    <Header />
                    <Content />
                    <Footer />
                </div>
            </Context.Provider>
        </>
    );
}

export default App;
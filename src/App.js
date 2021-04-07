import React, { useReducer } from 'react';
import cn from 'classnames';
import s from './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

import defaultReducer from './store/reducer';
import { initialState } from './store/reducer';
import Context from './context';

function App() {

    const [state, dispatch] = useReducer(defaultReducer, initialState);

    return (
        <>
            <Context.Provider
                value={
                    {
                        value: state.value,
                        operation: state.operation,
                        option: state.option,
                        rendering: state.rendering,
                        dispatch
                    }
                }
            >
                <div className='work-area'>
                    <Header />
                    <Content />
                    <Footer />
                </div>
            </Context.Provider>
        </>
    );
}

export default App;
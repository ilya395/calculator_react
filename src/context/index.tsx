import React from 'react';

interface ContextValue {
    value: string | number | null,
    operation: string | null,
    option: string | null,
    rendering: string | number | null,
    dispatch: any, // void
}

const Context = React.createContext<Partial<ContextValue>>({});

export default Context;
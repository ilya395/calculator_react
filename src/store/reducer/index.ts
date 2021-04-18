import {
    ADD_RESULT,
    RESET_RESULT,
    ADD_OPERATION,
    RESET_OPERATION,
    ADD_VALUE,
    RESET_VALUE,
    ADD_OPTION,
    RESET_OPTION
} from '../actions';
import { DISPLAY_LENGTH, BUTTONS_ARRAY } from '../../constants';

export interface StateType {
    result: number | null,
    operation: string | null,
    value: number | null,
    option: string | null,
    rendering: number | null, 
    buttonsArray: number[] | [],
}

export interface ActionType {
    type: string,
    payload: string
}

export const initialState: StateType = {
    result: null,
    operation: null,
    value: null,
    option: null,
    rendering: null,
    buttonsArray: BUTTONS_ARRAY
}

export function defaultReducer(state: StateType, action: ActionType) {
    switch (action.type) {
        case ADD_RESULT:
            return {...state, result: action.payload};

        case RESET_RESULT:
            return {...state, result: null};

        case ADD_OPERATION:
            // console.log(state.result, state.operation, state.value)
            if (state.result == null) {
                const number = state.value;
                const st = {
                    ...state,
                    result: number,
                    value: null,
                    operation: action.payload,
                    rendering: number
                };
                // console.log(st)
                return st;
            }
            if (state.operation == null || state.value == null) {
                const st = {
                    ...state,
                    operation: action.payload
                };
                return st;
            } 
            if (state.result && state.operation && state.value) {
                let resultValue = null;
                switch (state.operation) {
                    case '/':
                        if (state.result && state.value) {
                            resultValue = state.result / state.value;
                        }
                        break;
    
                    case '*':
                        if (state.result && state.value) {
                            resultValue = state.result * state.value;
                        }
                        break;
    
                    case '+':
                        if (state.result && state.value) {
                            resultValue = state.result + state.value;
                        }
                        break;
    
                    case '-':
                        if (state.result && state.value) {
                            resultValue = state.result - state.value;
                        } 
                        break;
                
                    default:
                        return {
                            ...state,
                            result: resultValue,
                            operation: null,
                            value: null,
                            rendering: resultValue,
                        }
                }
                return {
                    ...state,
                    result: resultValue,
                    operation: action.payload,
                    value: null,
                    rendering: resultValue,
                } 
            }


        case RESET_OPERATION:
            return {...state, operation: null};

        case ADD_VALUE:
            const number = action.payload;
            const { value } = state;
            const newValue = value === null ? action.payload : (String(value).length < DISPLAY_LENGTH ? +(value + String(action.payload)) : value);
            return {
                ...state, 
                value: newValue,
                rendering: newValue
            };

        case RESET_VALUE:
            return {...state, value: null};

        case ADD_OPTION:
            const optionValue = action.payload;
            if (optionValue == 'c') {
                return {
                    ...state,
                    value: null,
                    rendering: 0,
                }
            }
            if (optionValue == 'ca') {
                return {
                    ...state,
                    value: null,
                    result: null,
                    rendering: 0,
                }
            }
            if (optionValue == '+/-') {
                if (state.value) {
                    const changedValue = state.value * (-1);
                    return {
                        ...state,
                        value: changedValue,
                        rendering: changedValue
                    }
                }
            }
            return {...state, option: action.payload}

        case RESET_OPTION:
            return {...state, option: null}
    
        default:
            return {...state};
    }
}
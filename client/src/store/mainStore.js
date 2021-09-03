import React, {createContext, useReducer} from 'react';
import Reducer from "./reducers";
import initialState from "./initialState";

// create global context
const Store = createContext(initialState);

//Wrapper for golbal store provider
function Provider({children}) {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <Store.Provider value={[state, dispatch]}>
            {children}
        </Store.Provider>
    );
}

export default Provider;
export {
    Store
}
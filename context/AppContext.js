import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";
import { AppReducer, initialState } from "./AppReducer";

const AppContext = createContext();


export function AppWrapper({ children }) {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(state.reduce((accumulator, item) => accumulator += item.total(), 0))
        if(typeof window !== 'undefined'){
            const localStoreData = {}
            state.map((item)=>{
                localStoreData[item.serial] = item.quantity
            })
            localStorage.setItem('productKey', JSON.stringify(localStoreData))
        }
    }, [state])

    const contextValue = useMemo(() => {
        return { state, dispatch, total }
    }, [state, dispatch, total])

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )

}

export function useAppContext() {

    return useContext(AppContext);
}
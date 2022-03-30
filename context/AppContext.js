import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";
import { products } from "../database/products";
import { AppReducer, initialState } from "./AppReducer";

const AppContext = createContext();

let localProducts = []

if (typeof window !== 'undefined') {
    console.log('Start');
    const localData = JSON.parse(localStorage.getItem('productKey'))
    for (const id in localData) {
        const prevLocal = products.filter(item => item.serial === id).flat().map(item => item.serial === id ? { ...item, ...(item.quantity = localData[id]) } : item)
        localProducts.push(prevLocal)

    }

}

export function AppWrapper({ children }) {
    const [state, dispatch] = useReducer(AppReducer, localProducts.flat());
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(state.reduce((accumulator, item) => accumulator += item.total(), 0))
        if (typeof window !== 'undefined') {
            const localStoreData = {}
            state.map((item) => {
                localStoreData[item.serial] = item.quantity
            })
            localStorage.setItem('productKey', JSON.stringify(localStoreData))
        }
    }, [state])

    

    const contextValue = useMemo(() => {
        const disDiv = {pointerEvents:"none",opacity:".5"}
        return { state, dispatch, total,disDiv }
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
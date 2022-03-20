export const initialState = [];

export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'add_product':{
            return [...state,action.value]
        }
       
    }
}
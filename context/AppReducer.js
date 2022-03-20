export const initialState = [];

export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'add_product':
            if(state.find(item => item.serial === action.value.serial)){
                return state?.map(item => item?.serial === action?.value?.serial ? { ...item, ...(++item.quantity)}:item)
            }else{
                return [...state,action.value]
            }
           
        default:
            return state

    }
}
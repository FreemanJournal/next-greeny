
export const initialState = [];

export const AppReducer = (state, action) => {
    const oldProduct = state.find(item => item.serial === action.value.serial)

    switch (action.type) {
        case 'add_product':
            if (oldProduct) {
                return state?.map(item => item?.serial === action?.value?.serial ? { ...item, ...(++item.quantity) } : item)
            } else {
                return [...state, action.value];
            }
        case 'update_product_quantity':
            if (oldProduct) {
                return state?.map(item => item?.serial === action?.value?.serial ? { ...item, ...(item.quantity = action.value.productQtn) } : item)
            }
        case 'delete_product':
            const del_item_index = state.indexOf(state.find(item => item.serial === action.value))
            if (del_item_index > -1) {
                state.splice(del_item_index, 1)
                return state;
            }
           
        default:
            return state;

    }
}
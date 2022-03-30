
export const initialState = []

export const AppReducer = (state, action) => {
    const { item, productQtn } = action.value
    const oldProduct = state?.find(product => product?.serial === item?.serial)

    switch (action.type) {
        case 'add_product':
            if (oldProduct) {
                return state?.map(oldItem => oldItem.serial === item.serial ? { ...oldItem, ...(oldItem.quantity = productQtn === 1 ? oldItem.quantity + 1 : productQtn) } : oldItem)
            } else {
                return [...state, item];
            }
        case 'delete_product':
            return state.filter(item => item.serial !== action.value)
        case 'clear_cart':
             return state = []
        default:
            return state;

    }
}
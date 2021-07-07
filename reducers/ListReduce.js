module.exports = listReducer = (state = ['Carla'], action) => {  //maneira diferente de fazer outro reducer

    switch (action.type) {

        case 'ADD_ITEM':
            return [...state, action.payload]

        default:
            return state;
    }
}

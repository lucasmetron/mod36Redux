const redux = require('redux');
const createStore = redux.createStore();

const incrementAction = { type: 'INCREMENT' };
const decrementAction = { type: 'DECREMENT' };


function counterReducer(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1

        case 'DECREMENT':
            return state + 2;

        default:
            return state;
    }
}

const store = createStore(counterReducer);

store.subscribe(() => { console.log(store.getState()) });

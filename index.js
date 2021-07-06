const redux = require('redux');
const createStore = redux.createStore;

const incrementAction = (value) => { return { type: 'INCREMENT', payload: value || 1 } }; //se não tiver value payload recebe 1
const decrementAction = (value) => { return { type: 'DECREMENT', payload: value || 1 } };



function counterReducer(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;

        case 'DECREMENT':
            return state - action.payload;

        default:
            return state;
    }
}

const store = createStore(counterReducer); //salvando nosso estado dentro da store

console.log('estado inicial ' + store.getState());

store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch(incrementAction(10)); //aqui é dispatch que entrega a action com payload pro nosso reducer 
store.dispatch(decrementAction(20)); //aqui é dispatch que entrega a action com payload pro nosso reducer 

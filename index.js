const redux = require('redux');
const createStore = redux.createStore; //colocando o redux dentro da const createStore

const incrementAction = { type: 'INCREMENT', payload: 1 }; /
const increment2Action = { type: 'INCREMENT', payload: 2 }; //AQUI É UMA AÇÃO
const decrementAction = { type: 'DECREMENT', payload: 1 }; //AQUI É UMA AÇÃO
const decrement2Action = { type: 'DECREMENT', payload: 2 };


function counterReducer(state = 0, action) { //AQUI É O REDUCER
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload

        case 'DECREMENT':
            return state - action.payload;

        default:
            return state;
    }
}

const store = createStore(counterReducer); //salvando nosso estado dentro da store

console.log('estado incial ' + store.getState());

store.subscribe(() => { //Função subscribe executa toda vez que o estado mudar.
    console.log(store.getState())
});

store.dispatch(increment2Action); //aqui é dispatch que entrega a action pro nosso reducer 
store.dispatch(increment2Action); //aqui é dispatch que entrega a action pro nosso reducer 

store.dispatch(decrement2Action); //aqui é dispatch que entrega a action pro nosso reducer 
store.dispatch(decrement2Action); //aqui é dispatch que entrega a action pro nosso reducer 

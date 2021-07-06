const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

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

// -----------------------------------------

const addItemAction = (item) => { return { type: 'ADD_TEM', payload: item } }

const listReducer = (state = ['Carla'], action) => {  //maneira diferente de fazer outro reducer

    switch (action.type) {

        case 'ADD_TEM':
            return [...state, action.payload]

        default:
            return state;
    }
}

const allReducers = combineReducers({
    counter: counterReducer,
    list: listReducer
})

const store = createStore(allReducers); //salvando nosso estado dentro da store

console.log('estado inicial ' + store.getState().list); //Pegando o primeiro valor da lista antes de alterar

store.subscribe(() => { console.log(store.getState()) });

store.dispatch(addItemAction('Lucas'));
store.dispatch(addItemAction('Lais'));

store.dispatch(incrementAction(10)); //aqui é dispatch que entrega a action com payload pro nosso reducer 
store.dispatch(decrementAction(20)); //aqui é dispatch que entrega a action com payload pro nosso reducer 

console.log("Meu nome é: " + store.getState().list[1])

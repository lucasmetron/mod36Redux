const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers; //função para combinar reducers

const { incrementAction, decrementAction } = require('./actions/CounterActions');
const { addItemAction } = require('./actions/listActions');

const counterReducer = require('./reducers/CounterReducer');
const listReducer = require('./reducers/ListReduce');


const allReducers = combineReducers({ //aqui onde é feito a comniação dos reducers
    counter: counterReducer,
    list: listReducer
})

const store = createStore(allReducers); //salvando nossos reducers com seus estados dentro da store

store.subscribe(() => { console.log(store.getState()) });

store.dispatch(addItemAction('Lucas'));

store.dispatch(incrementAction(10));
store.dispatch(decrementAction(5));

console.log("Meu nome é: " + store.getState().list[1])//expemplo

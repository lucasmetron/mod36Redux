const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware; //preciso para usar o redux thunk
const thunk = require('redux-thunk').default; //preciso para usar o redux thunk

const fetch = require('node-fetch'); //no node nao tem fetch, por isso precismos importar



const initialState = [
    {
        id: 0,
        title: 'tarefa',
        completed: false
    }
]

const addItem = (item) => { return { type: 'ADD_ITEM', payload: item } }

const loadItemAndAdd = () => { //feito uma action com uma assíncrona
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => {
            return res.json();
        }).then(json => {
            dispatch(addItem(json))
        })
    }
}

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload]

        default:
            return state;
    }
}

const store = createStore(listReducer, applyMiddleware(thunk)); //quando for criado a loja precisa ser passado o thunk

store.subscribe(() => { console.log(store.getState()) })

store.dispatch(addItem({ id: 1, title: "teste", completed: true })) //utilizando action normal
store.dispatch(loadItemAndAdd()); //utilizando action com thunk 


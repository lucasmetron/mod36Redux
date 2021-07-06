const addItemAction = (item) => { return { type: 'ADD_ITEM', payload: item || 'SEM NOME' } }

module.exports = {
    addItemAction,
}
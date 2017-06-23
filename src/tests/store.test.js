import Store from '../stores/store'

const store = new Store()
const cartStore = store.cartStore
const inventoryStore = store.inventoryStore

it('items contains 1 item', () => {
    expect(cartStore.getItemsInCart.length).toEqual(1)
})

it('add item to inventory should increase inventory by 1', () => {
    
})
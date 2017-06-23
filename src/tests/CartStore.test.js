import Store from '../stores/store'

const store = new Store()
const cartStore = store.cartStore
it('items contains 1 item', () => {
    expect(cartStore.getItemsInCart.length).toEqual(1)
})
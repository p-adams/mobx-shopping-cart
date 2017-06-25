import Store from '../../stores/store'

const store = new Store()
const cartStore = store.cartStore

it('there are two items in the shopping cart', () => {
    expect(cartStore.getItemsInCart.length).toEqual(2)
})

it('cart total should be 101', () => {
    expect(cartStore.calcTotal).toEqual(101)
})
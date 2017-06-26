import Store from '../../stores/store'

const store = new Store()
const cartStore = store.cartStore

it('there are two items in the shopping cart', () => {
    expect(cartStore.getItemsInCart.length).toEqual(2)
})

it('cart total should be 101', () => {
    expect(cartStore.calcTotal).toEqual(101)
})

it('should update quantity of first item in cart from 1 to 2', () => {
    cartStore.getItemsInCart.forEach(item => {
        if(item.id === 1) {
            cartStore.updateQuantity(1, 2)
        }
    })
    expect(cartStore.getItemsInCart[0].quantity).toEqual(2)
})

it('should remove item by id from the cart', () => {
    cartStore.removeItemFromCart(1)
    expect(cartStore.getItemsInCart.length).toEqual(1)
})
import {action, computed, extendObservable} from 'mobx'

class CartStore {
    constructor() {
        extendObservable(this, {
            cartIsOpen: false,
            itemsInCart: [
                {id: 1, item: "REAL ISHOD WAIR", quantity: 1, price: 49.00}
            ],
            getItemsInCart: computed(() => {
                return this.itemsInCart
            }),
            showCart: action(() => {
                this.cartIsOpen = !this.cartIsOpen
            })
        })
    }
}
export default CartStore
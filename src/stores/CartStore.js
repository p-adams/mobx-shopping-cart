import {action, computed, extendObservable} from 'mobx'

class CartStore {
    constructor() {
        extendObservable(this, {
            isCartOpen: false,
            itemsInCart: [
                {id: 1, item: "REAL ISHOD WAIR", quantity: 1, price: 49.00},
                {id: 2, item: 'PLAN B JOSLIN', quantity: 1, price: 52.00}
            ],
            getItemsInCart: computed(() => {
                return this.itemsInCart
            }),
            showCart: action(() => {
                this.isCartOpen = !this.isCartOpen
            })
        })
    }
}
export default CartStore
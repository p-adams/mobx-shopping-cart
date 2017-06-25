import {action, computed, extendObservable} from 'mobx'

class CartStore {
    constructor() {
        extendObservable(this, {
            isCartOpen: false,
            total: 0,
            numItemsInCart: 0,
            itemsInCart: [
                {id: 1, item: "REAL ISHOD WAIR", quantity: 1, price: 49.00},
                {id: 2, item: 'PLAN B JOSLIN', quantity: 1, price: 52.00}
            ],
            getItemsInCart: computed(() => {
                return this.itemsInCart
            }),
            getNumItemsInCart: computed(() => {
                return this.itemsInCart.length
            }),
            showTotal: computed(() => {
                return this.total
            }),
            calcTotal: action(() => {
                
            }),
            showCart: action(() => {
                this.isCartOpen = !this.isCartOpen
            })
        })
    }
}
export default CartStore
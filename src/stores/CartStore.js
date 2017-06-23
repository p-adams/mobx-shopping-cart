import {computed, extendObservable} from 'mobx'

class CartStore {
    constructor() {
        extendObservable(this, {
            itemsInCart: [
                {id: 1, item: "REAL ISHOD WAIR", quantity: 1, price: 49.00}
            ],
            getItemsInCart: computed(() => {
                return this.itemsInCart
            })
        })
    }
}
export default CartStore
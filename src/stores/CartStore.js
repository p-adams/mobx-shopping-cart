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
            calcTotal: computed(() => {
                return this.itemsInCart.reduce((total, item) => total + (item.quantity * item.price), 0)
            }),
            showCart: action(() => {
                this.isCartOpen = !this.isCartOpen
            }),
            updateQuantity: action((id, quantity) => {
                this.itemsInCart.forEach(item => id === item.id ? item.quantity = quantity : null)
            }),
            removeItemFromCart: action(id => {
                for(let i = 0; i < this.itemsInCart.length; i++) {
                    if(this.itemsInCart[i].id === id) this.itemsInCart.splice(i, 1)
                }
            })
        })
    }
}
export default CartStore
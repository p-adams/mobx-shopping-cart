import {action, computed, extendObservable} from 'mobx'


class Item {
    constructor(id, item, quantity, price, seller) {
        extendObservable(this, {
            id,
            item,
            quantity,
            price,
            seller
        })
    }

}

class InventoryStore {
    constructor() {
        extendObservable(this, {
            id: 2,
            isSeller: false,
            item: '',
            quantity: 1,
            price: '',
            seller: '',
            inventory: [
                    new Item(1, "Nike Air Max", 4, 109.99, 'Nike'),
            ],
            getInventory: computed(() => {
                return this.inventory
            }),
            // method for testing store
            addNewItem: action((item, quantity, price) => {
                this.inventory.push(new Item(this.id++, item, quantity, price))
            }),
            toggleSeller: action(() => {
                this.isSeller = !this.isSeller
            }),
            addItem: action(() => {
                this.isSeller = !this.isSeller
                 this.inventory.push(new Item(this.id++, this.item, this.quantity, this.price, this.seller))
            }),
            getItem: action(item => {
                this.item = item
            }),
            getQuantity: action(quantity => {
                this.quantity = quantity
            }),
            getPrice: action(price => {
                this.price = price
            }),
            getSeller: action(seller => {
                this.seller = seller
            })
        })
    }
}

export default InventoryStore